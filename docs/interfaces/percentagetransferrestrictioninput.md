# Interface: PercentageTransferRestrictionInput

## Hierarchy

* [TransferRestrictionInputBase](transferrestrictioninputbase.md)

  ↳ **PercentageTransferRestrictionInput**

## Index

### Properties

* [exemptedIdentities](percentagetransferrestrictioninput.md#optional-exemptedidentities)
* [percentage](percentagetransferrestrictioninput.md#percentage)

## Properties

### `Optional` exemptedIdentities

• **exemptedIdentities**? : *(string | [Identity](../classes/identity.md)‹›)[]*

*Inherited from [TransferRestrictionInputBase](transferrestrictioninputbase.md).[exemptedIdentities](transferrestrictioninputbase.md#optional-exemptedidentities)*

*Defined in [src/types/index.ts:1241](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/types/index.ts#L1241)*

array of Identities (or DIDs) that are exempted from the Restriction

___

###  percentage

• **percentage**: *BigNumber*

*Defined in [src/types/index.ts:1266](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/types/index.ts#L1266)*

maximum percentage (0-100) of the total supply of the Asset that can be held by a single investor at once
