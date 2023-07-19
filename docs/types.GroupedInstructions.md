# Interface: GroupedInstructions

[types](../wiki/types).GroupedInstructions

## Table of contents

### Properties

- [affirmed](../wiki/types.GroupedInstructions#affirmed)
- [failed](../wiki/types.GroupedInstructions#failed)
- [pending](../wiki/types.GroupedInstructions#pending)

## Properties

### affirmed

• **affirmed**: [`Instruction`](../wiki/api.entities.Instruction.Instruction)[]

Instructions that have already been affirmed by the Identity

#### Defined in

[types/index.ts:1563](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d2/src/types/index.ts#L1563)

___

### failed

• **failed**: [`Instruction`](../wiki/api.entities.Instruction.Instruction)[]

Instructions that failed in their execution (can be rescheduled).
  This group supersedes the other three, so for example, a failed Instruction
  might also belong in the `affirmed` group, but it will only be included in this one

#### Defined in

[types/index.ts:1573](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d2/src/types/index.ts#L1573)

___

### pending

• **pending**: [`Instruction`](../wiki/api.entities.Instruction.Instruction)[]

Instructions that still need to be affirmed/rejected by the Identity

#### Defined in

[types/index.ts:1567](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d2/src/types/index.ts#L1567)
