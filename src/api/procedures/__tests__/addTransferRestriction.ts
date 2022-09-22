import { BTreeSet, u64 } from '@polkadot/types';
import { Permill } from '@polkadot/types/interfaces';
import {
  PolymeshPrimitivesIdentityId,
  PolymeshPrimitivesStatisticsStatOpType,
  PolymeshPrimitivesStatisticsStatType,
  PolymeshPrimitivesTicker,
  PolymeshPrimitivesTransferComplianceAssetTransferCompliance,
  PolymeshPrimitivesTransferComplianceTransferCondition,
} from '@polkadot/types/lookup';
import BigNumber from 'bignumber.js';
import { when } from 'jest-when';
import { ScopeId } from 'polymesh-types/types';

import {
  AddTransferRestrictionParams,
  getAuthorization,
  prepareAddTransferRestriction,
} from '~/api/procedures/addTransferRestriction';
import { Context, Identity, PolymeshError } from '~/internal';
import { dsMockUtils, entityMockUtils, procedureMockUtils } from '~/testUtils/mocks';
import { Mocked } from '~/testUtils/types';
import {
  ClaimType,
  CountryCode,
  ErrorCode,
  StatJurisdictionClaimInput,
  StatType,
  TransferRestriction,
  TransferRestrictionType,
  TxTags,
} from '~/types';
import { PolymeshTx, TickerKey } from '~/types/internal';
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

  let count: BigNumber;
  let percentage: BigNumber;
  let min: BigNumber;
  let max: BigNumber;
  let claim: StatJurisdictionClaimInput;
  let issuer: Identity;
  let countRestriction: TransferRestriction;
  let claimCountRestriction: TransferRestriction;
  let percentageRestriction: TransferRestriction;
  let claimPercentageRestriction: TransferRestriction;
  let rawTicker: PolymeshPrimitivesTicker;
  let rawCount: u64;
  let rawPercentage: Permill;
  let rawCountCondition: PolymeshPrimitivesTransferComplianceTransferCondition;
  let rawPercentageCondition: PolymeshPrimitivesTransferComplianceTransferCondition;
  let rawClaimCountCondition: PolymeshPrimitivesTransferComplianceTransferCondition;
  let rawClaimPercentageCondition: PolymeshPrimitivesTransferComplianceTransferCondition;
  let args: AddTransferRestrictionParams;
  let rawCountOp: PolymeshPrimitivesStatisticsStatOpType;
  let rawBalanceOp: PolymeshPrimitivesStatisticsStatOpType;
  let rawScopeId: PolymeshPrimitivesIdentityId;
  let rawCountStatType: PolymeshPrimitivesStatisticsStatType;
  let rawBalanceStatType: PolymeshPrimitivesStatisticsStatType;
  let rawClaimCountStatType: PolymeshPrimitivesStatisticsStatType;
  let transferRestrictionToPolymeshTransferConditionStub: jest.SpyInstance<
    PolymeshPrimitivesTransferComplianceTransferCondition,
    [TransferRestriction, Context]
  >;
  let stringToTickerKeyStub: jest.SpyInstance<TickerKey, [string, Context]>;
  let complianceConditionsToBtreeSetStub: jest.SpyInstance<
    BTreeSet<PolymeshPrimitivesTransferComplianceTransferCondition>,
    [PolymeshPrimitivesTransferComplianceTransferCondition[], Context]
  >;
  let transferConditionsToBtreeTransferConditionsStub: jest.SpyInstance<
    BTreeSet<PolymeshPrimitivesTransferComplianceTransferCondition>,
    [PolymeshPrimitivesTransferComplianceTransferCondition[], Context]
  >;
  let setAssetTransferCompliance: PolymeshTx<
    [PolymeshPrimitivesTicker, PolymeshPrimitivesTransferComplianceTransferCondition]
  >;
  let setExemptedEntitiesTransaction: PolymeshTx<
    [PolymeshPrimitivesTicker, PolymeshPrimitivesTransferComplianceTransferCondition, ScopeId[]]
  >;
  let transferRestrictionTypeToStatOpTypeStub: jest.SpyInstance<
    PolymeshPrimitivesStatisticsStatOpType,
    [TransferRestrictionType, Context]
  >;
  let mockStatTypeBtree: BTreeSet<PolymeshPrimitivesStatisticsStatType>;
  let mockCountBtreeSet: BTreeSet<PolymeshPrimitivesTransferComplianceTransferCondition>;
  let mockPercentBtree: BTreeSet<PolymeshPrimitivesTransferComplianceTransferCondition>;
  let mockClaimCountBtree: BTreeSet<PolymeshPrimitivesTransferComplianceTransferCondition>;
  let mockClaimPercentageBtree: BTreeSet<PolymeshPrimitivesTransferComplianceTransferCondition>;
  let queryMultiStub: jest.Mock;
  let queryMultiResult: [
    BTreeSet<PolymeshPrimitivesStatisticsStatType>,
    PolymeshPrimitivesTransferComplianceAssetTransferCompliance
  ];
  let statCompareEqStub: jest.Mock;
  let stringToScopeIdStub: jest.SpyInstance;
  const did = 'someDid';
  const ticker = 'TICKER';

  beforeAll(() => {
    dsMockUtils.initMocks();
    procedureMockUtils.initMocks();
    entityMockUtils.initMocks();

    count = new BigNumber(10);
    percentage = new BigNumber(49);
    min = new BigNumber(0);
    issuer = entityMockUtils.getIdentityInstance({ did });
    claim = {
      type: ClaimType.Jurisdiction,
      countryCode: CountryCode.Ca,
    };
    max = new BigNumber(50);
    countRestriction = { type: TransferRestrictionType.Count, value: count };
    percentageRestriction = { type: TransferRestrictionType.Percentage, value: percentage };
    claimCountRestriction = {
      type: TransferRestrictionType.ClaimCount,
      value: {
        min,
        issuer,
        claim,
      },
    };
    claimPercentageRestriction = {
      type: TransferRestrictionType.ClaimPercentage,
      value: {
        min,
        max,
        issuer,
        claim,
      },
    };
  });

  beforeEach(() => {
    mockContext = dsMockUtils.getContextInstance();
    setAssetTransferCompliance = dsMockUtils.createTxStub(
      'statistics',
      'setAssetTransferCompliance'
    );
    setExemptedEntitiesTransaction = dsMockUtils.createTxStub('statistics', 'setEntitiesExempt');

    dsMockUtils.setConstMock('statistics', 'maxTransferConditionsPerAsset', {
      returnValue: dsMockUtils.createMockU32(new BigNumber(3)),
    });
    transferRestrictionToPolymeshTransferConditionStub = jest.spyOn(
      utilsConversionModule,
      'transferRestrictionToPolymeshTransferCondition'
    );
    stringToTickerKeyStub = jest.spyOn(utilsConversionModule, 'stringToTickerKey');
    transferConditionsToBtreeTransferConditionsStub = jest.spyOn(
      utilsConversionModule,
      'transferConditionsToBtreeTransferConditions'
    );
    complianceConditionsToBtreeSetStub = jest.spyOn(
      utilsConversionModule,
      'complianceConditionsToBtreeSet'
    );
    transferRestrictionTypeToStatOpTypeStub = jest.spyOn(
      utilsConversionModule,
      'transferRestrictionTypeToStatOpType'
    );
    stringToScopeIdStub = jest.spyOn(utilsConversionModule, 'stringToScopeId');

    rawCountStatType = dsMockUtils.createMockStatisticsStatType();
    rawBalanceStatType = dsMockUtils.createMockStatisticsStatType({
      op: dsMockUtils.createMockStatisticsOpType(StatType.Balance),
      claimIssuer: dsMockUtils.createMockOption(),
    });
    rawClaimCountStatType = dsMockUtils.createMockStatisticsStatType({
      op: dsMockUtils.createMockStatisticsOpType(StatType.ScopedCount),
      claimIssuer: dsMockUtils.createMockOption([
        dsMockUtils.createMockClaimType(),
        dsMockUtils.createMockIdentityId(),
      ]),
    });
    mockStatTypeBtree = dsMockUtils.createMockBTreeSet([
      rawCountStatType,
      rawBalanceStatType,
      rawClaimCountStatType,
    ]);
    statCompareEqStub = rawCountStatType.eq as jest.Mock;
    statCompareEqStub.mockReturnValue(true);
    rawCountOp = dsMockUtils.createMockStatisticsOpType(StatType.Count);
    rawBalanceOp = dsMockUtils.createMockStatisticsOpType(StatType.Balance);
    rawTicker = dsMockUtils.createMockTicker(ticker);
    rawCount = dsMockUtils.createMockU64(count);
    rawScopeId = dsMockUtils.createMockIdentityId(did);
    rawPercentage = dsMockUtils.createMockPermill(percentage.multipliedBy(10000));
    rawCountCondition = dsMockUtils.createMockTransferCondition({ MaxInvestorCount: rawCount });
    rawPercentageCondition = dsMockUtils.createMockTransferCondition({
      MaxInvestorOwnership: rawPercentage,
    });
    rawClaimCountCondition = dsMockUtils.createMockTransferCondition({
      ClaimCount: [
        dsMockUtils.createMockStatisticsStatClaim({
          Jurisdiction: dsMockUtils.createMockOption(dsMockUtils.createMockCountryCode()),
        }),
        dsMockUtils.createMockIdentityId(),
        dsMockUtils.createMockU64(),
        dsMockUtils.createMockOption(),
      ],
    });
    rawClaimPercentageCondition = dsMockUtils.createMockTransferCondition({
      ClaimCount: [
        dsMockUtils.createMockStatisticsStatClaim({ Accredited: dsMockUtils.createMockBool() }),
        dsMockUtils.createMockIdentityId(),
        dsMockUtils.createMockU64(),
        dsMockUtils.createMockOption(),
      ],
    });

    queryMultiStub = dsMockUtils.getQueryMultiStub();
    queryMultiResult = [
      mockStatTypeBtree,
      dsMockUtils.createMockAssetTransferCompliance({
        paused: false,
        requirements: [],
      }),
    ];
    queryMultiStub.mockReturnValue(queryMultiResult);

    mockCountBtreeSet = dsMockUtils.createMockBTreeSet([rawCountCondition]);
    mockPercentBtree =
      dsMockUtils.createMockBTreeSet<PolymeshPrimitivesTransferComplianceTransferCondition>([
        rawPercentageCondition,
      ]);

    mockClaimCountBtree = dsMockUtils.createMockBTreeSet([rawClaimCountCondition]);
    mockClaimPercentageBtree = dsMockUtils.createMockBTreeSet([rawClaimPercentageCondition]);

    when(stringToScopeIdStub).calledWith(did, mockContext).mockReturnValue(rawScopeId);

    when(transferRestrictionToPolymeshTransferConditionStub)
      .calledWith(countRestriction, mockContext)
      .mockReturnValue(rawCountCondition);
    when(transferRestrictionToPolymeshTransferConditionStub)
      .calledWith(percentageRestriction, mockContext)
      .mockReturnValue(rawPercentageCondition);
    when(transferRestrictionToPolymeshTransferConditionStub)
      .calledWith(expect.objectContaining(claimCountRestriction), mockContext)
      .mockReturnValue(rawClaimCountCondition);
    when(transferRestrictionToPolymeshTransferConditionStub)
      .calledWith(expect.objectContaining(claimPercentageRestriction), mockContext)
      .mockReturnValue(rawClaimPercentageCondition);
    when(stringToTickerKeyStub)
      .calledWith(ticker, mockContext)
      .mockReturnValue({ Ticker: rawTicker });
    when(complianceConditionsToBtreeSetStub)
      .calledWith([rawCountCondition], mockContext)
      .mockReturnValue(mockCountBtreeSet);
    when(complianceConditionsToBtreeSetStub)
      .calledWith([rawPercentageCondition], mockContext)
      .mockReturnValue(mockPercentBtree);
    when(complianceConditionsToBtreeSetStub)
      .calledWith([rawClaimCountCondition], mockContext)
      .mockReturnValue(mockClaimCountBtree);
    when(complianceConditionsToBtreeSetStub)
      .calledWith([rawClaimPercentageCondition], mockContext)
      .mockReturnValue(mockClaimPercentageBtree);
    when(transferRestrictionTypeToStatOpTypeStub)
      .calledWith(TransferRestrictionType.Count, mockContext)
      .mockReturnValue(rawCountOp);
    when(transferRestrictionTypeToStatOpTypeStub)
      .calledWith(TransferRestrictionType.ClaimCount, mockContext)
      .mockReturnValue(rawCountOp);
    when(transferRestrictionTypeToStatOpTypeStub)
      .calledWith(TransferRestrictionType.Percentage, mockContext)
      .mockReturnValue(rawBalanceOp);
    when(transferRestrictionTypeToStatOpTypeStub)
      .calledWith(TransferRestrictionType.ClaimPercentage, mockContext)
      .mockReturnValue(rawBalanceOp);

    dsMockUtils.createQueryStub('statistics', 'activeAssetStats');

    args = {
      type: TransferRestrictionType.Count,
      exemptedIdentities: [],
      count,
      ticker,
    };
  });

  afterEach(() => {
    entityMockUtils.reset();
    procedureMockUtils.reset();
    dsMockUtils.reset();
    jest.restoreAllMocks();
  });

  afterAll(() => {
    procedureMockUtils.cleanup();
    dsMockUtils.cleanup();
  });

  it('should return an add asset transfer compliance transaction spec', async () => {
    const proc = procedureMockUtils.getInstance<AddTransferRestrictionParams, BigNumber>(
      mockContext
    );
    args = {
      type: TransferRestrictionType.Count,
      exemptedIdentities: [],
      count,
      ticker,
    };
    transferConditionsToBtreeTransferConditionsStub.mockReturnValue(mockCountBtreeSet);

    let result = await prepareAddTransferRestriction.call(proc, args);

    expect(result).toEqual({
      transactions: [
        {
          transaction: setAssetTransferCompliance,
          args: [{ Ticker: rawTicker }, mockCountBtreeSet],
        },
      ],
      resolver: new BigNumber(1),
    });

    transferConditionsToBtreeTransferConditionsStub.mockReturnValue(mockPercentBtree);

    args = {
      type: TransferRestrictionType.Percentage,
      exemptedIdentities: [],
      percentage,
      ticker,
    };

    result = await prepareAddTransferRestriction.call(proc, args);

    expect(result).toEqual({
      transactions: [
        {
          transaction: setAssetTransferCompliance,
          args: [{ Ticker: rawTicker }, mockPercentBtree],
        },
      ],
      resolver: new BigNumber(1),
    });
  });

  it('should return an add exempted entities transaction spec', async () => {
    const identityScopeId = 'anotherScopeId';
    const rawIdentityScopeId = dsMockUtils.createMockScopeId(identityScopeId);
    const rawIdentityBtree = dsMockUtils.createMockBTreeSet<PolymeshPrimitivesIdentityId>([
      rawIdentityScopeId,
    ]);

    when(mockContext.createType)
      .calledWith('BTreeSet<PolymeshPrimitivesIdentityId>', [undefined])
      .mockReturnValue(rawIdentityBtree);

    entityMockUtils.configureMocks({
      identityOptions: { getScopeId: identityScopeId },
      assetOptions: { details: { requiresInvestorUniqueness: true } },
    });
    args = {
      type: TransferRestrictionType.ClaimCount,
      exemptedIdentities: [did],
      min,
      issuer,
      claim,
      ticker,
    };
    const proc = procedureMockUtils.getInstance<AddTransferRestrictionParams, BigNumber>(
      mockContext
    );

    let result = await prepareAddTransferRestriction.call(proc, args);
    expect(result).toEqual({
      transactions: [
        {
          transaction: setAssetTransferCompliance,
          args: [{ Ticker: rawTicker }, mockClaimCountBtree],
        },
        {
          transaction: setExemptedEntitiesTransaction,
          feeMultiplier: new BigNumber(1),
          args: [
            true,
            { asset: { Ticker: rawTicker }, op: rawCountOp, claimType: ClaimType.Jurisdiction },
            rawIdentityBtree,
          ],
        },
      ],
      resolver: new BigNumber(1),
    });

    args = {
      type: TransferRestrictionType.ClaimPercentage,
      exemptedIdentities: [did],
      min,
      max,
      issuer,
      claim,
      ticker,
    };

    result = await prepareAddTransferRestriction.call(proc, args);

    expect(result).toEqual({
      transactions: [
        {
          transaction: setAssetTransferCompliance,
          args: [{ Ticker: rawTicker }, mockClaimPercentageBtree],
        },
        {
          transaction: setExemptedEntitiesTransaction,
          feeMultiplier: new BigNumber(1),
          args: [
            true,
            { asset: { Ticker: rawTicker }, op: rawBalanceOp, claimType: ClaimType.Jurisdiction },
            rawIdentityBtree,
          ],
        },
      ],
      resolver: new BigNumber(1),
    });
  });

  it('should throw an error if attempting to add a restriction that already exists', () => {
    args = {
      type: TransferRestrictionType.Count,
      exemptedIdentities: [],
      count,
      ticker,
    };
    const proc = procedureMockUtils.getInstance<AddTransferRestrictionParams, BigNumber>(
      mockContext,
      {
        currentRestrictions:
          dsMockUtils.createMockBTreeSet<PolymeshPrimitivesTransferComplianceTransferCondition>([
            rawCountCondition,
          ]),
      }
    );

    rawCountCondition.eq = jest.fn().mockReturnValue(true);

    const existingRequirements =
      dsMockUtils.createMockBTreeSet<PolymeshPrimitivesTransferComplianceTransferCondition>([
        rawCountCondition,
        rawPercentageCondition,
      ]);
    queryMultiStub.mockResolvedValue([
      mockStatTypeBtree,
      dsMockUtils.createMockAssetTransferCompliance({
        paused: dsMockUtils.createMockBool(false),
        requirements: existingRequirements,
      }),
    ]);

    const expectedError = new PolymeshError({
      code: ErrorCode.UnmetPrerequisite,
      message: 'Cannot add the same restriction more than once',
    });

    return expect(prepareAddTransferRestriction.call(proc, args)).rejects.toThrowError(
      expectedError
    );
  });

  it('should throw an error if attempting to add a restriction when the restriction limit has been reached', () => {
    args = {
      type: TransferRestrictionType.Count,
      count,
      ticker,
    };
    const maxedRequirements =
      dsMockUtils.createMockBTreeSet<PolymeshPrimitivesTransferComplianceTransferCondition>([
        rawPercentageCondition,
        rawClaimCountCondition,
        rawClaimPercentageCondition,
      ]);
    queryMultiStub.mockResolvedValue([
      mockStatTypeBtree,
      dsMockUtils.createMockAssetTransferCompliance({
        paused: dsMockUtils.createMockBool(false),
        requirements: maxedRequirements,
      }),
    ]);

    const proc = procedureMockUtils.getInstance<AddTransferRestrictionParams, BigNumber>(
      mockContext
    );

    const expectedError = new PolymeshError({
      code: ErrorCode.UnmetPrerequisite,
      message: 'Transfer Restriction limit reached',
      data: { limit: 3 },
    });

    return expect(prepareAddTransferRestriction.call(proc, args)).rejects.toThrowError(
      expectedError
    );
  });

  it('should throw an error if exempted entities are repeated', () => {
    args = {
      type: TransferRestrictionType.Count,
      exemptedIdentities: ['someScopeId', 'someScopeId'],
      count,
      ticker,
    };
    const proc = procedureMockUtils.getInstance<AddTransferRestrictionParams, BigNumber>(
      mockContext
    );

    const expectedError = new PolymeshError({
      code: ErrorCode.ValidationError,
      message:
        'One or more of the passed exempted Identities are repeated or have the same Scope ID',
    });

    return expect(prepareAddTransferRestriction.call(proc, args)).rejects.toThrowError(
      expectedError
    );
  });

  it('should throw an error if the appropriate stat is not set', () => {
    statCompareEqStub.mockReturnValue(false);
    const proc = procedureMockUtils.getInstance<AddTransferRestrictionParams, BigNumber>(
      mockContext
    );

    const expectedError = new PolymeshError({
      code: ErrorCode.UnmetPrerequisite,
      message:
        'The appropriate stat type for this restriction is not set. Try calling enableStat in the namespace first',
    });

    return expect(prepareAddTransferRestriction.call(proc, args)).rejects.toThrowError(
      expectedError
    );
  });

  describe('getAuthorization', () => {
    it('should return the appropriate roles and permissions', () => {
      args = {
        ticker,
        count,
        type: TransferRestrictionType.Count,
      };

      let proc = procedureMockUtils.getInstance<AddTransferRestrictionParams, BigNumber>(
        mockContext
      );
      let boundFunc = getAuthorization.bind(proc);

      expect(boundFunc(args)).toEqual({
        permissions: {
          assets: [expect.objectContaining({ ticker })],
          transactions: [TxTags.statistics.SetAssetTransferCompliance],
          portfolios: [],
        },
      });
      expect(boundFunc({ ...args, exemptedIdentities: ['someScopeId'] })).toEqual({
        permissions: {
          assets: [expect.objectContaining({ ticker })],
          transactions: [
            TxTags.statistics.SetAssetTransferCompliance,
            TxTags.statistics.SetEntitiesExempt,
          ],
          portfolios: [],
        },
      });

      proc = procedureMockUtils.getInstance<AddTransferRestrictionParams, BigNumber>(mockContext);
      boundFunc = getAuthorization.bind(proc);

      expect(boundFunc(args)).toEqual({
        permissions: {
          assets: [expect.objectContaining({ ticker })],
          transactions: [TxTags.statistics.SetAssetTransferCompliance],
          portfolios: [],
        },
      });
    });
  });
});
