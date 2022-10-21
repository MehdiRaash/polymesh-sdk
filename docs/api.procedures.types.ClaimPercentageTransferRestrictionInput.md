# Interface: ClaimPercentageTransferRestrictionInput

[api/procedures/types](../wiki/api.procedures.types).ClaimPercentageTransferRestrictionInput

## Hierarchy

- `TransferRestrictionInputBase`

  ↳ **`ClaimPercentageTransferRestrictionInput`**

## Table of contents

### Properties

- [claim](../wiki/api.procedures.types.ClaimPercentageTransferRestrictionInput#claim)
- [exemptedIdentities](../wiki/api.procedures.types.ClaimPercentageTransferRestrictionInput#exemptedidentities)
- [issuer](../wiki/api.procedures.types.ClaimPercentageTransferRestrictionInput#issuer)
- [max](../wiki/api.procedures.types.ClaimPercentageTransferRestrictionInput#max)
- [min](../wiki/api.procedures.types.ClaimPercentageTransferRestrictionInput#min)

## Properties

### claim

• **claim**: [`InputStatClaim`](../wiki/types#inputstatclaim)

#### Defined in

[api/procedures/types.ts:186](https://github.com/PolymeshAssociation/polymesh-sdk/blob/16e8c2ca/src/api/procedures/types.ts#L186)

___

### exemptedIdentities

• `Optional` **exemptedIdentities**: (`string` \| [`Identity`](../wiki/api.entities.Identity.Identity))[]

array of Identities (or DIDs) that are exempted from the Restriction

#### Inherited from

TransferRestrictionInputBase.exemptedIdentities

#### Defined in

[api/procedures/types.ts:159](https://github.com/PolymeshAssociation/polymesh-sdk/blob/16e8c2ca/src/api/procedures/types.ts#L159)

___

### issuer

• **issuer**: [`Identity`](../wiki/api.entities.Identity.Identity)

#### Defined in

[api/procedures/types.ts:185](https://github.com/PolymeshAssociation/polymesh-sdk/blob/16e8c2ca/src/api/procedures/types.ts#L185)

___

### max

• **max**: `BigNumber`

#### Defined in

[api/procedures/types.ts:184](https://github.com/PolymeshAssociation/polymesh-sdk/blob/16e8c2ca/src/api/procedures/types.ts#L184)

___

### min

• **min**: `BigNumber`

#### Defined in

[api/procedures/types.ts:183](https://github.com/PolymeshAssociation/polymesh-sdk/blob/16e8c2ca/src/api/procedures/types.ts#L183)
