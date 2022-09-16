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

[types/index.ts:1466](https://github.com/PolymeshAssociation/polymesh-sdk/blob/339b7503/src/types/index.ts#L1466)

___

### failed

• **failed**: [`Instruction`](../wiki/api.entities.Instruction.Instruction)[]

Instructions that failed in their execution (can be rescheduled).
  This group supersedes the other three, so for example, a failed Instruction
  might also belong in the `affirmed` group, but it will only be included in this one

#### Defined in

[types/index.ts:1476](https://github.com/PolymeshAssociation/polymesh-sdk/blob/339b7503/src/types/index.ts#L1476)

___

### pending

• **pending**: [`Instruction`](../wiki/api.entities.Instruction.Instruction)[]

Instructions that still need to be affirmed/rejected by the Identity

#### Defined in

[types/index.ts:1470](https://github.com/PolymeshAssociation/polymesh-sdk/blob/339b7503/src/types/index.ts#L1470)
