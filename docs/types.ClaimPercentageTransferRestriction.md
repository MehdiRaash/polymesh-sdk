# Interface: ClaimPercentageTransferRestriction

[types](../wiki/types).ClaimPercentageTransferRestriction

## Hierarchy

- `TransferRestrictionBase`

  ↳ **`ClaimPercentageTransferRestriction`**

## Table of contents

### Properties

- [claim](../wiki/types.ClaimPercentageTransferRestriction#claim)
- [exemptedIds](../wiki/types.ClaimPercentageTransferRestriction#exemptedids)
- [issuer](../wiki/types.ClaimPercentageTransferRestriction#issuer)
- [max](../wiki/types.ClaimPercentageTransferRestriction#max)
- [min](../wiki/types.ClaimPercentageTransferRestriction#min)

## Properties

### claim

• **claim**: [`InputStatClaim`](../wiki/types#inputstatclaim)

The type of investors this restriction applies to. e.g. Canadian investor

#### Defined in

[types/index.ts:1310](https://github.com/PolymeshAssociation/polymesh-sdk/blob/07a4c5b0/src/types/index.ts#L1310)

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

[types/index.ts:1277](https://github.com/PolymeshAssociation/polymesh-sdk/blob/07a4c5b0/src/types/index.ts#L1277)

___

### issuer

• **issuer**: [`Identity`](../wiki/api.entities.Identity.Identity)

#### Defined in

[types/index.ts:1320](https://github.com/PolymeshAssociation/polymesh-sdk/blob/07a4c5b0/src/types/index.ts#L1320)

___

### max

• **max**: `BigNumber`

The maximum percentage of the total supply that investors meeting the Claim criteria must hold

#### Defined in

[types/index.ts:1318](https://github.com/PolymeshAssociation/polymesh-sdk/blob/07a4c5b0/src/types/index.ts#L1318)

___

### min

• **min**: `BigNumber`

The minimum percentage of the total supply that investors meeting the Claim criteria must hold

#### Defined in

[types/index.ts:1314](https://github.com/PolymeshAssociation/polymesh-sdk/blob/07a4c5b0/src/types/index.ts#L1314)
