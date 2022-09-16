# Interface: ExtrinsicData

[types](../wiki/types).ExtrinsicData

## Hierarchy

- **`ExtrinsicData`**

  ↳ [`ExtrinsicDataWithFees`](../wiki/types.ExtrinsicDataWithFees)

## Table of contents

### Properties

- [address](../wiki/types.ExtrinsicData#address)
- [blockHash](../wiki/types.ExtrinsicData#blockhash)
- [blockNumber](../wiki/types.ExtrinsicData#blocknumber)
- [extrinsicHash](../wiki/types.ExtrinsicData#extrinsichash)
- [extrinsicIdx](../wiki/types.ExtrinsicData#extrinsicidx)
- [nonce](../wiki/types.ExtrinsicData#nonce)
- [params](../wiki/types.ExtrinsicData#params)
- [specVersionId](../wiki/types.ExtrinsicData#specversionid)
- [success](../wiki/types.ExtrinsicData#success)
- [txTag](../wiki/types.ExtrinsicData#txtag)

## Properties

### address

• **address**: ``null`` \| `string`

public key of the signer. Unsigned transactions have no signer, in which case this value is null (example: an enacted governance proposal)

#### Defined in

[types/index.ts:346](https://github.com/PolymeshAssociation/polymesh-sdk/blob/339b7503/src/types/index.ts#L346)

___

### blockHash

• **blockHash**: `string`

#### Defined in

[types/index.ts:340](https://github.com/PolymeshAssociation/polymesh-sdk/blob/339b7503/src/types/index.ts#L340)

___

### blockNumber

• **blockNumber**: `BigNumber`

#### Defined in

[types/index.ts:341](https://github.com/PolymeshAssociation/polymesh-sdk/blob/339b7503/src/types/index.ts#L341)

___

### extrinsicHash

• **extrinsicHash**: `string`

#### Defined in

[types/index.ts:355](https://github.com/PolymeshAssociation/polymesh-sdk/blob/339b7503/src/types/index.ts#L355)

___

### extrinsicIdx

• **extrinsicIdx**: `BigNumber`

#### Defined in

[types/index.ts:342](https://github.com/PolymeshAssociation/polymesh-sdk/blob/339b7503/src/types/index.ts#L342)

___

### nonce

• **nonce**: ``null`` \| `BigNumber`

nonce of the transaction. Null for unsigned transactions where address is null

#### Defined in

[types/index.ts:350](https://github.com/PolymeshAssociation/polymesh-sdk/blob/339b7503/src/types/index.ts#L350)

___

### params

• **params**: `Record`<`string`, `unknown`\>[]

#### Defined in

[types/index.ts:352](https://github.com/PolymeshAssociation/polymesh-sdk/blob/339b7503/src/types/index.ts#L352)

___

### specVersionId

• **specVersionId**: `BigNumber`

#### Defined in

[types/index.ts:354](https://github.com/PolymeshAssociation/polymesh-sdk/blob/339b7503/src/types/index.ts#L354)

___

### success

• **success**: `boolean`

#### Defined in

[types/index.ts:353](https://github.com/PolymeshAssociation/polymesh-sdk/blob/339b7503/src/types/index.ts#L353)

___

### txTag

• **txTag**: [`TxTag`](../wiki/generated.types#txtag)

#### Defined in

[types/index.ts:351](https://github.com/PolymeshAssociation/polymesh-sdk/blob/339b7503/src/types/index.ts#L351)
