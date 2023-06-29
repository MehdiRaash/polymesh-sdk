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

[types/index.ts:364](https://github.com/PolymeshAssociation/polymesh-sdk/blob/3d14e829/src/types/index.ts#L364)

___

### blockHash

• **blockHash**: `string`

#### Defined in

[types/index.ts:358](https://github.com/PolymeshAssociation/polymesh-sdk/blob/3d14e829/src/types/index.ts#L358)

___

### blockNumber

• **blockNumber**: `BigNumber`

#### Defined in

[types/index.ts:359](https://github.com/PolymeshAssociation/polymesh-sdk/blob/3d14e829/src/types/index.ts#L359)

___

### extrinsicHash

• **extrinsicHash**: `string`

#### Defined in

[types/index.ts:373](https://github.com/PolymeshAssociation/polymesh-sdk/blob/3d14e829/src/types/index.ts#L373)

___

### extrinsicIdx

• **extrinsicIdx**: `BigNumber`

#### Defined in

[types/index.ts:360](https://github.com/PolymeshAssociation/polymesh-sdk/blob/3d14e829/src/types/index.ts#L360)

___

### nonce

• **nonce**: ``null`` \| `BigNumber`

nonce of the transaction. Null for unsigned transactions where address is null

#### Defined in

[types/index.ts:368](https://github.com/PolymeshAssociation/polymesh-sdk/blob/3d14e829/src/types/index.ts#L368)

___

### params

• **params**: `Record`<`string`, `unknown`\>[]

#### Defined in

[types/index.ts:370](https://github.com/PolymeshAssociation/polymesh-sdk/blob/3d14e829/src/types/index.ts#L370)

___

### specVersionId

• **specVersionId**: `BigNumber`

#### Defined in

[types/index.ts:372](https://github.com/PolymeshAssociation/polymesh-sdk/blob/3d14e829/src/types/index.ts#L372)

___

### success

• **success**: `boolean`

#### Defined in

[types/index.ts:371](https://github.com/PolymeshAssociation/polymesh-sdk/blob/3d14e829/src/types/index.ts#L371)

___

### txTag

• **txTag**: [`TxTag`](../wiki/generated.types#txtag)

#### Defined in

[types/index.ts:369](https://github.com/PolymeshAssociation/polymesh-sdk/blob/3d14e829/src/types/index.ts#L369)
