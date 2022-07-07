# Interface: CountTransferRestriction

## Hierarchy

  ↳ [TransferRestrictionBase](../classes/transferrestrictionbase.md)

  ↳ **CountTransferRestriction**

## Index

### Properties

* [count](counttransferrestriction.md#count)
* [exemptedIds](counttransferrestriction.md#optional-exemptedids)

## Properties

###  count

• **count**: *BigNumber*

*Defined in [src/types/index.ts:1245](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/types/index.ts#L1245)*

___

### `Optional` exemptedIds

• **exemptedIds**? : *string[]*

*Inherited from [TransferRestrictionBase](../classes/transferrestrictionbase.md).[exemptedIds](../classes/transferrestrictionbase.md#optional-exemptedids)*

*Defined in [src/types/index.ts:1234](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/types/index.ts#L1234)*

array of Scope/Identity IDs that are exempted from the Restriction

**`note`** if the Asset requires investor uniqueness, Scope IDs are used. Otherwise, we use Identity IDs. More on Scope IDs and investor uniqueness
  [here](https://developers.polymesh.network/introduction/identity#polymesh-unique-identity-system-puis) and
  [here](https://developers.polymesh.network/polymesh-docs/primitives/confidential-identity)
