# Interface: ExtrinsicDataWithFees

## Hierarchy

* [ExtrinsicData](extrinsicdata.md)

  ↳ **ExtrinsicDataWithFees**

## Index

### Properties

* [address](extrinsicdatawithfees.md#address)
* [blockHash](extrinsicdatawithfees.md#blockhash)
* [blockNumber](extrinsicdatawithfees.md#blocknumber)
* [extrinsicHash](extrinsicdatawithfees.md#extrinsichash)
* [extrinsicIdx](extrinsicdatawithfees.md#extrinsicidx)
* [fee](extrinsicdatawithfees.md#fee)
* [nonce](extrinsicdatawithfees.md#nonce)
* [params](extrinsicdatawithfees.md#params)
* [specVersionId](extrinsicdatawithfees.md#specversionid)
* [success](extrinsicdatawithfees.md#success)
* [txTag](extrinsicdatawithfees.md#txtag)

## Properties

###  address

• **address**: *string | null*

*Inherited from [ExtrinsicData](extrinsicdata.md).[address](extrinsicdata.md#address)*

*Defined in [src/types/index.ts:321](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/types/index.ts#L321)*

public key of the signer. Unsigned transactions have no signer, in which case this value is null (example: an enacted governance proposal)

___

###  blockHash

• **blockHash**: *string*

*Inherited from [ExtrinsicData](extrinsicdata.md).[blockHash](extrinsicdata.md#blockhash)*

*Defined in [src/types/index.ts:315](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/types/index.ts#L315)*

___

###  blockNumber

• **blockNumber**: *BigNumber*

*Inherited from [ExtrinsicData](extrinsicdata.md).[blockNumber](extrinsicdata.md#blocknumber)*

*Defined in [src/types/index.ts:316](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/types/index.ts#L316)*

___

###  extrinsicHash

• **extrinsicHash**: *string*

*Inherited from [ExtrinsicData](extrinsicdata.md).[extrinsicHash](extrinsicdata.md#extrinsichash)*

*Defined in [src/types/index.ts:330](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/types/index.ts#L330)*

___

###  extrinsicIdx

• **extrinsicIdx**: *BigNumber*

*Inherited from [ExtrinsicData](extrinsicdata.md).[extrinsicIdx](extrinsicdata.md#extrinsicidx)*

*Defined in [src/types/index.ts:317](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/types/index.ts#L317)*

___

###  fee

• **fee**: *[Fees](fees.md)*

*Defined in [src/types/index.ts:334](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/types/index.ts#L334)*

___

###  nonce

• **nonce**: *BigNumber | null*

*Inherited from [ExtrinsicData](extrinsicdata.md).[nonce](extrinsicdata.md#nonce)*

*Defined in [src/types/index.ts:325](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/types/index.ts#L325)*

nonce of the transaction. Null for unsigned transactions where address is null

___

###  params

• **params**: *Record‹string, unknown›[]*

*Inherited from [ExtrinsicData](extrinsicdata.md).[params](extrinsicdata.md#params)*

*Defined in [src/types/index.ts:327](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/types/index.ts#L327)*

___

###  specVersionId

• **specVersionId**: *BigNumber*

*Inherited from [ExtrinsicData](extrinsicdata.md).[specVersionId](extrinsicdata.md#specversionid)*

*Defined in [src/types/index.ts:329](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/types/index.ts#L329)*

___

###  success

• **success**: *boolean*

*Inherited from [ExtrinsicData](extrinsicdata.md).[success](extrinsicdata.md#success)*

*Defined in [src/types/index.ts:328](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/types/index.ts#L328)*

___

###  txTag

• **txTag**: *TxTag*

*Inherited from [ExtrinsicData](extrinsicdata.md).[txTag](extrinsicdata.md#txtag)*

*Defined in [src/types/index.ts:326](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/types/index.ts#L326)*
