# Interface: ActiveTransferRestrictions<Restriction\>

[types](../wiki/types).ActiveTransferRestrictions

## Type parameters

| Name | Type |
| :------ | :------ |
| `Restriction` | extends [`CountTransferRestriction`](../wiki/types.CountTransferRestriction) \| [`PercentageTransferRestriction`](../wiki/types.PercentageTransferRestriction) \| [`ClaimCountTransferRestriction`](../wiki/types.ClaimCountTransferRestriction) \| [`ClaimPercentageTransferRestriction`](../wiki/types.ClaimPercentageTransferRestriction) |

## Table of contents

### Properties

- [availableSlots](../wiki/types.ActiveTransferRestrictions#availableslots)
- [restrictions](../wiki/types.ActiveTransferRestrictions#restrictions)

## Properties

### availableSlots

• **availableSlots**: `BigNumber`

amount of restrictions that can be added before reaching the shared limit

#### Defined in

[types/index.ts:1364](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d2/src/types/index.ts#L1364)

___

### restrictions

• **restrictions**: `Restriction`[]

#### Defined in

[types/index.ts:1360](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d2/src/types/index.ts#L1360)
