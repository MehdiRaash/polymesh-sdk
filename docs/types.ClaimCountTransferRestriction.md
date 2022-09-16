# Interface: ClaimCountTransferRestriction

[types](../wiki/types).ClaimCountTransferRestriction

## Hierarchy

- `TransferRestrictionBase`

  ↳ **`ClaimCountTransferRestriction`**

## Table of contents

### Properties

- [claim](../wiki/types.ClaimCountTransferRestriction#claim)
- [exemptedIds](../wiki/types.ClaimCountTransferRestriction#exemptedids)
- [issuer](../wiki/types.ClaimCountTransferRestriction#issuer)
- [max](../wiki/types.ClaimCountTransferRestriction#max)
- [min](../wiki/types.ClaimCountTransferRestriction#min)

## Properties

### claim

• **claim**: [`InputStatClaim`](../wiki/types#inputstatclaim)

The type of investors this restriction applies to. e.g. non-accredited

#### Defined in

[types/index.ts:1271](https://github.com/PolymeshAssociation/polymesh-sdk/blob/339b7503/src/types/index.ts#L1271)

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

[types/index.ts:1254](https://github.com/PolymeshAssociation/polymesh-sdk/blob/339b7503/src/types/index.ts#L1254)

___

### issuer

• **issuer**: [`Identity`](../wiki/api.entities.Identity.Identity)

#### Defined in

[types/index.ts:1281](https://github.com/PolymeshAssociation/polymesh-sdk/blob/339b7503/src/types/index.ts#L1281)

___

### max

• `Optional` **max**: `BigNumber`

The maximum amount of investors that must meet the Claim criteria

#### Defined in

[types/index.ts:1279](https://github.com/PolymeshAssociation/polymesh-sdk/blob/339b7503/src/types/index.ts#L1279)

___

### min

• **min**: `BigNumber`

The minimum amount of investors the must meet the Claim criteria

#### Defined in

[types/index.ts:1275](https://github.com/PolymeshAssociation/polymesh-sdk/blob/339b7503/src/types/index.ts#L1275)
