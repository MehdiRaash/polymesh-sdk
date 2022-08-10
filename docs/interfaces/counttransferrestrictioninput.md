# Interface: CountTransferRestrictionInput

## Hierarchy

* [TransferRestrictionInputBase](transferrestrictioninputbase.md)

  ↳ **CountTransferRestrictionInput**

## Index

### Properties

* [count](counttransferrestrictioninput.md#count)
* [exemptedIdentities](counttransferrestrictioninput.md#optional-exemptedidentities)

## Properties

###  count

• **count**: *BigNumber*

*Defined in [src/types/index.ts:1250](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/types/index.ts#L1250)*

limit on the amount of different (unique) investors that can hold the Asset at once

___

### `Optional` exemptedIdentities

• **exemptedIdentities**? : *(string | [Identity](../classes/identity.md)‹›)[]*

*Inherited from [TransferRestrictionInputBase](transferrestrictioninputbase.md).[exemptedIdentities](transferrestrictioninputbase.md#optional-exemptedidentities)*

*Defined in [src/types/index.ts:1232](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/types/index.ts#L1232)*

array of Identities (or DIDs) that are exempted from the Restriction
