import BigNumber from 'bignumber.js';

import { Identity } from '~/internal';

export interface DividendDistributionDetails {
  remainingFunds: BigNumber;
  /**
   * whether the unclaimed funds have been reclaimed by the Corporate Actions Agent
   */
  fundsReclaimed: boolean;
}

export interface DistributionParticipant {
  identity: Identity;
  amount: BigNumber;
  paid: boolean;
}

export { DividendDistributionParams } from '.';
