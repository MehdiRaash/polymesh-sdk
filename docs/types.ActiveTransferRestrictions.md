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

[types/index.ts:1334](https://github.com/PolymeshAssociation/polymesh-sdk/blob/07a4c5b0/src/types/index.ts#L1334)

___

### restrictions

• **restrictions**: `Restriction`[]

#### Defined in

[types/index.ts:1330](https://github.com/PolymeshAssociation/polymesh-sdk/blob/07a4c5b0/src/types/index.ts#L1330)
