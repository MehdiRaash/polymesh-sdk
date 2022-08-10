# Interface: CreateAssetParams

## Hierarchy

* **CreateAssetParams**

  ↳ [CreateAssetWithTickerParams](createassetwithtickerparams.md)

## Index

### Properties

* [assetType](createassetparams.md#assettype)
* [documents](createassetparams.md#optional-documents)
* [fundingRound](createassetparams.md#optional-fundinground)
* [initialSupply](createassetparams.md#optional-initialsupply)
* [isDivisible](createassetparams.md#isdivisible)
* [name](createassetparams.md#name)
* [requireInvestorUniqueness](createassetparams.md#requireinvestoruniqueness)
* [securityIdentifiers](createassetparams.md#optional-securityidentifiers)

## Properties

###  assetType

• **assetType**: *string*

*Defined in [src/api/procedures/createAsset.ts:58](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/api/procedures/createAsset.ts#L58)*

type of security that the Asset represents (i.e. Equity, Debt, Commodity, etc). Common values are included in the
  [KnownAssetType](../enums/knownassettype.md) enum, but custom values can be used as well. Custom values must be registered on-chain the first time
  they're used, requiring an additional transaction. They aren't tied to a specific Asset

___

### `Optional` documents

• **documents**? : *[AssetDocument](assetdocument.md)[]*

*Defined in [src/api/procedures/createAsset.ts:67](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/api/procedures/createAsset.ts#L67)*

___

### `Optional` fundingRound

• **fundingRound**? : *undefined | string*

*Defined in [src/api/procedures/createAsset.ts:66](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/api/procedures/createAsset.ts#L66)*

(optional) funding round in which the Asset currently is (Series A, Series B, etc)

___

### `Optional` initialSupply

• **initialSupply**? : *BigNumber*

*Defined in [src/api/procedures/createAsset.ts:48](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/api/procedures/createAsset.ts#L48)*

amount of Asset tokens that will be minted on creation (optional, default doesn't mint)

___

###  isDivisible

• **isDivisible**: *boolean*

*Defined in [src/api/procedures/createAsset.ts:52](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/api/procedures/createAsset.ts#L52)*

whether a single Asset token can be divided into decimal parts

___

###  name

• **name**: *string*

*Defined in [src/api/procedures/createAsset.ts:44](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/api/procedures/createAsset.ts#L44)*

___

###  requireInvestorUniqueness

• **requireInvestorUniqueness**: *boolean*

*Defined in [src/api/procedures/createAsset.ts:72](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/api/procedures/createAsset.ts#L72)*

whether this asset requires investors to have a Investor Uniqueness Claim in order
  to hold it. More information about Investor Uniqueness and PUIS [here](https://developers.polymesh.live/introduction/identity#polymesh-unique-identity-system-puis)

___

### `Optional` securityIdentifiers

• **securityIdentifiers**? : *[SecurityIdentifier](securityidentifier.md)[]*

*Defined in [src/api/procedures/createAsset.ts:62](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/api/procedures/createAsset.ts#L62)*

array of domestic or international alphanumeric security identifiers for the Asset (ISIN, CUSIP, etc)
