# Interface: GroupedInstructions

## Hierarchy

* **GroupedInstructions**

## Index

### Properties

* [affirmed](groupedinstructions.md#affirmed)
* [failed](groupedinstructions.md#failed)
* [pending](groupedinstructions.md#pending)

## Properties

###  affirmed

• **affirmed**: *[Instruction](../classes/instruction.md)[]*

*Defined in [src/types/index.ts:1347](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/types/index.ts#L1347)*

Instructions that have already been affirmed by the Identity

___

###  failed

• **failed**: *[Instruction](../classes/instruction.md)[]*

*Defined in [src/types/index.ts:1357](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/types/index.ts#L1357)*

Instructions that failed in their execution (can be rescheduled).
  This group supersedes the other three, so for example, a failed Instruction
  might also belong in the `affirmed` group, but it will only be included in this one

___

###  pending

• **pending**: *[Instruction](../classes/instruction.md)[]*

*Defined in [src/types/index.ts:1351](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/types/index.ts#L1351)*

Instructions that still need to be affirmed/rejected by the Identity
