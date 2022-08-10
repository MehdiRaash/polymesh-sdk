# Class: PolymeshTransactionBase ‹**Values**›

Wrapper class for a Polymesh Transaction

## Type parameters

▪ **Values**: *unknown[]*

## Hierarchy

* **PolymeshTransactionBase**

  ↳ [PolymeshTransaction](polymeshtransaction.md)

  ↳ [PolymeshTransactionBatch](polymeshtransactionbatch.md)

## Index

### Properties

* [blockHash](polymeshtransactionbase.md#optional-blockhash)
* [blockNumber](polymeshtransactionbase.md#optional-blocknumber)
* [context](polymeshtransactionbase.md#protected-context)
* [error](polymeshtransactionbase.md#optional-error)
* [isCritical](polymeshtransactionbase.md#iscritical)
* [receipt](polymeshtransactionbase.md#optional-receipt)
* [status](polymeshtransactionbase.md#status)
* [txHash](polymeshtransactionbase.md#optional-txhash)

### Methods

* [getFees](polymeshtransactionbase.md#getfees)
* [getPayingAccount](polymeshtransactionbase.md#getpayingaccount)
* [onStatusChange](polymeshtransactionbase.md#onstatuschange)
* [run](polymeshtransactionbase.md#run)
* [supportsSubsidy](polymeshtransactionbase.md#abstract-supportssubsidy)

## Properties

### `Optional` blockHash

• **blockHash**? : *undefined | string*

*Defined in [src/base/PolymeshTransactionBase.ts:47](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/base/PolymeshTransactionBase.ts#L47)*

hash of the block where this transaction resides (status: `Succeeded`, `Failed`)

___

### `Optional` blockNumber

• **blockNumber**? : *BigNumber*

*Defined in [src/base/PolymeshTransactionBase.ts:52](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/base/PolymeshTransactionBase.ts#L52)*

number of the block where this transaction resides (status: `Succeeded`, `Failed`)

___

### `Protected` context

• **context**: *Context*

*Defined in [src/base/PolymeshTransactionBase.ts:105](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/base/PolymeshTransactionBase.ts#L105)*

___

### `Optional` error

• **error**? : *[PolymeshError](polymesherror.md)*

*Defined in [src/base/PolymeshTransactionBase.ts:32](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/base/PolymeshTransactionBase.ts#L32)*

stores errors thrown while running the transaction (status: `Failed`, `Aborted`)

___

###  isCritical

• **isCritical**: *boolean*

*Defined in [src/base/PolymeshTransactionBase.ts:57](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/base/PolymeshTransactionBase.ts#L57)*

whether this transaction failing makes the entire transaction queue fail or not

___

### `Optional` receipt

• **receipt**? : *ISubmittableResult*

*Defined in [src/base/PolymeshTransactionBase.ts:37](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/base/PolymeshTransactionBase.ts#L37)*

stores the transaction receipt (if successful)

___

###  status

• **status**: *[TransactionStatus](../enums/transactionstatus.md)* = TransactionStatus.Idle

*Defined in [src/base/PolymeshTransactionBase.ts:27](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/base/PolymeshTransactionBase.ts#L27)*

current status of the transaction

___

### `Optional` txHash

• **txHash**? : *undefined | string*

*Defined in [src/base/PolymeshTransactionBase.ts:42](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/base/PolymeshTransactionBase.ts#L42)*

transaction hash (status: `Running`, `Succeeded`, `Failed`)

## Methods

###  getFees

▸ **getFees**(): *Promise‹[Fees](../interfaces/fees.md) | null›*

*Defined in [src/base/PolymeshTransactionBase.ts:337](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/base/PolymeshTransactionBase.ts#L337)*

Get all (protocol and gas) fees associated with this transaction. Returns null
if the transaction is not ready yet (this can happen if it depends on the execution of a
previous transaction in the queue)

**`note`** this value might change if the transaction is run at a later time. This can be due to a governance vote

**Returns:** *Promise‹[Fees](../interfaces/fees.md) | null›*

___

###  getPayingAccount

▸ **getPayingAccount**(): *Promise‹[PayingAccount](../interfaces/payingaccount.md) | null›*

*Defined in [src/base/PolymeshTransactionBase.ts:295](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/base/PolymeshTransactionBase.ts#L295)*

Retrieve the Account that would pay fees for the transaction if it was run at this moment, as well as the total amount that can be
  charged to it (allowance). A null allowance means that there is no limit to that amount

A null return value signifies that the caller Account would pay the fees

**`note`** this value might change if, before running the transaction, the caller Account enters (or leaves)
  a subsidizer relationship

**Returns:** *Promise‹[PayingAccount](../interfaces/payingaccount.md) | null›*

___

###  onStatusChange

▸ **onStatusChange**(`listener`: function): *function*

*Defined in [src/base/PolymeshTransactionBase.ts:278](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/base/PolymeshTransactionBase.ts#L278)*

Subscribe to status changes

**Parameters:**

▪ **listener**: *function*

callback function that will be called whenever the status changes

▸ (`transaction`: this): *void*

**Parameters:**

Name | Type |
------ | ------ |
`transaction` | this |

**Returns:** *function*

unsubscribe function

▸ (): *void*

___

###  run

▸ **run**(): *Promise‹void›*

*Defined in [src/base/PolymeshTransactionBase.ts:130](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/base/PolymeshTransactionBase.ts#L130)*

Run the transaction and update its status

**Returns:** *Promise‹void›*

___

### `Abstract` supportsSubsidy

▸ **supportsSubsidy**(): *boolean*

*Defined in [src/base/PolymeshTransactionBase.ts:393](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/base/PolymeshTransactionBase.ts#L393)*

Return whether the transaction can be subsidized. If the result is false
  AND the caller is being subsidized by a third party, the transaction can't be executed and trying
  to do so will result in an error

**`note`** this depends on the type of transaction itself (i.e. `staking.bond` can't be subsidized, but `asset.createAsset` can)

**Returns:** *boolean*
