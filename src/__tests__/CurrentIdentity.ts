import BigNumber from 'bignumber.js';

import { CurrentIdentity } from '~/CurrentIdentity';
import { TickerReservation, TransactionQueue } from '~/internal';
import { dsMockUtils, entityMockUtils, procedureMockUtils } from '~/testUtils/mocks';
import { MockContext } from '~/testUtils/mocks/dataSources';
import { KnownTokenType, PermissionType, SecurityToken, TokenIdentifierType } from '~/types';

jest.mock(
  '~/base/Procedure',
  require('~/testUtils/mocks/procedure').mockProcedureModule('~/base/Procedure')
);

describe('CurrentIdentity class', () => {
  let context: MockContext;

  beforeAll(() => {
    dsMockUtils.initMocks();
    entityMockUtils.initMocks();
    procedureMockUtils.initMocks();
  });

  beforeEach(() => {
    context = dsMockUtils.getContextInstance();
  });

  afterEach(() => {
    dsMockUtils.reset();
    entityMockUtils.reset();
    procedureMockUtils.reset();
  });

  afterAll(() => {
    dsMockUtils.cleanup();
    entityMockUtils.cleanup();
    procedureMockUtils.cleanup();
  });

  describe('method: removeSecondaryKeys', () => {
    test('should prepare the procedure with the correct arguments and context, and return the resulting transaction queue', async () => {
      const currentIdentity = new CurrentIdentity(context);

      const signers = [entityMockUtils.getAccountInstance({ address: 'someAccount' })];

      const expectedQueue = ('someQueue' as unknown) as TransactionQueue<void>;

      procedureMockUtils
        .getPrepareStub()
        .withArgs({ args: { signers }, transformer: undefined }, context)
        .resolves(expectedQueue);

      const queue = await currentIdentity.removeSecondaryKeys({ signers });

      expect(queue).toBe(expectedQueue);
    });
  });

  describe('method: revokePermissions', () => {
    test('should prepare the procedure with the correct arguments and context, and return the resulting transaction queue', async () => {
      const currentIdentity = new CurrentIdentity(context);

      const signers = [entityMockUtils.getAccountInstance({ address: 'someAccount' })];
      const secondaryKeys = [
        {
          signer: signers[0],
          permissions: {
            tokens: { type: PermissionType.Include, values: [] },
            transactions: { type: PermissionType.Include, values: [] },
            portfolios: { type: PermissionType.Include, values: [] },
          },
        },
      ];

      const expectedQueue = ('someQueue' as unknown) as TransactionQueue<void>;

      procedureMockUtils
        .getPrepareStub()
        .withArgs({ args: { secondaryKeys }, transformer: undefined }, context)
        .resolves(expectedQueue);

      const queue = await currentIdentity.revokePermissions({ secondaryKeys: signers });

      expect(queue).toBe(expectedQueue);
    });
  });

  describe('method: modifyPermissions', () => {
    test('should prepare the procedure with the correct arguments and context, and return the resulting transaction queue', async () => {
      const currentIdentity = new CurrentIdentity(context);

      const secondaryKeys = [
        {
          signer: entityMockUtils.getAccountInstance({ address: 'someAccount' }),
          permissions: { tokens: null, transactions: null, portfolios: null },
        },
      ];

      const expectedQueue = ('someQueue' as unknown) as TransactionQueue<void>;

      procedureMockUtils
        .getPrepareStub()
        .withArgs({ args: { secondaryKeys }, transformer: undefined }, context)
        .resolves(expectedQueue);

      const queue = await currentIdentity.modifyPermissions({ secondaryKeys });

      expect(queue).toBe(expectedQueue);
    });
  });

  describe('method: inviteAccount', () => {
    test('should prepare the procedure with the correct arguments and context, and return the resulting transaction queue', async () => {
      const currentIdentity = new CurrentIdentity(context);

      const args = {
        targetAccount: 'someAccount',
      };

      const expectedQueue = ('someQueue' as unknown) as TransactionQueue<void>;

      procedureMockUtils
        .getPrepareStub()
        .withArgs({ args, transformer: undefined }, context)
        .resolves(expectedQueue);

      const queue = await currentIdentity.inviteAccount(args);

      expect(queue).toBe(expectedQueue);
    });
  });

  describe('method: freezeSecondaryKeys', () => {
    test('should prepare the procedure with the correct arguments and context, and return the resulting transaction queue', async () => {
      const currentIdentity = new CurrentIdentity(context);

      const args = {
        freeze: true,
      };

      const expectedQueue = ('someQueue' as unknown) as TransactionQueue<void>;

      procedureMockUtils
        .getPrepareStub()
        .withArgs({ args, transformer: undefined }, context)
        .resolves(expectedQueue);

      const queue = await currentIdentity.freezeSecondaryKeys();

      expect(queue).toBe(expectedQueue);
    });
  });

  describe('method: unfreezeSecondaryKeys', () => {
    test('should prepare the procedure with the correct arguments and context, and return the resulting transaction queue', async () => {
      const currentIdentity = new CurrentIdentity(context);

      const args = {
        freeze: false,
      };

      const expectedQueue = ('someQueue' as unknown) as TransactionQueue<void>;

      procedureMockUtils
        .getPrepareStub()
        .withArgs({ args, transformer: undefined }, context)
        .resolves(expectedQueue);

      const queue = await currentIdentity.unfreezeSecondaryKeys();

      expect(queue).toBe(expectedQueue);
    });
  });

  describe('method: reserveTicker', () => {
    test('should prepare the procedure with the correct arguments and context, and return the resulting transaction queue', async () => {
      const currentIdentity = new CurrentIdentity(context);

      const args = {
        ticker: 'SOMETICKER',
      };

      const expectedQueue = ('someQueue' as unknown) as TransactionQueue<TickerReservation>;

      procedureMockUtils
        .getPrepareStub()
        .withArgs({ args, transformer: undefined }, context)
        .resolves(expectedQueue);

      const queue = await currentIdentity.reserveTicker(args);

      expect(queue).toBe(expectedQueue);
    });
  });

  describe('method: createToken', () => {
    test('should prepare the procedure with the correct arguments and context, and return the resulting transaction queue', async () => {
      const ticker = 'FAKETICKER';
      const currentIdentity = new CurrentIdentity(context);

      const args = {
        ticker,
        name: 'TEST',
        totalSupply: new BigNumber(100),
        isDivisible: true,
        tokenType: KnownTokenType.EquityCommon,
        tokenIdentifiers: [{ type: TokenIdentifierType.Isin, value: '12345' }],
        fundingRound: 'Series A',
        requireInvestorUniqueness: false,
        reservationRequired: false,
      };

      const expectedQueue = ('someQueue' as unknown) as TransactionQueue<SecurityToken>;

      procedureMockUtils
        .getPrepareStub()
        .withArgs({ args, transformer: undefined }, context)
        .resolves(expectedQueue);

      const queue = await currentIdentity.createToken(args);

      expect(queue).toBe(expectedQueue);
    });
  });
});
