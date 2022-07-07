# Interface: CreateAssetWithTickerParams

## Hierarchy

* [CreateAssetParams](createassetparams.md)

  ↳ **CreateAssetWithTickerParams**

## Index

### Properties

* [assetType](createassetwithtickerparams.md#assettype)
* [documents](createassetwithtickerparams.md#optional-documents)
* [fundingRound](createassetwithtickerparams.md#optional-fundinground)
* [initialSupply](createassetwithtickerparams.md#optional-initialsupply)
* [isDivisible](createassetwithtickerparams.md#isdivisible)
* [name](createassetwithtickerparams.md#name)
* [requireInvestorUniqueness](createassetwithtickerparams.md#requireinvestoruniqueness)
* [securityIdentifiers](createassetwithtickerparams.md#optional-securityidentifiers)
* [ticker](createassetwithtickerparams.md#ticker)

## Properties

###  assetType

• **assetType**: *string*

*Inherited from [CreateAssetParams](createassetparams.md).[assetType](createassetparams.md#assettype)*

*Defined in [src/api/procedures/createAsset.ts:58](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/procedures/createAsset.ts#L58)*

type of security that the Asset represents (i.e. Equity, Debt, Commodity, etc). Common values are included in the
  [KnownAssetType](../enums/knownassettype.md) enum, but custom values can be used as well. Custom values must be registered on-chain the first time
  they're used, requiring an additional transaction. They aren't tied to a specific Asset

___

### `Optional` documents

• **documents**? : *[AssetDocument](assetdocument.md)[]*

*Inherited from [CreateAssetParams](createassetparams.md).[documents](createassetparams.md#optional-documents)*

*Defined in [src/api/procedures/createAsset.ts:67](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/procedures/createAsset.ts#L67)*

___

### `Optional` fundingRound

• **fundingRound**? : *undefined | string*

*Inherited from [CreateAssetParams](createassetparams.md).[fundingRound](createassetparams.md#optional-fundinground)*

*Defined in [src/api/procedures/createAsset.ts:66](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/procedures/createAsset.ts#L66)*

(optional) funding round in which the Asset currently is (Series A, Series B, etc)

___

### `Optional` initialSupply

• **initialSupply**? : *BigNumber*

*Inherited from [CreateAssetParams](createassetparams.md).[initialSupply](createassetparams.md#optional-initialsupply)*

*Defined in [src/api/procedures/createAsset.ts:48](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/procedures/createAsset.ts#L48)*

amount of Asset tokens that will be minted on creation (optional, default doesn't mint)

___

###  isDivisible

• **isDivisible**: *boolean*

*Inherited from [CreateAssetParams](createassetparams.md).[isDivisible](createassetparams.md#isdivisible)*

*Defined in [src/api/procedures/createAsset.ts:52](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/procedures/createAsset.ts#L52)*

whether a single Asset token can be divided into decimal parts

___

###  name

• **name**: *string*

*Inherited from [CreateAssetParams](createassetparams.md).[name](createassetparams.md#name)*

*Defined in [src/api/procedures/createAsset.ts:44](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/procedures/createAsset.ts#L44)*

___

###  requireInvestorUniqueness

• **requireInvestorUniqueness**: *boolean*

*Inherited from [CreateAssetParams](createassetparams.md).[requireInvestorUniqueness](createassetparams.md#requireinvestoruniqueness)*

*Defined in [src/api/procedures/createAsset.ts:72](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/procedures/createAsset.ts#L72)*

whether this asset requires investors to have a Investor Uniqueness Claim in order
  to hold it. More information about Investor Uniqueness and PUIS [here](https://developers.polymesh.live/introduction/identity#polymesh-unique-identity-system-puis)

___

### `Optional` securityIdentifiers

• **securityIdentifiers**? : *[SecurityIdentifier](securityidentifier.md)[]*

*Inherited from [CreateAssetParams](createassetparams.md).[securityIdentifiers](createassetparams.md#optional-securityidentifiers)*

*Defined in [src/api/procedures/createAsset.ts:62](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/procedures/createAsset.ts#L62)*

array of domestic or international alphanumeric security identifiers for the Asset (ISIN, CUSIP, etc)

___

###  ticker

• **ticker**: *string*

*Defined in [src/api/procedures/createAsset.ts:76](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/procedures/createAsset.ts#L76)*
