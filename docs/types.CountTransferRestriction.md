# Interface: CountTransferRestriction

[types](../wiki/types).CountTransferRestriction

## Hierarchy

- `TransferRestrictionBase`

  ↳ **`CountTransferRestriction`**

## Table of contents

### Properties

- [count](../wiki/types.CountTransferRestriction#count)
- [exemptedIds](../wiki/types.CountTransferRestriction#exemptedids)

## Properties

### count

• **count**: `BigNumber`

#### Defined in

[types/index.ts:1311](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d2/src/types/index.ts#L1311)

___

### exemptedIds

• `Optional` **exemptedIds**: `string`[]

array of Scope/Identity IDs that are exempted from the Restriction

**`Note`**

 if the Asset requires investor uniqueness, Scope IDs are used. Otherwise, we use Identity IDs. More on Scope IDs and investor uniqueness
  [here](https://developers.polymesh.network/introduction/identity#polymesh-unique-identity-system-puis) and
  [here](https://developers.polymesh.network/polymesh-docs/primitives/confidential-identity)

#### Inherited from

TransferRestrictionBase.exemptedIds

#### Defined in

[types/index.ts:1307](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d2/src/types/index.ts#L1307)
