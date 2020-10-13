import { Identity, SecurityToken } from '~/api/entities';
import { PolymeshError, Procedure } from '~/base';
import { AuthorizationType, ErrorCode, Role, RoleType } from '~/types';
import { SignerType } from '~/types/internal';
import {
  authorizationToAuthorizationData,
  dateToMoment,
  signerToString,
  signerValueToSignatory,
} from '~/utils';

export interface ModifyPrimaryIssuanceAgentParams {
  target: string | Identity;
  requestExpiry?: Date;
}

/**
 * @hidden
 */
export type Params = ModifyPrimaryIssuanceAgentParams & {
  ticker: string;
};

/**
 * @hidden
 */
export async function prepareModifyPrimaryIssuanceAgent(
  this: Procedure<Params, void>,
  args: Params
): Promise<void> {
  const {
    context: {
      polymeshApi: {
        tx: { identity },
      },
    },
    context,
  } = this;

  const { target, ticker, requestExpiry } = args;

  const securityToken = new SecurityToken({ ticker }, context);

  const [invalidDids, { primaryIssuanceAgent }] = await Promise.all([
    context.getInvalidDids([target]),
    securityToken.details(),
  ]);

  if (invalidDids.length) {
    throw new PolymeshError({
      code: ErrorCode.ValidationError,
      message: 'The supplied Identity does not exist',
    });
  }

  if (primaryIssuanceAgent) {
    if (primaryIssuanceAgent.did === signerToString(target)) {
      throw new PolymeshError({
        code: ErrorCode.ValidationError,
        message: 'The supplied Identity is currently the primary issuance agent',
      });
    }
  }

  const rawSignatory = signerValueToSignatory(
    { type: SignerType.Identity, value: signerToString(target) },
    context
  );

  const rawAuthorizationData = authorizationToAuthorizationData(
    { type: AuthorizationType.TransferPrimaryIssuanceAgent, value: ticker },
    context
  );

  let rawExpiry;
  if (requestExpiry) {
    if (requestExpiry <= new Date()) {
      throw new PolymeshError({
        code: ErrorCode.ValidationError,
        message: 'The request expiry must be a future date',
      });
    } else {
      rawExpiry = dateToMoment(requestExpiry, context);
    }
  } else {
    rawExpiry = null;
  }

  this.addTransaction(identity.addAuthorization, {}, rawSignatory, rawAuthorizationData, rawExpiry);
}

/**
 * @hidden
 */
export function getRequiredRoles({ ticker }: Params): Role[] {
  return [{ type: RoleType.TokenOwner, ticker }];
}

/**
 * @hidden
 */
export const modifyPrimaryIssuanceAgent = new Procedure(
  prepareModifyPrimaryIssuanceAgent,
  getRequiredRoles
);
