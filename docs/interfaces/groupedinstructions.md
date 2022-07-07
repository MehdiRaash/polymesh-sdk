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

*Defined in [src/types/index.ts:1359](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/types/index.ts#L1359)*

Instructions that have already been affirmed by the Identity

___

###  failed

• **failed**: *[Instruction](../classes/instruction.md)[]*

*Defined in [src/types/index.ts:1369](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/types/index.ts#L1369)*

Instructions that failed in their execution (can be rescheduled).
  This group supersedes the other three, so for example, a failed Instruction
  might also belong in the `affirmed` group, but it will only be included in this one

___

###  pending

• **pending**: *[Instruction](../classes/instruction.md)[]*

*Defined in [src/types/index.ts:1363](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/types/index.ts#L1363)*

Instructions that still need to be affirmed/rejected by the Identity
