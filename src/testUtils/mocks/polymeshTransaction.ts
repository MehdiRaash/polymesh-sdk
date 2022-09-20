/* istanbul ignore file */
/* eslint-disable @typescript-eslint/naming-convention */

import { merge } from 'lodash';

import { PolymeshTransaction } from '~/internal';
import { Mocked } from '~/testUtils/types';
import { PayingAccountFees, TransactionStatus } from '~/types';

type MockTransaction = Mocked<PolymeshTransaction<unknown>>;

interface MockTransactionSpec {
  isCritical: boolean;
  autoResolve: TransactionStatus.Failed | TransactionStatus.Succeeded | false;
  fees?: PayingAccountFees;
  supportsSubsidy?: boolean;
}

interface TransactionMockData {
  updateStatusStub: MockTransaction['updateStatus'];
  statusChangeListener: (transaction: MockTransaction) => void;
  resolved: boolean;
}

let polymeshTransactionConstructorStub: jest.Mock;
let polymeshTransactionBatchConstructorStub: jest.Mock;

const MockPolymeshTransactionClass = class {
  /**
   * @hidden
   */
  constructor(...args: unknown[]) {
    return polymeshTransactionConstructorStub(...args);
  }
};

const MockPolymeshTransactionBatchClass = class {
  /**
   * @hidden
   */
  constructor(...args: unknown[]) {
    return polymeshTransactionBatchConstructorStub(...args);
  }
};

export const mockPolymeshTransactionModule = (path: string) => (): Record<string, unknown> => ({
  ...jest.requireActual(path),
  PolymeshTransaction: MockPolymeshTransactionClass,
});
export const mockPolymeshTransactionBatchModule =
  (path: string) => (): Record<string, unknown> => ({
    ...jest.requireActual(path),
    PolymeshTransactionBatch: MockPolymeshTransactionBatchClass,
  });

const transactionMocksData = new Map<MockTransaction, TransactionMockData>();

/**
 * @hidden
 *
 * Initialize the factory by adding default all-purpose functionality to the mock manager
 */
export function initMocks(): void {
  transactionMocksData.clear();
  polymeshTransactionConstructorStub = jest.fn();
  polymeshTransactionBatchConstructorStub = jest.fn();
  polymeshTransactionConstructorStub.mockImplementation(args => {
    const value = merge({}, args);
    Object.setPrototypeOf(value, require('~/internal').PolymeshTransaction.prototype);
    return value;
  });
  polymeshTransactionBatchConstructorStub.mockImplementation(args => {
    const value = merge({}, args);
    Object.setPrototypeOf(value, require('~/internal').PolymeshTransactionBatch.prototype);
    return value;
  });
}

/**
 * @hidden
 * Reinitialize mocks
 */
export function mockReset(): void {
  initMocks();
}

/**
 * @hidden
 * Determine the next set of transactions that will be created when the PolymeshTransaction
 * constructor is used
 *
 * @param specs - transactions that will be constructed
 */
export function setupNextTransactions(specs: MockTransactionSpec[]): MockTransaction[] {
  const receipt = 'someReceipt';
  const error = 'Transaction Error';
  const updateStatusStub = jest.fn();

  const instances = specs.map(({ autoResolve, fees = null, supportsSubsidy = true }) => {
    const instance = {} as MockTransaction;
    if (autoResolve === TransactionStatus.Failed) {
      instance.run = jest.fn().mockImplementation(() => {
        throw new Error(error);
      });
    } else if (autoResolve === TransactionStatus.Succeeded) {
      instance.run = jest.fn().mockResolvedValue(receipt) as unknown as MockTransaction['run'];
    } else {
      const runStub = jest.fn().mockReturnValue(
        new Promise((resolve, reject) => {
          updateStatusStub.mockImplementation((newStatus: TransactionStatus) => {
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            const { statusChangeListener } = transactionMocksData.get(instance)!;

            statusChangeListener(instance);

            if (newStatus === TransactionStatus.Succeeded) {
              resolve(receipt);
            }
            if (
              [
                TransactionStatus.Aborted,
                TransactionStatus.Failed,
                TransactionStatus.Rejected,
              ].includes(newStatus)
            ) {
              reject(new Error(error));
            }
          });
        })
      );
      instance.run = runStub as unknown as MockTransaction['run'];
    }

    instance.onStatusChange = jest.fn().mockImplementation(listener => {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const mockData = transactionMocksData.get(instance)!;

      transactionMocksData.set(instance, {
        ...mockData,
        statusChangeListener: listener,
      });
    }) as unknown as MockTransaction['onStatusChange'];

    instance.status = autoResolve || TransactionStatus.Idle;
    instance.getTotalFees = jest.fn().mockResolvedValue(fees) as MockTransaction['getTotalFees'];
    instance.supportsSubsidy = jest
      .fn()
      .mockReturnValue(supportsSubsidy) as MockTransaction['supportsSubsidy'];

    transactionMocksData.set(instance, {
      updateStatusStub,
      resolved: !!autoResolve,
      statusChangeListener: jest.fn(),
    });

    return instance;
  });

  polymeshTransactionConstructorStub = jest.fn();

  instances.forEach((instance, index) => {
    polymeshTransactionConstructorStub.mockImplementation(() => {
      if (polymeshTransactionConstructorStub.mock.calls.length === index) {
        return instance;
      }
    });
  });

  return instances;
}

/**
 * @hidden
 * Update the status of an existing mock transaction. Will throw an exception if the transaction has already been resolved
 *
 * @param transaction - transaction to update
 * @param status - new status
 */
export function updateTransactionStatus(
  transaction: MockTransaction,
  status: TransactionStatus
): void {
  const transactionMockData = transactionMocksData.get(transaction);

  if (!transactionMockData) {
    throw new Error('Invalid transaction object');
  }

  if (transactionMockData.resolved) {
    throw new Error('Cannot update status on an already resolved transaction');
  }

  if (status === transaction.status) {
    throw new Error(`Status is already ${status}`);
  }

  if (
    [TransactionStatus.Aborted, TransactionStatus.Failed, TransactionStatus.Succeeded].includes(
      status
    )
  ) {
    transactionMocksData.set(transaction, {
      ...transactionMockData,
      resolved: true,
    });
  }

  transaction.status = status;

  transactionMockData.updateStatusStub(status);
}

/**
 * @hidden
 */
export function getTransactionConstructorStub(): jest.Mock {
  return polymeshTransactionConstructorStub;
}

/**
 * @hidden
 */
export function getTransactionBatchConstructorStub(): jest.Mock {
  return polymeshTransactionBatchConstructorStub;
}
