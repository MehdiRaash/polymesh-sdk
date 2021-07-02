import { Identity, PolymeshError, Procedure, SecurityToken } from '~/internal';
import { AuthorizationType, ErrorCode, RoleType, TxTags } from '~/types';
import { ProcedureAuthorization, SignerType } from '~/types/internal';
import {
  authorizationToAuthorizationData,
  dateToMoment,
  signerToString,
  signerValueToSignatory,
} from '~/utils/conversion';

export interface ModifyCorporateActionsAgentParams {
  /**
   * identity to be set as Corporate Actions Agent
   */
  target: string | Identity;
  /**
   * date at which the authorization request to modify the Corporate Actions Agent expires (optional, never expires if a date is not provided)
   */
  requestExpiry?: Date;
}

/**
 * @hidden
 */
export type Params = { ticker: string } & ModifyCorporateActionsAgentParams;

/**
 * @hidden
 */
export async function prepareModifyCorporateActionsAgent(
  this: Procedure<Params, void>,
  args: Params
): Promise<void> {
  const {
    context: {
      polymeshApi: { tx },
    },
    context,
  } = this;
  const { ticker, target, requestExpiry } = args;

  const securityToken = new SecurityToken({ ticker }, context);

  const [invalidDids, agent] = await Promise.all([
    context.getInvalidDids([target]),
    securityToken.corporateActions.getAgents(),
  ]);

  if (invalidDids.length) {
    throw new PolymeshError({
      code: ErrorCode.ValidationError,
      message: 'The supplied Identity does not exist',
    });
  }

  if (agent[0].did === signerToString(target)) {
    throw new PolymeshError({
      code: ErrorCode.ValidationError,
      message: 'The supplied Identity is already the Corporate Actions Agent',
    });
  }

  const rawSignatory = signerValueToSignatory(
    { type: SignerType.Identity, value: signerToString(target) },
    context
  );

  const rawAuthorizationData = authorizationToAuthorizationData(
    { type: AuthorizationType.TransferCorporateActionAgent, value: ticker },
    context
  );

  let rawExpiry;
  if (!requestExpiry) {
    rawExpiry = null;
  } else if (requestExpiry <= new Date()) {
    throw new PolymeshError({
      code: ErrorCode.ValidationError,
      message: 'The request expiry must be a future date',
    });
  } else {
    rawExpiry = dateToMoment(requestExpiry, context);
  }

  this.addTransaction(
    tx.identity.addAuthorization,
    {},
    rawSignatory,
    rawAuthorizationData,
    rawExpiry
  );
}

/**
 * @hidden
 */
export function getAuthorization(
  this: Procedure<Params>,
  { ticker }: Params
): ProcedureAuthorization {
  return {
    identityRoles: [{ type: RoleType.TokenOwner, ticker }],
    signerPermissions: {
      transactions: [TxTags.identity.AddAuthorization],
      portfolios: [],
      tokens: [new SecurityToken({ ticker }, this.context)],
    },
  };
}

/**
 * @hidden
 */
export const modifyCorporateActionsAgent = (): Procedure<Params, void> =>
  new Procedure(prepareModifyCorporateActionsAgent, getAuthorization);
