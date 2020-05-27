import { Balance } from '@polkadot/types/interfaces';
import { chunk } from 'lodash';

import { SecurityToken } from '~/api/entities';
import { PolymeshError, Procedure } from '~/base';
import { IdentityId } from '~/polkadot';
import { ErrorCode, IssuanceData, Role, RoleType, TransferStatus } from '~/types';
import { numberToBalance, stringToIdentityId, stringToTicker, valueToDid } from '~/utils';
import { MAX_DECIMALS, MAX_TOKEN_AMOUNT } from '~/utils/constants';

export interface IssueTokensParams {
  issuanceData: IssuanceData[];
}
export type Params = IssueTokensParams & {
  ticker: string;
};

/**
 * @hidden
 */
export async function prepareIssueTokens(
  this: Procedure<Params, SecurityToken>,
  args: Params
): Promise<SecurityToken> {
  const {
    context: {
      polymeshApi: {
        tx: { asset },
      },
    },
    context,
  } = this;
  const { ticker, issuanceData } = args;

  const securityToken = new SecurityToken({ ticker }, context);

  const { isDivisible, totalSupply } = await securityToken.details();
  const values = issuanceData.map(({ amount }) => amount);

  values.forEach(value => {
    if (isDivisible) {
      if (value.decimalPlaces() > MAX_DECIMALS) {
        throw new PolymeshError({
          code: ErrorCode.ValidationError,
          message: `Issuance amounts cannot have more than ${MAX_DECIMALS} decimals`,
        });
      }
    } else {
      if (value.decimalPlaces()) {
        throw new PolymeshError({
          code: ErrorCode.ValidationError,
          message: 'Cannot issue decimal amounts of an indivisible token',
        });
      }
    }
  });

  const supplyAfterMint = values.reduce((acc, next) => {
    return acc.plus(next);
  }, totalSupply);

  if (supplyAfterMint.isGreaterThan(MAX_TOKEN_AMOUNT)) {
    throw new PolymeshError({
      code: ErrorCode.ValidationError,
      message: `This issuance operation will cause the total supply of "${ticker}" to exceed the maximum allowed (${MAX_TOKEN_AMOUNT.toFormat()})`,
    });
  }

  const rawTicker = stringToTicker(ticker, context);

  const investors: IdentityId[] = [];
  const balances: Balance[] = [];
  const canNotMintDids: Array<string> = [];

  const issuanceDataItemsChunks = chunk(issuanceData, 10);

  await Promise.all(
    issuanceDataItemsChunks.map(async issuanceDataItemsChunk => {
      // TODO: queryMulti
      const transferStatuses = await Promise.all(
        issuanceDataItemsChunk.map(({ identity, amount }) =>
          securityToken.transfers.canMint({ to: identity, amount })
        )
      );

      transferStatuses.forEach((canTransfer, index) => {
        const { identity, amount } = issuanceDataItemsChunk[index];
        investors.push(stringToIdentityId(valueToDid(identity), context));
        balances.push(numberToBalance(amount, context));

        if (canTransfer !== TransferStatus.Success) {
          canNotMintDids.push(`${identity} [${canTransfer}]`);
        }
      });
    })
  );

  if (canNotMintDids.length) {
    throw new PolymeshError({
      code: ErrorCode.ValidationError,
      message: `You can't issue tokens to some of the supplied identities: ${canNotMintDids.join(
        ', '
      )}`,
    });
  }

  this.addTransaction(
    asset.batchIssue,
    { batchSize: issuanceData.length },
    rawTicker,
    investors,
    balances
  );

  return securityToken;
}

/**
 * @hidden
 */
export function getRequiredRoles({ ticker }: Params): Role[] {
  return [{ type: RoleType.TokenOwner, ticker }];
}

export const issueTokens = new Procedure(prepareIssueTokens, getRequiredRoles);
