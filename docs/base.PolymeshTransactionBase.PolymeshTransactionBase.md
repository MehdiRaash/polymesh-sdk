# Class: PolymeshTransactionBase<ReturnValue, TransformedReturnValue\>

[base/PolymeshTransactionBase](../wiki/base.PolymeshTransactionBase).PolymeshTransactionBase

Wrapper class for a Polymesh Transaction

## Type parameters

| Name | Type |
| :------ | :------ |
| `ReturnValue` | `void` |
| `TransformedReturnValue` | `ReturnValue` |

## Hierarchy

- **`PolymeshTransactionBase`**

  ↳ [`PolymeshTransaction`](../wiki/base.PolymeshTransaction.PolymeshTransaction)

  ↳ [`PolymeshTransactionBatch`](../wiki/base.PolymeshTransactionBatch.PolymeshTransactionBatch)

## Table of contents

### Properties

- [blockHash](../wiki/base.PolymeshTransactionBase.PolymeshTransactionBase#blockhash)
- [blockNumber](../wiki/base.PolymeshTransactionBase.PolymeshTransactionBase#blocknumber)
- [error](../wiki/base.PolymeshTransactionBase.PolymeshTransactionBase#error)
- [receipt](../wiki/base.PolymeshTransactionBase.PolymeshTransactionBase#receipt)
- [status](../wiki/base.PolymeshTransactionBase.PolymeshTransactionBase#status)
- [txHash](../wiki/base.PolymeshTransactionBase.PolymeshTransactionBase#txhash)
- [txIndex](../wiki/base.PolymeshTransactionBase.PolymeshTransactionBase#txindex)

### Methods

- [getProtocolFees](../wiki/base.PolymeshTransactionBase.PolymeshTransactionBase#getprotocolfees)
- [getTotalFees](../wiki/base.PolymeshTransactionBase.PolymeshTransactionBase#gettotalfees)
- [onProcessedByMiddleware](../wiki/base.PolymeshTransactionBase.PolymeshTransactionBase#onprocessedbymiddleware)
- [onStatusChange](../wiki/base.PolymeshTransactionBase.PolymeshTransactionBase#onstatuschange)
- [run](../wiki/base.PolymeshTransactionBase.PolymeshTransactionBase#run)
- [supportsSubsidy](../wiki/base.PolymeshTransactionBase.PolymeshTransactionBase#supportssubsidy)

## Properties

### blockHash

• `Optional` **blockHash**: `string`

hash of the block where this transaction resides (status: `Succeeded`, `Failed`)

#### Defined in

[base/PolymeshTransactionBase.ts:89](https://github.com/PolymeshAssociation/polymesh-sdk/blob/339b7503/src/base/PolymeshTransactionBase.ts#L89)

___

### blockNumber

• `Optional` **blockNumber**: `BigNumber`

number of the block where this transaction resides (status: `Succeeded`, `Failed`)

#### Defined in

[base/PolymeshTransactionBase.ts:94](https://github.com/PolymeshAssociation/polymesh-sdk/blob/339b7503/src/base/PolymeshTransactionBase.ts#L94)

___

### error

• `Optional` **error**: [`PolymeshError`](../wiki/base.PolymeshError.PolymeshError)

stores errors thrown while running the transaction (status: `Failed`, `Aborted`)

#### Defined in

[base/PolymeshTransactionBase.ts:69](https://github.com/PolymeshAssociation/polymesh-sdk/blob/339b7503/src/base/PolymeshTransactionBase.ts#L69)

___

### receipt

• `Optional` **receipt**: `ISubmittableResult`

stores the transaction receipt (if successful)

#### Defined in

[base/PolymeshTransactionBase.ts:74](https://github.com/PolymeshAssociation/polymesh-sdk/blob/339b7503/src/base/PolymeshTransactionBase.ts#L74)

___

### status

• **status**: [`TransactionStatus`](../wiki/types.TransactionStatus) = `TransactionStatus.Idle`

current status of the transaction

#### Defined in

[base/PolymeshTransactionBase.ts:64](https://github.com/PolymeshAssociation/polymesh-sdk/blob/339b7503/src/base/PolymeshTransactionBase.ts#L64)

___

### txHash

• `Optional` **txHash**: `string`

transaction hash (status: `Running`, `Succeeded`, `Failed`)

#### Defined in

[base/PolymeshTransactionBase.ts:79](https://github.com/PolymeshAssociation/polymesh-sdk/blob/339b7503/src/base/PolymeshTransactionBase.ts#L79)

___

### txIndex

• `Optional` **txIndex**: `BigNumber`

transaction index within its block (status: `Succeeded`, `Failed`)

#### Defined in

[base/PolymeshTransactionBase.ts:84](https://github.com/PolymeshAssociation/polymesh-sdk/blob/339b7503/src/base/PolymeshTransactionBase.ts#L84)

## Methods

### getProtocolFees

▸ `Abstract` **getProtocolFees**(): `Promise`<`BigNumber`\>

Return this transaction's protocol fees. These are extra fees charged for
  specific operations on the chain. Not to be confused with network fees (which
  depend on the complexity of the operation), protocol fees are set by governance and/or
  chain upgrades

#### Returns

`Promise`<`BigNumber`\>

___

### getTotalFees

▸ **getTotalFees**(): `Promise`<[`PayingAccountFees`](../wiki/types.PayingAccountFees)\>

Retrieve a breakdown of the fees required to run this transaction, as well as the Account responsible for paying them

**`Note`**

 these values might be inaccurate if the transaction is run at a later time. This can be due to a governance vote or other
  chain related factors (like modifications to a specific subsidizer relationship or a chain upgrade)

#### Returns

`Promise`<[`PayingAccountFees`](../wiki/types.PayingAccountFees)\>

___

### onProcessedByMiddleware

▸ **onProcessedByMiddleware**(`listener`): [`UnsubCallback`](../wiki/types#unsubcallback)

Subscribe to the results of this transaction being processed by the indexing service (and as such, available to the middleware)

**`Note`**

 this event will be fired even if the queue fails

**`Throws`**

 if the middleware wasn't enabled when instantiating the SDK client

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `listener` | (`err?`: [`PolymeshError`](../wiki/base.PolymeshError.PolymeshError)) => `void` | callback function that will be called whenever the middleware is updated with the latest data.   If there is an error (timeout or middleware offline) it will be passed to this callback |

#### Returns

[`UnsubCallback`](../wiki/types#unsubcallback)

unsubscribe function

___

### onStatusChange

▸ **onStatusChange**(`listener`): [`UnsubCallback`](../wiki/types#unsubcallback)

Subscribe to status changes

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `listener` | (`transaction`: [`GenericPolymeshTransaction`](../wiki/types#genericpolymeshtransaction)<`ReturnValue`, `TransformedReturnValue`\>) => `void` | callback function that will be called whenever the status changes |

#### Returns

[`UnsubCallback`](../wiki/types#unsubcallback)

unsubscribe function

___

### run

▸ **run**(): `Promise`<`TransformedReturnValue`\>

Run the transaction, update its status and return a result if applicable.
  Certain transactions create Entities on the blockchain, and those Entities are returned
  for convenience. For example, when running a transaction that creates an Asset, the Asset itself
  is returned

#### Returns

`Promise`<`TransformedReturnValue`\>

___

### supportsSubsidy

▸ `Abstract` **supportsSubsidy**(): `boolean`

Return whether the transaction can be subsidized. If the result is false
  AND the caller is being subsidized by a third party, the transaction can't be executed and trying
  to do so will result in an error

**`Note`**

 this depends on the type of transaction itself (e.g. `staking.bond` can't be subsidized, but `asset.createAsset` can)

#### Returns

`boolean`
