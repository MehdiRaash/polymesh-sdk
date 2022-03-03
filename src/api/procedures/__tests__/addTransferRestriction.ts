import { u64 } from '@polkadot/types';
import { Permill } from '@polkadot/types/interfaces';
import BigNumber from 'bignumber.js';
import { ScopeId, Ticker, TransferManager } from 'polymesh-types/types';
import sinon from 'sinon';

import {
  AddTransferRestrictionParams,
  getAuthorization,
  prepareAddTransferRestriction,
} from '~/api/procedures/addTransferRestriction';
import { Context } from '~/internal';
import { dsMockUtils, entityMockUtils, procedureMockUtils } from '~/testUtils/mocks';
import { Mocked } from '~/testUtils/types';
import { TransferRestriction, TransferRestrictionType, TxTags } from '~/types';
import { PolymeshTx } from '~/types/internal';
import * as utilsConversionModule from '~/utils/conversion';

jest.mock(
  '~/api/entities/Asset',
  require('~/testUtils/mocks/entities').mockAssetModule('~/api/entities/Asset')
);
jest.mock(
  '~/api/entities/Identity',
  require('~/testUtils/mocks/entities').mockIdentityModule('~/api/entities/Identity')
);

describe('addTransferRestriction procedure', () => {
  let mockContext: Mocked<Context>;
  let transferRestrictionToTransferManagerStub: sinon.SinonStub<
    [TransferRestriction, Context],
    TransferManager
  >;
  let stringToTickerStub: sinon.SinonStub<[string, Context], Ticker>;
  let ticker: string;
  let count: BigNumber;
  let percentage: BigNumber;
  let countTm: TransferRestriction;
  let percentageTm: TransferRestriction;
  let rawTicker: Ticker;
  let rawCount: u64;
  let rawPercentage: Permill;
  let rawCountTm: TransferManager;
  let rawPercentageTm: TransferManager;
  let args: AddTransferRestrictionParams;

  beforeAll(() => {
    dsMockUtils.initMocks();
    procedureMockUtils.initMocks();
    entityMockUtils.initMocks();
    transferRestrictionToTransferManagerStub = sinon.stub(
      utilsConversionModule,
      'transferRestrictionToTransferManager'
    );
    stringToTickerStub = sinon.stub(utilsConversionModule, 'stringToTicker');
    ticker = 'someTicker';
    count = new BigNumber(10);
    percentage = new BigNumber(49);
    countTm = { type: TransferRestrictionType.Count, value: count };
    percentageTm = { type: TransferRestrictionType.Percentage, value: percentage };
  });

  let addTransactionStub: sinon.SinonStub;

  let addTransferManagerTransaction: PolymeshTx<[Ticker, TransferManager]>;
  let addExemptedEntitiesTransaction: PolymeshTx<[Ticker, TransferManager, ScopeId[]]>;

  beforeEach(() => {
    addTransactionStub = procedureMockUtils.getAddTransactionStub();

    addTransferManagerTransaction = dsMockUtils.createTxStub('statistics', 'addTransferManager');
    addExemptedEntitiesTransaction = dsMockUtils.createTxStub('statistics', 'addExemptedEntities');

    mockContext = dsMockUtils.getContextInstance();

    dsMockUtils.setConstMock('statistics', 'maxTransferManagersPerAsset', {
      returnValue: dsMockUtils.createMockU32(new BigNumber(3)),
    });
    rawTicker = dsMockUtils.createMockTicker(ticker);
    rawCount = dsMockUtils.createMockU64(count);
    rawPercentage = dsMockUtils.createMockPermill(percentage.multipliedBy(10000));
    rawCountTm = dsMockUtils.createMockTransferManager({ CountTransferManager: rawCount });
    rawPercentageTm = dsMockUtils.createMockTransferManager({
      PercentageTransferManager: rawPercentage,
    });

    transferRestrictionToTransferManagerStub.withArgs(countTm, mockContext).returns(rawCountTm);
    transferRestrictionToTransferManagerStub
      .withArgs(percentageTm, mockContext)
      .returns(rawPercentageTm);
    stringToTickerStub.withArgs(ticker, mockContext).returns(rawTicker);
  });

  afterEach(() => {
    entityMockUtils.reset();
    procedureMockUtils.reset();
    dsMockUtils.reset();
  });

  afterAll(() => {
    procedureMockUtils.cleanup();
    dsMockUtils.cleanup();
  });

  it('should add an add transfer manager transaction to the queue', async () => {
    args = {
      type: TransferRestrictionType.Count,
      exemptedScopeIds: [],
      count,
      ticker,
    };
    const proc = procedureMockUtils.getInstance<AddTransferRestrictionParams, BigNumber>(
      mockContext
    );

    dsMockUtils.createQueryStub('statistics', 'activeTransferManagers', {
      returnValue: [],
    });

    let result = await prepareAddTransferRestriction.call(proc, args);

    sinon.assert.calledWith(addTransactionStub, {
      transaction: addTransferManagerTransaction,
      args: [rawTicker, rawCountTm],
    });

    expect(result).toEqual(new BigNumber(1));

    args = {
      type: TransferRestrictionType.Percentage,
      exemptedScopeIds: [],
      percentage,
      ticker,
    };

    result = await prepareAddTransferRestriction.call(proc, args);

    sinon.assert.calledWith(addTransactionStub, {
      transaction: addTransferManagerTransaction,
      args: [rawTicker, rawPercentageTm],
    });

    expect(result).toEqual(new BigNumber(1));
  });

  it('should add an add exempted entities transaction to the queue', async () => {
    const did = 'someDid';
    const scopeId = 'someScopeId';
    const rawScopeId = dsMockUtils.createMockScopeId(scopeId);
    const identityScopeId = 'anotherScopeId';
    const rawIdentityScopeId = dsMockUtils.createMockScopeId(identityScopeId);
    entityMockUtils.configureMocks({ identityOptions: { getScopeId: identityScopeId } });
    args = {
      type: TransferRestrictionType.Count,
      exemptedScopeIds: [scopeId],
      exemptedIdentities: [did],
      count,
      ticker,
    };
    const proc = procedureMockUtils.getInstance<AddTransferRestrictionParams, BigNumber>(
      mockContext
    );

    dsMockUtils.createQueryStub('statistics', 'activeTransferManagers', {
      returnValue: [],
    });

    const stringToScopeIdStub = sinon.stub(utilsConversionModule, 'stringToScopeId');

    stringToScopeIdStub.withArgs(scopeId, mockContext).returns(rawScopeId);
    stringToScopeIdStub.withArgs(identityScopeId, mockContext).returns(rawIdentityScopeId);

    let result = await prepareAddTransferRestriction.call(proc, args);

    sinon.assert.calledWith(addTransactionStub, {
      transaction: addExemptedEntitiesTransaction,
      feeMultiplier: new BigNumber(2),
      args: [rawTicker, rawCountTm, [rawScopeId, rawIdentityScopeId]],
    });

    expect(result).toEqual(new BigNumber(1));

    result = await prepareAddTransferRestriction.call(proc, {
      ...args,
      exemptedIdentities: [entityMockUtils.getIdentityInstance()],
    });

    sinon.assert.calledWith(addTransactionStub, {
      transaction: addExemptedEntitiesTransaction,
      feeMultiplier: new BigNumber(2),
      args: [rawTicker, rawCountTm, [rawScopeId, rawIdentityScopeId]],
    });

    expect(result).toEqual(new BigNumber(1));
  });

  it('should throw an error if attempting to add a restriction that already exists', async () => {
    args = {
      type: TransferRestrictionType.Count,
      exemptedScopeIds: [],
      count,
      ticker,
    };
    const proc = procedureMockUtils.getInstance<AddTransferRestrictionParams, BigNumber>(
      mockContext
    );

    dsMockUtils.createQueryStub('statistics', 'activeTransferManagers', {
      returnValue: [rawCountTm],
    });

    let err;

    try {
      await prepareAddTransferRestriction.call(proc, args);
    } catch (error) {
      err = error;
    }

    expect(err.message).toBe('Cannot add the same restriction more than once');
  });

  it('should throw an error if attempting to add a restriction when the restriction limit has been reached', async () => {
    args = {
      type: TransferRestrictionType.Count,
      count,
      ticker,
    };
    const proc = procedureMockUtils.getInstance<AddTransferRestrictionParams, BigNumber>(
      mockContext
    );

    dsMockUtils.createQueryStub('statistics', 'activeTransferManagers', {
      returnValue: [rawPercentageTm, rawPercentageTm, rawPercentageTm],
    });

    let err;

    try {
      await prepareAddTransferRestriction.call(proc, args);
    } catch (error) {
      err = error;
    }

    expect(err.message).toBe('Transfer Restriction limit reached');
    expect(err.data).toEqual({ limit: new BigNumber(3) });
  });

  it('should throw an error if exempted scope IDs are repeated', async () => {
    args = {
      type: TransferRestrictionType.Count,
      exemptedScopeIds: ['someScopeId', 'someScopeId'],
      count,
      ticker,
    };
    const proc = procedureMockUtils.getInstance<AddTransferRestrictionParams, BigNumber>(
      mockContext
    );

    dsMockUtils.createQueryStub('statistics', 'activeTransferManagers', {
      returnValue: [],
    });

    let err;

    try {
      await prepareAddTransferRestriction.call(proc, args);
    } catch (error) {
      err = error;
    }

    expect(err.message).toBe(
      'One or more of the passed exempted Scope IDs/Identities are repeated'
    );
  });

  describe('getAuthorization', () => {
    it('should return the appropriate roles and permissions', () => {
      args = {
        ticker,
        count,
        type: TransferRestrictionType.Count,
      };

      const proc = procedureMockUtils.getInstance<AddTransferRestrictionParams, BigNumber>(
        mockContext
      );
      const boundFunc = getAuthorization.bind(proc);

      expect(boundFunc(args)).toEqual({
        permissions: {
          assets: [expect.objectContaining({ ticker })],
          transactions: [TxTags.statistics.AddTransferManager],
          portfolios: [],
        },
      });
      expect(boundFunc({ ...args, exemptedScopeIds: ['someScopeId'] })).toEqual({
        permissions: {
          assets: [expect.objectContaining({ ticker })],
          transactions: [
            TxTags.statistics.AddTransferManager,
            TxTags.statistics.AddExemptedEntities,
          ],
          portfolios: [],
        },
      });
    });
  });
});
