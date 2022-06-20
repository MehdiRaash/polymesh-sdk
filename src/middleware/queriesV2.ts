import BigNumber from 'bignumber.js';
import gql from 'graphql-tag';

import { ClaimTypeEnum, QueryInvestmentsArgs } from '~/middleware/types';
import {
  Asset,
  AssetHolder,
  AssetHoldersOrderBy,
  ClaimsGroupBy,
  ClaimsOrderBy,
  Distribution,
  DistributionPayment,
  Event,
  EventsOrderBy,
  Extrinsic,
  ExtrinsicsOrderBy,
  Instruction,
  InstructionsOrderBy,
  InvestmentsOrderBy,
  Leg,
  LegsOrderBy,
  Portfolio,
  PortfolioMovement,
  PortfolioMovementsOrderBy,
  TickerExternalAgent,
  TickerExternalAgentAction,
  TickerExternalAgentActionsOrderBy,
  TickerExternalAgentHistoriesOrderBy,
  TickerExternalAgentHistory,
  TickerExternalAgentsOrderBy,
  TrustedClaimIssuer,
} from '~/middleware/typesV2';
import { GraphqlQuery } from '~/types/internal';
import { PaginatedQueryArgs, QueryArgs } from '~/types/utils';

/**
 *  @hidden
 */
function createClaimsFilters(variables: ClaimsQueryFilter): {
  args: string;
  filter: string;
} {
  const args = ['$size: Int, $start: Int'];
  const filters = ['revokeDate: { isNull: true }'];
  const { dids, claimTypes, trustedClaimIssuers, scope, includeExpired } = variables;
  if (dids) {
    args.push('$dids: [String!]');
    filters.push('targetId: { in: $dids }');
  }
  if (claimTypes) {
    args.push('$claimTypes: [String!]!');
    filters.push('type: { in: $claimTypes }');
  }
  if (trustedClaimIssuers) {
    args.push('$trustedClaimIssuers: [String!]');
    filters.push('issuerId: { in: $trustedClaimIssuers }');
  }
  if (scope !== undefined) {
    args.push('$scope: JSON!');
    filters.push('scope: { equalTo: $scope }');
  }
  if (!includeExpired) {
    args.push('$expiryTimestamp: BigFloat');
    filters.push('filterExpiry: { lessThan: $expiryTimestamp }');
  }
  return {
    args: args.length ? `(${args.join()})` : '',
    filter: `filter: { ${filters.join()} },`,
  };
}

export interface ClaimsQueryFilter {
  dids?: string[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  scope?: any;
  trustedClaimIssuers?: string[];
  claimTypes?: ClaimTypeEnum[];
  includeExpired?: boolean;
}
/**
 * @hidden
 *
 * Get all dids with at least one claim for a given scope and from one of the given trusted claim issuers
 */
export function claimsGroupingQuery(
  variables: ClaimsQueryFilter,
  orderBy = ClaimsOrderBy.TargetIdAsc,
  groupBy = ClaimsGroupBy.TargetId
): GraphqlQuery<PaginatedQueryArgs<ClaimsQueryFilter>> {
  const { args, filter } = createClaimsFilters(variables);
  const query = gql`
    query claimsGroupingQuery
      ${args}
     {
      claims(
        ${filter}
        orderBy: [${orderBy}]
      ) {
        groupedAggregates(groupBy: [${groupBy}], having: {}) {
          keys
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
 * Get all claims that a given target DID has, with a given scope and from one of the given trustedClaimIssuers
 */
export function claimsQuery(
  filters: ClaimsQueryFilter,
  size?: BigNumber,
  start?: BigNumber
): GraphqlQuery<PaginatedQueryArgs<ClaimsQueryFilter>> {
  const { args, filter } = createClaimsFilters(filters);

  const query = gql`
    query ClaimsQuery
      ${args}
     {
      claims(
        ${filter}
        orderBy: [${ClaimsOrderBy.TargetIdAsc}, ${ClaimsOrderBy.CreatedBlockIdAsc}, ${ClaimsOrderBy.EventIdxAsc}]
        first: $size
        offset: $start
      ) {
        totalCount
        nodes {
          targetId
          type
          scope
          cddId
          issuerId
          issuanceDate
          lastUpdateDate
          expiry
          jurisdiction
        }
      }
    }
  `;

  return {
    query,
    variables: { ...filters, size: size?.toNumber(), start: start?.toNumber() },
  };
}

/**
 * @hidden
 *
 * Get all investments for a given offering
 */
export function investments(variables: QueryInvestmentsArgs): GraphqlQuery<QueryInvestmentsArgs> {
  const query = gql`
    query InvestmentsQuery($stoId: Int!, $ticker: String!, $count: Int, $skip: Int) {
      investments(
        filter: { stoId: { equalTo: $stoId }, offeringToken: { equalTo: $ticker } }
        first: $count
        offset: $skip
        orderBy: [${InvestmentsOrderBy.CreatedBlockIdAsc}]
      ) {
        totalCount
        nodes {
          investorId
          offeringTokenAmount
          raiseTokenAmount
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
 * Get a specific instruction within a venue for a specific event
 */
export function instruction(
  variables: Pick<Instruction, 'eventId' | 'id'>
): GraphqlQuery<Pick<Instruction, 'eventId' | 'id'>> {
  const query = gql`
    query InstructionsQuery($eventId: String!, $id: String!) {
      instructions(
        filter: { eventId: { equalTo: $eventId }, id: { equalTo: $id } }
        first: 1
        orderBy: [${InstructionsOrderBy.IdDesc}]
      ) {
        nodes {
          eventIdx
          eventId
          status
          settlementType
          updatedBlock {
            blockId
            hash
            datetime
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
 *  @hidden
 */
function createEventFilters(
  attributes: QueryArgs<Event, 'moduleId' | 'eventId' | 'eventArg0' | 'eventArg1' | 'eventArg2'>
): {
  args: string;
  filter: string;
} {
  const args: string[] = ['$start: Int', '$size: Int'];
  const filters: string[] = [];

  Object.keys(attributes).forEach(attribute => {
    if (attributes[attribute as keyof typeof attributes]) {
      args.push(`$${attribute}: String!`);
      filters.push(`${attribute}: { equalTo: $${attribute} }`);
    }
  });

  return {
    args: args.length ? `(${args.join()})` : '',
    filter: filters.length ? `filter: { ${filters.join()} }` : '',
  };
}

/**
 * @hidden
 *
 * Get a single event by any of its indexed arguments
 */
export function eventsByArgs(
  filters: QueryArgs<Event, 'moduleId' | 'eventId' | 'eventArg0' | 'eventArg1' | 'eventArg2'>,
  size?: BigNumber,
  start?: BigNumber
): GraphqlQuery<
  PaginatedQueryArgs<
    QueryArgs<Event, 'moduleId' | 'eventId' | 'eventArg0' | 'eventArg1' | 'eventArg2'>
  >
> {
  const { args, filter } = createEventFilters(filters);
  const query = gql`
    query EventsQuery
      ${args}
     {
      events(
        ${filter}
        orderBy: [${EventsOrderBy.BlockIdAsc}]
        first: $size
        offset: $start
      ) {
        nodes {
          eventIdx
          block {
            blockId
            hash
            datetime
          }
        }
      }
    }
  `;

  return {
    query,
    variables: { ...filters, size: size?.toNumber(), start: start?.toNumber() },
  };
}

/**
 * @hidden
 *
 * Get a transaction by hash
 */
export function extrinsicByHash(
  variables: QueryArgs<Extrinsic, 'extrinsicHash'>
): GraphqlQuery<QueryArgs<Extrinsic, 'extrinsicHash'>> {
  const query = gql`
    query TransactionByHashQuery($transactionHash: String!) {
      extrinsics(filter: { extrinsicHash: { equalTo: $transactionHash } }) {
        nodes {
          extrinsicIdx
          address
          nonce
          moduleId
          callId
          paramsTxt
          success
          specVersionId
          extrinsicHash
          block {
            blockId
            hash
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
 *  @hidden
 */
function createExtrinsicFilters(
  attributes: QueryArgs<Extrinsic, 'blockId' | 'address' | 'moduleId' | 'callId' | 'success'>
): {
  args: string;
  filter: string;
} {
  const args: string[] = ['$start: Int', '$size: Int'];
  const filters: string[] = [];

  Object.keys(attributes).forEach(key => {
    if (attributes[key as keyof typeof attributes]) {
      if (key === 'success') {
        args.push(`$${key}: Int!`);
      } else {
        args.push(`$${key}: String!`);
      }
      filters.push(`${key}: { equalTo: $${key} }`);
    }
  });
  return {
    args: args.length ? `(${args.join()})` : '',
    filter: filters.length ? `filter: { ${filters.join()} },` : '',
  };
}

/**
 * @hidden
 *
 * Get transactions
 */
export function extrinsicsByArgs(
  filters: QueryArgs<Extrinsic, 'blockId' | 'address' | 'moduleId' | 'callId' | 'success'>,
  size?: BigNumber,
  start?: BigNumber,
  orderBy: ExtrinsicsOrderBy = ExtrinsicsOrderBy.BlockIdAsc
): GraphqlQuery<
  PaginatedQueryArgs<
    QueryArgs<Extrinsic, 'blockId' | 'address' | 'moduleId' | 'callId' | 'success'>
  >
> {
  const { args, filter } = createExtrinsicFilters(filters);
  const query = gql`
    query TransactionsQuery
      ${args}
     {
      extrinsics(
        ${filter}
        orderBy: [${orderBy}]
        first: $size
        offset: $start
      ) {
        totalCount
        nodes {
          blockId
          extrinsicIdx
          address
          nonce
          moduleId
          callId
          paramsTxt
          success
          specVersionId
          extrinsicHash
          block {
            hash
          }
        }
      }
    }
  `;

  return {
    query,
    variables: { ...filters, size: size?.toNumber(), start: start?.toNumber() },
  };
}

/**
 * @hidden
 *
 * Get an trusted claim issuer event for an asset and an issuer
 */
export function trustedClaimIssuerQuery(
  variables: QueryArgs<TrustedClaimIssuer, 'issuer' | 'assetId'>
): GraphqlQuery<QueryArgs<TrustedClaimIssuer, 'issuer' | 'assetId'>> {
  const query = gql`
    query TrustedClaimIssuerQuery($assetId: String!, $issuer: String!) {
      trustedClaimIssuers(
        filter: { assetId: { equalTo: $assetId }, issuer: { equalTo: $issuer } }
      ) {
        nodes {
          eventIdx
          createdBlock {
            blockId
            datetime
            hash
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
 * Get an trusted claim issuer event for an asset and an issuer
 */
export function trustingAssetsQuery(
  variables: QueryArgs<TrustedClaimIssuer, 'issuer'>
): GraphqlQuery<QueryArgs<TrustedClaimIssuer, 'issuer'>> {
  const query = gql`
    query TrustedClaimIssuerQuery($issuer: String!) {
      trustedClaimIssuers(filter: { issuer: { equalTo: $issuer } }) {
        nodes {
          assetId
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
 * Get portfolio details for a given DID and portfolio number
 */
export function portfolioQuery(
  variables: QueryArgs<Portfolio, 'identityId' | 'number'>
): GraphqlQuery<QueryArgs<Portfolio, 'identityId' | 'number'>> {
  const query = gql`
    query PortfolioQuery($identityId: String!, $number: Int!) {
      portfolios(filter: { identityId: { equalTo: $identityId }, number: { equalTo: $number } }) {
        nodes {
          eventIdx
          createdBlock {
            blockId
            datetime
            hash
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
 * Get Asset details for a given ticker
 */
export function assetQuery(
  variables: QueryArgs<Asset, 'ticker'>
): GraphqlQuery<QueryArgs<Asset, 'ticker'>> {
  const query = gql`
    query AssetQuery($ticker: String!) {
      assets(filter: { ticker: { equalTo: $ticker } }) {
        nodes {
          eventIdx
          createdBlock {
            blockId
            datetime
            hash
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
 * Get the event details when external agent added for a ticker
 */
export function tickerExternalAgentsQuery(
  variables: QueryArgs<TickerExternalAgent, 'assetId'>
): GraphqlQuery<QueryArgs<TickerExternalAgent, 'assetId'>> {
  const query = gql`
    query TickerExternalAgentQuery($assetId: String!) {
      tickerExternalAgents(
        filter: { assetId: { equalTo: $assetId } }
        orderBy: [${TickerExternalAgentsOrderBy.CreatedBlockIdDesc}]
        first: 1
      ) {
        nodes {
          eventIdx
          createdBlock {
            blockId
            datetime
            hash
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
 * Get the transaction history of each external agent of an Asset
 */
export function tickerExternalAgentHistoryQuery(
  variables: QueryArgs<TickerExternalAgentHistory, 'assetId'>
): GraphqlQuery<QueryArgs<TickerExternalAgentHistory, 'assetId'>> {
  const query = gql`
    query TickerExternalAgentHistoryQuery($assetId: String!) {
      tickerExternalAgentHistories(
        filter: { assetId: { equalTo: $assetId } }
        orderBy: [${TickerExternalAgentHistoriesOrderBy.CreatedBlockIdAsc}]
      ) {
        nodes {
          identityId
          assetId
          eventIdx
          createdBlock {
            blockId
            hash
            datetime
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
 *  @hidden
 */
function createTickerExternalAgentActionFilters(
  attributes: QueryArgs<
    TickerExternalAgentAction,
    'assetId' | 'callerId' | 'palletName' | 'eventId'
  >
): {
  args: string;
  filter: string;
} {
  const args: string[] = ['$start: Int', '$size: Int'];
  const filters: string[] = [];

  Object.keys(attributes).forEach(key => {
    if (attributes[key as keyof typeof attributes]) {
      args.push(`$${key}: String!`);
      filters.push(`${key}: { equalTo: $${key} }`);
    }
  });
  return {
    args: args.length ? `(${args.join()})` : '',
    filter: filters.length ? `filter: { ${filters.join()} },` : '',
  };
}

/**
 * @hidden
 *
 * Get list of Events triggered by actions (from the set of actions that can only be performed by external agents) that have been performed on a specific Asset
 */
export function tickerExternalAgentActionsQuery(
  filters: QueryArgs<TickerExternalAgentAction, 'assetId' | 'callerId' | 'palletName' | 'eventId'>,
  size?: BigNumber,
  start?: BigNumber
): GraphqlQuery<
  PaginatedQueryArgs<
    QueryArgs<TickerExternalAgentAction, 'assetId' | 'callerId' | 'palletName' | 'eventId'>
  >
> {
  const { args, filter } = createTickerExternalAgentActionFilters(filters);
  const query = gql`
    query TickerExternalAgentActionsQuery
      ${args}
     {
      tickerExternalAgentActions(
        ${filter}
        first: $size
        offset: $start
        orderBy: [${TickerExternalAgentActionsOrderBy.CreatedBlockIdDesc}]
      ) {
        totalCount
        nodes {
          eventIdx
          palletName
          eventId
          callerId
          createdBlock {
            blockId
            datetime
            hash
          }
        }
      }
    }
  `;

  return {
    query,
    variables: { ...filters, size: size?.toNumber(), start: start?.toNumber() },
  };
}

/**
 * @hidden
 *
 * Get distribution details for a CAId
 */
export function distributionQuery(
  variables: QueryArgs<Distribution, 'id'>
): GraphqlQuery<QueryArgs<Distribution, 'id'>> {
  const query = gql`
    query DistributionQuery($id: String!) {
      distribution(id: $id) {
        taxes
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
 * Get history of claims for a distribution
 */
export function distributionPaymentsQuery(
  filters: QueryArgs<DistributionPayment, 'distributionId'>,
  size?: BigNumber,
  start?: BigNumber
): GraphqlQuery<PaginatedQueryArgs<QueryArgs<DistributionPayment, 'distributionId'>>> {
  const query = gql`
    query DistributionPaymentQuery($distributionId: String!, $size: Int, $start: Int) {
      distributionPayments(
        filter: { distributionId: { equalTo: $distributionId } }
        first: $size
        offset: $start
      ) {
        totalCount
        nodes {
          eventId
          targetId
          datetime
          amount
          tax
          createdBlock {
            blockId
            hash
          }
        }
      }
    }
  `;

  return {
    query,
    variables: { ...filters, size: size?.toNumber(), start: start?.toNumber() },
  };
}

/**
 * @hidden
 *
 * Get asset held by a DID
 */
export function assetHoldersQuery(
  filters: QueryArgs<AssetHolder, 'identityId'>,
  size?: BigNumber,
  start?: BigNumber,
  orderBy = AssetHoldersOrderBy.CreatedBlockIdAsc
): GraphqlQuery<PaginatedQueryArgs<QueryArgs<DistributionPayment, 'distributionId'>>> {
  const query = gql`
    query AssetHoldersQuery($identityId: String!, $size: Int, $start: Int) {
      assetHolders(
        filter: { identityId: { equalTo: $identityId } }
        first: $size
        offset: $start
        orderBy: [${orderBy}]
      ) {
        totalCount
        nodes {
          assetId
        }
      }
    }
  `;

  return {
    query,
    variables: { ...filters, size: size?.toNumber(), start: start?.toNumber() },
  };
}

export interface QuerySettlementFilters {
  identityId: string;
  portfolioId?: BigNumber;
  ticker?: string;
  address?: string;
}

/**
 *  @hidden
 */
function createLegFilters({ identityId, portfolioId, ticker, address }: QuerySettlementFilters): {
  args: string;
  filter: string;
  variables: QueryArgs<Leg, 'fromId' | 'toId' | 'assetId' | 'addresses'>;
} {
  const args: string[] = ['$fromId: String!, $toId: String!'];
  const fromIdFilters = ['fromId: { equalTo: $fromId }'];
  const toIdFilters = ['toId: { equalTo: $toId }'];
  const portfolioNumber = portfolioId ? portfolioId.toNumber() : 0;
  const variables: QueryArgs<Leg, 'fromId' | 'toId' | 'assetId' | 'addresses'> = {
    fromId: `${identityId}/${portfolioNumber}`,
    toId: `${identityId}/${portfolioNumber}`,
  };

  if (ticker) {
    variables.assetId = ticker;
    args.push('$assetId: String!');
    const assetIdFilter = 'assetId: { equalTo: $assetId }';
    toIdFilters.push(assetIdFilter);
    fromIdFilters.push(assetIdFilter);
  }

  if (address) {
    variables.addresses = [address];
    args.push('$addresses: [String!]!');
    const addressFilter = 'addresses: { in: $addresses }';
    toIdFilters.push(addressFilter);
    fromIdFilters.push(addressFilter);
  }

  return {
    args: `(${args.join()})`,
    filter: `filter: { or: [{ ${fromIdFilters.join()} }, { ${toIdFilters.join()} } ] }`,
    variables,
  };
}

/**
 * @hidden
 *
 * Get Settlements where a Portfolio is involved
 */
export function settlementsQuery(
  filters: QuerySettlementFilters
): GraphqlQuery<QueryArgs<Leg, 'fromId' | 'toId' | 'assetId' | 'addresses'>> {
  const { args, filter, variables } = createLegFilters(filters);
  const query = gql`
    query SettlementsQuery
      ${args}
     {
      legs(
        ${filter}
        orderBy: [${LegsOrderBy.InstructionIdAsc}]
      ) {
        nodes {
          settlement {
            id
            createdBlock {
              blockId
              datetime
              hash
            }
            result
            legs {
              nodes {
                fromId
                from {
                  identityId
                  number
                }
                toId
                to {
                  identityId
                  number
                }
                assetId
                amount
                addresses
              }
            }
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
 *  @hidden
 */
function createPortfolioMovementFilters({
  identityId,
  portfolioId,
  ticker,
  address,
}: QuerySettlementFilters): {
  args: string;
  filter: string;
  variables: QueryArgs<PortfolioMovement, 'fromId' | 'toId' | 'assetId' | 'address'>;
} {
  const args: string[] = ['$fromId: String!, $toId: String!'];
  const fromIdFilters = ['fromId: { equalTo: $fromId }'];
  const toIdFilters = ['toId: { equalTo: $toId }'];
  const portfolioNumber = portfolioId ? portfolioId.toNumber() : 0;
  const variables: QueryArgs<PortfolioMovement, 'fromId' | 'toId' | 'assetId' | 'address'> = {
    fromId: `${identityId}/${portfolioNumber}`,
    toId: `${identityId}/${portfolioNumber}`,
  };

  if (ticker) {
    variables.assetId = ticker;
    args.push('$assetId: String!');
    const assetIdFilter = 'assetId: { equalTo: $assetId }';
    toIdFilters.push(assetIdFilter);
    fromIdFilters.push(assetIdFilter);
  }

  if (address) {
    variables.address = address;
    args.push('$address: String!');
    const addressFilter = 'address: { in: $address }';
    toIdFilters.push(addressFilter);
    fromIdFilters.push(addressFilter);
  }

  return {
    args: `(${args.join()})`,
    filter: `filter: { or: [ { ${fromIdFilters.join()} }, { ${toIdFilters.join()} } ] }`,
    variables,
  };
}

/**
 * @hidden
 *
 * Get Settlements where a Portfolio is involved
 */
export function portfolioMovementsQuery(
  filters: QuerySettlementFilters
): GraphqlQuery<QueryArgs<PortfolioMovement, 'fromId' | 'toId' | 'assetId' | 'address'>> {
  const { args, filter, variables } = createPortfolioMovementFilters(filters);
  const query = gql`
    query PortfolioMovementsQuery
      ${args}
     {
      portfolioMovements(
        ${filter}
        orderBy: [${PortfolioMovementsOrderBy.IdAsc}]
      ) {
        nodes {
          id
          fromId
          from {
            identityId
            number
          }
          toId
          to {
            identityId
            number
          }
          assetId
          amount
          address
          createdBlock {
            blockId
            datetime
            hash
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
