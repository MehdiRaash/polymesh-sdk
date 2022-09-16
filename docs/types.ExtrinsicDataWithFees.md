# Interface: ExtrinsicDataWithFees

[types](../wiki/types).ExtrinsicDataWithFees

## Hierarchy

- [`ExtrinsicData`](../wiki/types.ExtrinsicData)

  ↳ **`ExtrinsicDataWithFees`**

## Table of contents

### Properties

- [address](../wiki/types.ExtrinsicDataWithFees#address)
- [blockHash](../wiki/types.ExtrinsicDataWithFees#blockhash)
- [blockNumber](../wiki/types.ExtrinsicDataWithFees#blocknumber)
- [extrinsicHash](../wiki/types.ExtrinsicDataWithFees#extrinsichash)
- [extrinsicIdx](../wiki/types.ExtrinsicDataWithFees#extrinsicidx)
- [fee](../wiki/types.ExtrinsicDataWithFees#fee)
- [nonce](../wiki/types.ExtrinsicDataWithFees#nonce)
- [params](../wiki/types.ExtrinsicDataWithFees#params)
- [specVersionId](../wiki/types.ExtrinsicDataWithFees#specversionid)
- [success](../wiki/types.ExtrinsicDataWithFees#success)
- [txTag](../wiki/types.ExtrinsicDataWithFees#txtag)

## Properties

### address

• **address**: ``null`` \| `string`

public key of the signer. Unsigned transactions have no signer, in which case this value is null (example: an enacted governance proposal)

#### Inherited from

[ExtrinsicData](../wiki/types.ExtrinsicData).[address](../wiki/types.ExtrinsicData#address)

#### Defined in

[types/index.ts:346](https://github.com/PolymeshAssociation/polymesh-sdk/blob/339b7503/src/types/index.ts#L346)

___

### blockHash

• **blockHash**: `string`

#### Inherited from

[ExtrinsicData](../wiki/types.ExtrinsicData).[blockHash](../wiki/types.ExtrinsicData#blockhash)

#### Defined in

[types/index.ts:340](https://github.com/PolymeshAssociation/polymesh-sdk/blob/339b7503/src/types/index.ts#L340)

___

### blockNumber

• **blockNumber**: `BigNumber`

#### Inherited from

[ExtrinsicData](../wiki/types.ExtrinsicData).[blockNumber](../wiki/types.ExtrinsicData#blocknumber)

#### Defined in

[types/index.ts:341](https://github.com/PolymeshAssociation/polymesh-sdk/blob/339b7503/src/types/index.ts#L341)

___

### extrinsicHash

• **extrinsicHash**: `string`

#### Inherited from

[ExtrinsicData](../wiki/types.ExtrinsicData).[extrinsicHash](../wiki/types.ExtrinsicData#extrinsichash)

#### Defined in

[types/index.ts:355](https://github.com/PolymeshAssociation/polymesh-sdk/blob/339b7503/src/types/index.ts#L355)

___

### extrinsicIdx

• **extrinsicIdx**: `BigNumber`

#### Inherited from

[ExtrinsicData](../wiki/types.ExtrinsicData).[extrinsicIdx](../wiki/types.ExtrinsicData#extrinsicidx)

#### Defined in

[types/index.ts:342](https://github.com/PolymeshAssociation/polymesh-sdk/blob/339b7503/src/types/index.ts#L342)

___

### fee

• **fee**: [`Fees`](../wiki/types.Fees)

#### Defined in

[types/index.ts:359](https://github.com/PolymeshAssociation/polymesh-sdk/blob/339b7503/src/types/index.ts#L359)

___

### nonce

• **nonce**: ``null`` \| `BigNumber`

nonce of the transaction. Null for unsigned transactions where address is null

#### Inherited from

[ExtrinsicData](../wiki/types.ExtrinsicData).[nonce](../wiki/types.ExtrinsicData#nonce)

#### Defined in

[types/index.ts:350](https://github.com/PolymeshAssociation/polymesh-sdk/blob/339b7503/src/types/index.ts#L350)

___

### params

• **params**: `Record`<`string`, `unknown`\>[]

#### Inherited from

[ExtrinsicData](../wiki/types.ExtrinsicData).[params](../wiki/types.ExtrinsicData#params)

#### Defined in

[types/index.ts:352](https://github.com/PolymeshAssociation/polymesh-sdk/blob/339b7503/src/types/index.ts#L352)

___

### specVersionId

• **specVersionId**: `BigNumber`

#### Inherited from

[ExtrinsicData](../wiki/types.ExtrinsicData).[specVersionId](../wiki/types.ExtrinsicData#specversionid)

#### Defined in

[types/index.ts:354](https://github.com/PolymeshAssociation/polymesh-sdk/blob/339b7503/src/types/index.ts#L354)

___

### success

• **success**: `boolean`

#### Inherited from

[ExtrinsicData](../wiki/types.ExtrinsicData).[success](../wiki/types.ExtrinsicData#success)

#### Defined in

[types/index.ts:353](https://github.com/PolymeshAssociation/polymesh-sdk/blob/339b7503/src/types/index.ts#L353)

___

### txTag

• **txTag**: [`TxTag`](../wiki/generated.types#txtag)

#### Inherited from

[ExtrinsicData](../wiki/types.ExtrinsicData).[txTag](../wiki/types.ExtrinsicData#txtag)

#### Defined in

[types/index.ts:351](https://github.com/PolymeshAssociation/polymesh-sdk/blob/339b7503/src/types/index.ts#L351)
