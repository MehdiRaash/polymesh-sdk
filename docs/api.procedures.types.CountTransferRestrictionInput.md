# Interface: CountTransferRestrictionInput

[api/procedures/types](../wiki/api.procedures.types).CountTransferRestrictionInput

## Hierarchy

- `TransferRestrictionInputBase`

  ↳ **`CountTransferRestrictionInput`**

## Table of contents

### Properties

- [count](../wiki/api.procedures.types.CountTransferRestrictionInput#count)
- [exemptedIdentities](../wiki/api.procedures.types.CountTransferRestrictionInput#exemptedidentities)

## Properties

### count

• **count**: `BigNumber`

limit on the amount of different (unique) investors that can hold the Asset at once

#### Defined in

[api/procedures/types.ts:184](https://github.com/PolymeshAssociation/polymesh-sdk/blob/3d14e829/src/api/procedures/types.ts#L184)

___

### exemptedIdentities

• `Optional` **exemptedIdentities**: (`string` \| [`Identity`](../wiki/api.entities.Identity.Identity))[]

array of Identities (or DIDs) that are exempted from the Restriction

#### Inherited from

TransferRestrictionInputBase.exemptedIdentities

#### Defined in

[api/procedures/types.ts:177](https://github.com/PolymeshAssociation/polymesh-sdk/blob/3d14e829/src/api/procedures/types.ts#L177)
