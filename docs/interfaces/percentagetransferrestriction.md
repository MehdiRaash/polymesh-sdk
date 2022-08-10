# Interface: PercentageTransferRestriction

## Hierarchy

  ↳ [TransferRestrictionBase](../classes/transferrestrictionbase.md)

  ↳ **PercentageTransferRestriction**

## Index

### Properties

* [exemptedIds](percentagetransferrestriction.md#optional-exemptedids)
* [percentage](percentagetransferrestriction.md#percentage)

## Properties

### `Optional` exemptedIds

• **exemptedIds**? : *string[]*

*Inherited from [TransferRestrictionBase](../classes/transferrestrictionbase.md).[exemptedIds](../classes/transferrestrictionbase.md#optional-exemptedids)*

*Defined in [src/types/index.ts:1225](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/types/index.ts#L1225)*

array of Scope/Identity IDs that are exempted from the Restriction

**`note`** if the Asset requires investor uniqueness, Scope IDs are used. Otherwise, we use Identity IDs. More on Scope IDs and investor uniqueness
  [here](https://developers.polymesh.network/introduction/identity#polymesh-unique-identity-system-puis) and
  [here](https://developers.polymesh.network/polymesh-docs/primitives/confidential-identity)

___

###  percentage

• **percentage**: *BigNumber*

*Defined in [src/types/index.ts:1243](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/types/index.ts#L1243)*

maximum percentage (0-100) of the total supply of the Asset that can be held by a single investor at once
