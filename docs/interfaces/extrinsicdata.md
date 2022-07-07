# Interface: ExtrinsicData

## Hierarchy

* **ExtrinsicData**

  ↳ [ExtrinsicDataWithFees](extrinsicdatawithfees.md)

## Index

### Properties

* [address](extrinsicdata.md#address)
* [blockHash](extrinsicdata.md#blockhash)
* [blockNumber](extrinsicdata.md#blocknumber)
* [extrinsicHash](extrinsicdata.md#extrinsichash)
* [extrinsicIdx](extrinsicdata.md#extrinsicidx)
* [nonce](extrinsicdata.md#nonce)
* [params](extrinsicdata.md#params)
* [specVersionId](extrinsicdata.md#specversionid)
* [success](extrinsicdata.md#success)
* [txTag](extrinsicdata.md#txtag)

## Properties

###  address

• **address**: *string | null*

*Defined in [src/types/index.ts:321](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/types/index.ts#L321)*

public key of the signer. Unsigned transactions have no signer, in which case this value is null (example: an enacted governance proposal)

___

###  blockHash

• **blockHash**: *string*

*Defined in [src/types/index.ts:315](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/types/index.ts#L315)*

___

###  blockNumber

• **blockNumber**: *BigNumber*

*Defined in [src/types/index.ts:316](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/types/index.ts#L316)*

___

###  extrinsicHash

• **extrinsicHash**: *string*

*Defined in [src/types/index.ts:330](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/types/index.ts#L330)*

___

###  extrinsicIdx

• **extrinsicIdx**: *BigNumber*

*Defined in [src/types/index.ts:317](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/types/index.ts#L317)*

___

###  nonce

• **nonce**: *BigNumber | null*

*Defined in [src/types/index.ts:325](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/types/index.ts#L325)*

nonce of the transaction. Null for unsigned transactions where address is null

___

###  params

• **params**: *Record‹string, unknown›[]*

*Defined in [src/types/index.ts:327](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/types/index.ts#L327)*

___

###  specVersionId

• **specVersionId**: *BigNumber*

*Defined in [src/types/index.ts:329](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/types/index.ts#L329)*

___

###  success

• **success**: *boolean*

*Defined in [src/types/index.ts:328](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/types/index.ts#L328)*

___

###  txTag

• **txTag**: *TxTag*

*Defined in [src/types/index.ts:326](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/types/index.ts#L326)*
