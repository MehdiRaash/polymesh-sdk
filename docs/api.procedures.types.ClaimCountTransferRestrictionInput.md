# Interface: ClaimCountTransferRestrictionInput

[api/procedures/types](../wiki/api.procedures.types).ClaimCountTransferRestrictionInput

## Hierarchy

- `TransferRestrictionInputBase`

  ↳ **`ClaimCountTransferRestrictionInput`**

## Table of contents

### Properties

- [claim](../wiki/api.procedures.types.ClaimCountTransferRestrictionInput#claim)
- [exemptedIdentities](../wiki/api.procedures.types.ClaimCountTransferRestrictionInput#exemptedidentities)
- [issuer](../wiki/api.procedures.types.ClaimCountTransferRestrictionInput#issuer)
- [max](../wiki/api.procedures.types.ClaimCountTransferRestrictionInput#max)
- [min](../wiki/api.procedures.types.ClaimCountTransferRestrictionInput#min)

## Properties

### claim

• **claim**: [`InputStatClaim`](../wiki/types#inputstatclaim)

#### Defined in

[api/procedures/types.ts:198](https://github.com/PolymeshAssociation/polymesh-sdk/blob/3d14e829/src/api/procedures/types.ts#L198)

___

### exemptedIdentities

• `Optional` **exemptedIdentities**: (`string` \| [`Identity`](../wiki/api.entities.Identity.Identity))[]

array of Identities (or DIDs) that are exempted from the Restriction

#### Inherited from

TransferRestrictionInputBase.exemptedIdentities

#### Defined in

[api/procedures/types.ts:177](https://github.com/PolymeshAssociation/polymesh-sdk/blob/3d14e829/src/api/procedures/types.ts#L177)

___

### issuer

• **issuer**: [`Identity`](../wiki/api.entities.Identity.Identity)

#### Defined in

[api/procedures/types.ts:197](https://github.com/PolymeshAssociation/polymesh-sdk/blob/3d14e829/src/api/procedures/types.ts#L197)

___

### max

• `Optional` **max**: `BigNumber`

#### Defined in

[api/procedures/types.ts:196](https://github.com/PolymeshAssociation/polymesh-sdk/blob/3d14e829/src/api/procedures/types.ts#L196)

___

### min

• **min**: `BigNumber`

#### Defined in

[api/procedures/types.ts:195](https://github.com/PolymeshAssociation/polymesh-sdk/blob/3d14e829/src/api/procedures/types.ts#L195)
