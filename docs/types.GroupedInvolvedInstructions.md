# Interface: GroupedInvolvedInstructions

[types](../wiki/types).GroupedInvolvedInstructions

## Table of contents

### Properties

- [custodied](../wiki/types.GroupedInvolvedInstructions#custodied)
- [owned](../wiki/types.GroupedInvolvedInstructions#owned)

## Properties

### custodied

• **custodied**: [`GroupedInstructions`](../wiki/types.GroupedInstructions)

Instructions where the Identity is the custodian of the leg portfolios

#### Defined in

[types/index.ts:1587](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d2/src/types/index.ts#L1587)

___

### owned

• **owned**: `Omit`<[`GroupedInstructions`](../wiki/types.GroupedInstructions), ``"affirmed"``\>

Instructions where the Identity is the owner of the leg portfolios

#### Defined in

[types/index.ts:1591](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d2/src/types/index.ts#L1591)
