# Class: PolymeshTransaction ‹**Args, Values**›

Wrapper class for a Polymesh Transaction

## Type parameters

▪ **Args**: *unknown[] | []*

▪ **Values**: *unknown[]*

## Hierarchy

* [PolymeshTransactionBase](polymeshtransactionbase.md)‹Values›

  ↳ **PolymeshTransaction**

## Index

### Properties

* [blockHash](polymeshtransaction.md#optional-blockhash)
* [blockNumber](polymeshtransaction.md#optional-blocknumber)
* [context](polymeshtransaction.md#protected-context)
* [error](polymeshtransaction.md#optional-error)
* [inputArgs](polymeshtransaction.md#inputargs)
* [isCritical](polymeshtransaction.md#iscritical)
* [receipt](polymeshtransaction.md#optional-receipt)
* [status](polymeshtransaction.md#status)
* [tag](polymeshtransaction.md#tag)
* [txHash](polymeshtransaction.md#optional-txhash)

### Accessors

* [args](polymeshtransaction.md#args)

### Methods

* [composeTx](polymeshtransaction.md#protected-composetx)
* [getFees](polymeshtransaction.md#getfees)
* [getPayingAccount](polymeshtransaction.md#getpayingaccount)
* [getProtocolFees](polymeshtransaction.md#protected-getprotocolfees)
* [ignoresSubsidy](polymeshtransaction.md#protected-ignoressubsidy)
* [onStatusChange](polymeshtransaction.md#onstatuschange)
* [run](polymeshtransaction.md#run)
* [supportsSubsidy](polymeshtransaction.md#supportssubsidy)

## Properties

### `Optional` blockHash

• **blockHash**? : *undefined | string*

*Inherited from [PolymeshTransaction](polymeshtransaction.md).[blockHash](polymeshtransaction.md#optional-blockhash)*

*Defined in [src/base/PolymeshTransactionBase.ts:47](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/base/PolymeshTransactionBase.ts#L47)*

hash of the block where this transaction resides (status: `Succeeded`, `Failed`)

___

### `Optional` blockNumber

• **blockNumber**? : *BigNumber*

*Inherited from [PolymeshTransaction](polymeshtransaction.md).[blockNumber](polymeshtransaction.md#optional-blocknumber)*

*Defined in [src/base/PolymeshTransactionBase.ts:52](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/base/PolymeshTransactionBase.ts#L52)*

number of the block where this transaction resides (status: `Succeeded`, `Failed`)

___

### `Protected` context

• **context**: *Context*

*Inherited from [PolymeshTransaction](polymeshtransaction.md).[context](polymeshtransaction.md#protected-context)*

*Defined in [src/base/PolymeshTransactionBase.ts:105](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/base/PolymeshTransactionBase.ts#L105)*

___

### `Optional` error

• **error**? : *[PolymeshError](polymesherror.md)*

*Inherited from [PolymeshTransaction](polymeshtransaction.md).[error](polymeshtransaction.md#optional-error)*

*Defined in [src/base/PolymeshTransactionBase.ts:32](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/base/PolymeshTransactionBase.ts#L32)*

stores errors thrown while running the transaction (status: `Failed`, `Aborted`)

___

###  inputArgs

• **inputArgs**: *MapMaybePostTransactionValue‹Args›*

*Defined in [src/base/PolymeshTransaction.ts:46](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/base/PolymeshTransaction.ts#L46)*

arguments for the transaction. Available after the transaction starts running
(may be Post Transaction Values from a previous transaction in the queue that haven't resolved yet)

___

###  isCritical

• **isCritical**: *boolean*

*Inherited from [PolymeshTransaction](polymeshtransaction.md).[isCritical](polymeshtransaction.md#iscritical)*

*Defined in [src/base/PolymeshTransactionBase.ts:57](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/base/PolymeshTransactionBase.ts#L57)*

whether this transaction failing makes the entire transaction queue fail or not

___

### `Optional` receipt

• **receipt**? : *ISubmittableResult*

*Inherited from [PolymeshTransaction](polymeshtransaction.md).[receipt](polymeshtransaction.md#optional-receipt)*

*Defined in [src/base/PolymeshTransactionBase.ts:37](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/base/PolymeshTransactionBase.ts#L37)*

stores the transaction receipt (if successful)

___

###  status

• **status**: *[TransactionStatus](../enums/transactionstatus.md)* = TransactionStatus.Idle

*Inherited from [PolymeshTransaction](polymeshtransaction.md).[status](polymeshtransaction.md#status)*

*Defined in [src/base/PolymeshTransactionBase.ts:27](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/base/PolymeshTransactionBase.ts#L27)*

current status of the transaction

___

###  tag

• **tag**: *TxTag*

*Defined in [src/base/PolymeshTransaction.ts:51](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/base/PolymeshTransaction.ts#L51)*

type of transaction represented by this instance (mostly for display purposes)

___

### `Optional` txHash

• **txHash**? : *undefined | string*

*Inherited from [PolymeshTransaction](polymeshtransaction.md).[txHash](polymeshtransaction.md#optional-txhash)*

*Defined in [src/base/PolymeshTransactionBase.ts:42](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/base/PolymeshTransactionBase.ts#L42)*

transaction hash (status: `Running`, `Succeeded`, `Failed`)

## Accessors

###  args

• **get args**(): *Args*

*Defined in [src/base/PolymeshTransaction.ts:70](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/base/PolymeshTransaction.ts#L70)*

arguments for the transaction

**Returns:** *Args*

## Methods

### `Protected` composeTx

▸ **composeTx**(): *SubmittableExtrinsic‹"promise", ISubmittableResult›*

*Overrides void*

*Defined in [src/base/PolymeshTransaction.ts:79](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/base/PolymeshTransaction.ts#L79)*

**Returns:** *SubmittableExtrinsic‹"promise", ISubmittableResult›*

___

###  getFees

▸ **getFees**(): *Promise‹[Fees](../interfaces/fees.md) | null›*

*Inherited from [PolymeshTransaction](polymeshtransaction.md).[getFees](polymeshtransaction.md#getfees)*

*Defined in [src/base/PolymeshTransactionBase.ts:337](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/base/PolymeshTransactionBase.ts#L337)*

Get all (protocol and gas) fees associated with this transaction. Returns null
if the transaction is not ready yet (this can happen if it depends on the execution of a
previous transaction in the queue)

**`note`** this value might change if the transaction is run at a later time. This can be due to a governance vote

**Returns:** *Promise‹[Fees](../interfaces/fees.md) | null›*

___

###  getPayingAccount

▸ **getPayingAccount**(): *Promise‹[PayingAccount](../interfaces/payingaccount.md) | null›*

*Inherited from [PolymeshTransaction](polymeshtransaction.md).[getPayingAccount](polymeshtransaction.md#getpayingaccount)*

*Defined in [src/base/PolymeshTransactionBase.ts:295](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/base/PolymeshTransactionBase.ts#L295)*

Retrieve the Account that would pay fees for the transaction if it was run at this moment, as well as the total amount that can be
  charged to it (allowance). A null allowance means that there is no limit to that amount

A null return value signifies that the caller Account would pay the fees

**`note`** this value might change if, before running the transaction, the caller Account enters (or leaves)
  a subsidizer relationship

**Returns:** *Promise‹[PayingAccount](../interfaces/payingaccount.md) | null›*

___

### `Protected` getProtocolFees

▸ **getProtocolFees**(): *Promise‹BigNumber›*

*Overrides void*

*Defined in [src/base/PolymeshTransaction.ts:86](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/base/PolymeshTransaction.ts#L86)*

**Returns:** *Promise‹BigNumber›*

___

### `Protected` ignoresSubsidy

▸ **ignoresSubsidy**(): *boolean*

*Overrides void*

*Defined in [src/base/PolymeshTransaction.ts:94](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/base/PolymeshTransaction.ts#L94)*

**Returns:** *boolean*

___

###  onStatusChange

▸ **onStatusChange**(`listener`: function): *function*

*Inherited from [PolymeshTransaction](polymeshtransaction.md).[onStatusChange](polymeshtransaction.md#onstatuschange)*

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

*Inherited from [PolymeshTransaction](polymeshtransaction.md).[run](polymeshtransaction.md#run)*

*Defined in [src/base/PolymeshTransactionBase.ts:130](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/base/PolymeshTransactionBase.ts#L130)*

Run the transaction and update its status

**Returns:** *Promise‹void›*

___

###  supportsSubsidy

▸ **supportsSubsidy**(): *boolean*

*Overrides [PolymeshTransactionBase](polymeshtransactionbase.md).[supportsSubsidy](polymeshtransactionbase.md#abstract-supportssubsidy)*

*Defined in [src/base/PolymeshTransaction.ts:103](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/base/PolymeshTransaction.ts#L103)*

**Returns:** *boolean*
