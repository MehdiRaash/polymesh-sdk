import { Balance } from '@polkadot/types/interfaces';
import BigNumber from 'bignumber.js';
import { Ticker } from 'polymesh-types/types';
import sinon from 'sinon';

import { SecurityToken } from '~/api/entities';
import {
  getRequiredRoles,
  IssueTokensParams,
  prepareIssueTokens,
} from '~/api/procedures/issueTokens';
import { Context } from '~/base';
import { dsMockUtils, entityMockUtils, procedureMockUtils } from '~/testUtils/mocks';
import { Mocked } from '~/testUtils/types';
import { RoleType } from '~/types';
import * as utilsModule from '~/utils';
import { MAX_DECIMALS } from '~/utils/constants';

jest.mock(
  '~/api/entities/SecurityToken',
  require('~/testUtils/mocks/entities').mockSecurityTokenModule('~/api/entities/SecurityToken')
);

describe('issueTokens procedure', () => {
  let mockContext: Mocked<Context>;
  let stringToTickerStub: sinon.SinonStub<[string, Context], Ticker>;
  let numberToBalance: sinon.SinonStub<[number | BigNumber, Context], Balance>;
  let ticker: string;
  let rawTicker: Ticker;
  let amount: BigNumber;
  let rawAmount: Balance;
  let addTransactionStub: sinon.SinonStub;

  beforeAll(() => {
    dsMockUtils.initMocks();
    procedureMockUtils.initMocks();
    entityMockUtils.initMocks();
    stringToTickerStub = sinon.stub(utilsModule, 'stringToTicker');
    numberToBalance = sinon.stub(utilsModule, 'numberToBalance');
    ticker = 'someTicker';
    rawTicker = dsMockUtils.createMockTicker(ticker);
    amount = new BigNumber(100);
    rawAmount = dsMockUtils.createMockBalance(amount.toNumber());
  });

  beforeEach(() => {
    mockContext = dsMockUtils.getContextInstance();
    stringToTickerStub.withArgs(ticker, mockContext).returns(rawTicker);
    numberToBalance.withArgs(amount, mockContext).returns(rawAmount);
    addTransactionStub = procedureMockUtils.getAddTransactionStub();
  });

  afterEach(() => {
    entityMockUtils.reset();
    procedureMockUtils.reset();
    dsMockUtils.reset();
  });

  afterAll(() => {
    entityMockUtils.cleanup();
    procedureMockUtils.cleanup();
    dsMockUtils.cleanup();
  });

  test('should throw an error if security token is divisible and the amount exceeds six decimals', () => {
    const args = {
      amount: new BigNumber(50.1234567),
      ticker,
    };

    entityMockUtils.configureMocks({
      securityTokenOptions: {
        details: {
          isDivisible: true,
        },
      },
    });

    const proc = procedureMockUtils.getInstance<IssueTokensParams, SecurityToken>(mockContext);

    return expect(prepareIssueTokens.call(proc, args)).rejects.toThrow(
      `Issuance amount cannot have more than ${MAX_DECIMALS} decimals`
    );
  });

  test('should throw an error if security token is not divisible and the amount has decimals', () => {
    const args = {
      amount: new BigNumber(50.1),

      ticker,
    };

    const proc = procedureMockUtils.getInstance<IssueTokensParams, SecurityToken>(mockContext);

    return expect(prepareIssueTokens.call(proc, args)).rejects.toThrow(
      'Cannot issue decimal amount of an indivisible token'
    );
  });

  test('should throw an error if token supply is bigger than the limit total supply', async () => {
    const args = {
      amount,
      ticker,
    };

    const limitTotalSupply = new BigNumber(Math.pow(10, 12));

    entityMockUtils.configureMocks({
      securityTokenOptions: {
        details: {
          totalSupply: limitTotalSupply,
        },
      },
    });

    const proc = procedureMockUtils.getInstance<IssueTokensParams, SecurityToken>(mockContext);

    let error;

    try {
      await prepareIssueTokens.call(proc, args);
    } catch (err) {
      error = err;
    }

    expect(error.message).toBe(
      `This issuance operation will cause the total supply of "${ticker}" to exceed the supply limit`
    );
    expect(error.data).toMatchObject({
      currentSupply: limitTotalSupply,
      supplyLimit: limitTotalSupply,
    });
  });

  test('should throw an error if primary issuance agent is undefined', async () => {
    const args = {
      amount,
      ticker,
    };

    entityMockUtils.configureMocks({
      securityTokenOptions: {
        details: {
          primaryIssuanceAgent: undefined,
        },
      },
    });

    const proc = procedureMockUtils.getInstance<IssueTokensParams, SecurityToken>(mockContext);

    let error;

    try {
      await prepareIssueTokens.call(proc, args);
    } catch (err) {
      error = err;
    }

    expect(error.message).toBe('You should set a primary issuance agent to issue tokens');
  });

  test('should add a issue transaction to the queue', async () => {
    const args = {
      amount,
      ticker,
    };

    entityMockUtils.configureMocks({
      securityTokenOptions: {
        details: {
          isDivisible: true,
          primaryIssuanceAgent: entityMockUtils.getIdentityInstance(),
        },
      },
    });

    const transaction = dsMockUtils.createTxStub('asset', 'issue');
    const proc = procedureMockUtils.getInstance<IssueTokensParams, SecurityToken>(mockContext);

    const result = await prepareIssueTokens.call(proc, args);

    sinon.assert.calledWith(addTransactionStub, transaction, {}, rawTicker, rawAmount);
    expect(result.ticker).toBe(ticker);
  });
});

describe('getRequiredRoles', () => {
  test('should return a token owner role', () => {
    const ticker = 'someTicker';
    const args = {
      ticker,
    } as IssueTokensParams;

    expect(getRequiredRoles(args)).toEqual([{ type: RoleType.TokenOwner, ticker }]);
  });
});
