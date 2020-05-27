import { Moment } from '@polkadot/types/interfaces';
import { Claim as MeshClaim } from 'polymesh-types/types';

import { Identity } from '~/api/entities';
import { PolymeshError, Procedure } from '~/base';
import { IdentityId } from '~/polkadot';
import { ClaimTargets, ClaimType, ErrorCode, Role, RoleType } from '~/types';
import { claimToMeshClaim, dateToMoment, stringToIdentityId, valueToDid } from '~/utils';

interface AddClaimItem {
  target: IdentityId;
  claim: MeshClaim;
  expiry: Moment | null;
}

export interface AddClaimsParams {
  claims: ClaimTargets[];
}

/**
 * @hidden
 */
export async function prepareAddClaims(
  this: Procedure<AddClaimsParams, void>,
  args: AddClaimsParams
): Promise<void> {
  const { claims } = args;

  const {
    context: {
      polymeshApi: { tx },
    },
    context,
  } = this;

  const addClaimItems: AddClaimItem[] = [];
  const allTargets: (string | Identity)[] = [];

  claims.forEach(({ targets, claim, expiry }) => {
    targets.forEach(target => {
      allTargets.push(target);
      addClaimItems.push({
        target: stringToIdentityId(valueToDid(target), context),
        claim: claimToMeshClaim(claim, context),
        expiry: expiry ? dateToMoment(expiry, context) : null,
      });
    });
  });

  const nonExistentDids: string[] = await context.getInvalidDids(allTargets);

  if (nonExistentDids.length) {
    throw new PolymeshError({
      code: ErrorCode.ValidationError,
      message: `Some of the supplied identity IDs do not exist: ${nonExistentDids.join(', ')}`,
    });
  }

  this.addTransaction(tx.identity.addClaimsBatch, {}, addClaimItems);
}

/**
 * @hidden
 */
export function getRequiredRoles({ claims }: AddClaimsParams): Role[] {
  if (claims.some(({ claim: { type } }) => type === ClaimType.CustomerDueDiligence)) {
    return [{ type: RoleType.CddProvider }];
  }
  return [];
}

export const addClaims = new Procedure(prepareAddClaims, getRequiredRoles);
