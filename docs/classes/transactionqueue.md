# Class: TransactionQueue ‹**ProcedureReturnType, ReturnType, TransactionArgs**›

Class to manage procedural transaction queues

## Type parameters

▪ **ProcedureReturnType**

▪ **ReturnType**

▪ **TransactionArgs**: *unknown[][]*

## Hierarchy

* **TransactionQueue**

## Index

### Constructors

* [constructor](transactionqueue.md#constructor)

### Properties

* [error](transactionqueue.md#optional-error)
* [status](transactionqueue.md#status)
* [transactions](transactionqueue.md#transactions)

### Methods

* [getMinFees](transactionqueue.md#getminfees)
* [onProcessedByMiddleware](transactionqueue.md#onprocessedbymiddleware)
* [onStatusChange](transactionqueue.md#onstatuschange)
* [onTransactionStatusChange](transactionqueue.md#ontransactionstatuschange)
* [run](transactionqueue.md#run)

## Constructors

###  constructor

\+ **new TransactionQueue**(`args`: object, `context`: Context): *[TransactionQueue](transactionqueue.md)*

*Defined in [src/base/TransactionQueue.ts:92](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/base/TransactionQueue.ts#L92)*

Create a transaction queue

**Parameters:**

▪ **args**: *object*

Name | Type | Description |
------ | ------ | ------ |
`procedureResult` | MaybePostTransactionValue‹ProcedureReturnType› | value that will be returned by the queue after it is run. It can be a {@link PostTransactionValue} |
`transactions` | PolymeshTransactionArray‹TransactionArgs› | list of transactions to be run in this queue |
`transformer?` | undefined &#124; function | function that transforms the procedure's return value before returning it after the queue is run  |

▪ **context**: *Context*

**Returns:** *[TransactionQueue](transactionqueue.md)*

## Properties

### `Optional` error

• **error**? : *[PolymeshError](polymesherror.md)*

*Defined in [src/base/TransactionQueue.ts:60](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/base/TransactionQueue.ts#L60)*

optional error information

___

###  status

• **status**: *[TransactionQueueStatus](../enums/transactionqueuestatus.md)* = TransactionQueueStatus.Idle

*Defined in [src/base/TransactionQueue.ts:55](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/base/TransactionQueue.ts#L55)*

status of the queue

___

###  transactions

• **transactions**: *PolymeshTransactionArray‹TransactionArgs›*

*Defined in [src/base/TransactionQueue.ts:50](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/base/TransactionQueue.ts#L50)*

transactions that will be run in the queue

## Methods

###  getMinFees

▸ **getMinFees**(): *Promise‹[FeesBreakdown](../interfaces/feesbreakdown.md)›*

*Defined in [src/base/TransactionQueue.ts:190](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/base/TransactionQueue.ts#L190)*

Retrieve a lower bound of the fees required to execute this transaction queue.
  Transaction fees can be higher at execution time for three reasons:

- One or more transaction arguments depend on the result of another transaction in the queue.
  This means fees can't be calculated for said transaction until previous transactions in the queue have run
- Protocol or gas fees may vary between when this value is fetched and when the transaction is actually executed because of a
  governance vote

Transaction fees are broken down between those that have to be paid by the signing Account and
  those that will be paid by third parties. In most cases, the entirety of the fees will be paid by
  either the signing Account or a **single** third party Account

**Returns:** *Promise‹[FeesBreakdown](../interfaces/feesbreakdown.md)›*

___

###  onProcessedByMiddleware

▸ **onProcessedByMiddleware**(`listener`: function): *function*

*Defined in [src/base/TransactionQueue.ts:343](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/base/TransactionQueue.ts#L343)*

Subscribe to the results of this queue being processed by the harvester (and as such, available to the middleware)

**`note`** this event will be fired even if the queue fails

**`throws`** if the middleware wasn't enabled when instantiating the SDK client

**Parameters:**

▪ **listener**: *function*

callback function that will be called whenever the middleware is updated with the latest data.
  If there is an error (timeout or middleware offline) it will be passed to this callback

▸ (`err?`: [PolymeshError](polymesherror.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err?` | [PolymeshError](polymesherror.md) |

**Returns:** *function*

unsubscribe function

▸ (): *void*

___

###  onStatusChange

▸ **onStatusChange**(`listener`: function): *function*

*Defined in [src/base/TransactionQueue.ts:306](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/base/TransactionQueue.ts#L306)*

Subscribe to status changes on the Transaction Queue

**Parameters:**

▪ **listener**: *function*

callback function that will be called whenever the Transaction Queue's status changes

▸ (`transactionQueue`: this, `err?`: [PolymeshError](polymesherror.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`transactionQueue` | this |
`err?` | [PolymeshError](polymesherror.md) |

**Returns:** *function*

unsubscribe function

▸ (): *void*

___

###  onTransactionStatusChange

▸ **onTransactionStatusChange**‹**Values**›(`listener`: function): *function*

*Defined in [src/base/TransactionQueue.ts:323](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/base/TransactionQueue.ts#L323)*

Subscribe to status changes on individual transactions

**Type parameters:**

▪ **Values**: *unknown[]*

**Parameters:**

▪ **listener**: *function*

callback function that will be called whenever the individual transaction's status changes

▸ (`transaction`: [PolymeshTransactionBase](polymeshtransactionbase.md)‹Values›, `transactionQueue`: this): *void*

**Parameters:**

Name | Type |
------ | ------ |
`transaction` | [PolymeshTransactionBase](polymeshtransactionbase.md)‹Values› |
`transactionQueue` | this |

**Returns:** *function*

unsubscribe function

▸ (): *void*

___

###  run

▸ **run**(): *Promise‹ReturnType›*

*Defined in [src/base/TransactionQueue.ts:137](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/base/TransactionQueue.ts#L137)*

Run the transactions in the queue in sequential order. If a transaction fails or the user refuses to sign it, one of two things can happen:

1) If `transaction.isCritical === true`, the entire queue fails and the corresponding error is stored in `this.error` as well as thrown
2) Otherwise, the queue continues executing and the error is stored in `transaction.error`

**Returns:** *Promise‹ReturnType›*
