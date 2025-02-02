import { Scalars } from '~/middleware/types';

export enum ClaimScopeTypeEnum {
  Identity = 'Identity',
  Ticker = 'Ticker',
  Custom = 'Custom',
}

export type MiddlewareScope = Scalars['JSON'];

export enum SettlementDirectionEnum {
  None = 'None',
  Incoming = 'Incoming',
  Outgoing = 'Outgoing',
}
