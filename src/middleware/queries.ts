import gql from 'graphql-tag';

import {
  QueryDidsWithClaimsArgs,
  QueryEventsByIndexedArgsArgs,
  QueryProposalsArgs,
  QueryProposalVotesArgs,
} from '~/middleware/types';
import { GraphqlQuery } from '~/types/internal';

/**
 * @hidden
 *
 * Get the current voters list for given pipId
 */
export function proposalVotes(
  variables: QueryProposalVotesArgs
): GraphqlQuery<QueryProposalVotesArgs> {
  const query = gql`
    query ProposalVotesQuery(
      $pipId: Int!
      $vote: Boolean!
      $count: Int
      $skip: Int
      $orderBy: ProposalVotesOrderByInput
    ) {
      proposalVotes(pipId: $pipId, vote: $vote, count: $count, skip: $skip, orderBy: $orderBy) {
        blockId
        eventIdx
        account
        vote
        weight
      }
    }
  `;

  return {
    query,
    variables,
  };
}

/**
 * @hidden
 *
 * Get all dids with at least one claim for a given scope and from one the given trustedClaimIssuers
 */
export function didsWithClaims(
  variables: QueryDidsWithClaimsArgs
): GraphqlQuery<QueryDidsWithClaimsArgs> {
  const query = gql`
    query DidsWithClaimsQuery(
      $dids: [String!]
      $scope: String
      $trustedClaimIssuers: [String!]
      $claimTypes: [ClaimTypeEnum!]
      $count: Int
      $skip: Int
    ) {
      didsWithClaims(
        dids: $dids
        scope: $scope
        trustedClaimIssuers: $trustedClaimIssuers
        claimTypes: $claimTypes
        count: $count
        skip: $skip
      ) {
        totalCount
        items {
          did
          claims {
            targetDID
            issuer
            issuance_date
            last_update_date
            expiry
            type
            jurisdiction
            scope
          }
        }
      }
    }
  `;

  return {
    query,
    variables,
  };
}

/**
 * @hidden
 *
 * Get a single event by any of its indexed arguments
 */
export function eventByIndexedArgs(
  variables: QueryEventsByIndexedArgsArgs
): GraphqlQuery<QueryEventsByIndexedArgsArgs> {
  const query = gql`
    query EventByIndexedArgsQuery(
      $moduleId: ModuleIdEnum!
      $eventId: EventIdEnum!
      $eventArg0: String
      $eventArg1: String
      $eventArg2: String
    ) {
      eventByIndexedArgs(
        moduleId: $moduleId
        eventId: $eventId
        eventArg0: $eventArg0
        eventArg1: $eventArg1
        eventArg2: $eventArg2
      ) {
        block_id
        event_idx
        extrinsic_idx
        block {
          datetime
        }
      }
    }
  `;

  return {
    query,
    variables,
  };
}

/**
 * @hidden
 *
 * Get all proposals optionally filtered by pipId, proposer or state
 */
export function proposals(
  variables?: QueryProposalsArgs
): GraphqlQuery<QueryProposalsArgs | undefined> {
  const query = gql`
    query ProposalsQuery(
      $pipIds: [Int!]
      $proposers: [String!]
      $states: [ProposalState!]
      $count: Int
      $skip: Int
      $orderBy: ProposalOrderByInput
    ) {
      proposals(
        pipIds: $pipIds
        proposers: $proposers
        states: $states
        count: $count
        skip: $skip
        orderBy: $orderBy
      ) {
        pipId
        proposer
        createdAt
        url
        description
        coolOffEndBlock
        endBlock
        proposal
        lastState
        lastStateUpdatedAt
        totalVotes
        totalAyesWeight
        totalNaysWeight
      }
    }
  `;

  return {
    query,
    variables,
  };
}
