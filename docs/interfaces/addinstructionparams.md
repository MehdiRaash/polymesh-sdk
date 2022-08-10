# Interface: AddInstructionParams

## Hierarchy

* **AddInstructionParams**

  ↳ [AddInstructionWithVenueIdParams](addinstructionwithvenueidparams.md)

## Index

### Properties

* [endBlock](addinstructionparams.md#optional-endblock)
* [legs](addinstructionparams.md#legs)
* [tradeDate](addinstructionparams.md#optional-tradedate)
* [valueDate](addinstructionparams.md#optional-valuedate)

## Properties

### `Optional` endBlock

• **endBlock**? : *BigNumber*

*Defined in [src/api/procedures/addInstruction.ts:70](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/api/procedures/addInstruction.ts#L70)*

block at which the Instruction will be executed automatically (optional, the Instruction will be executed when all participants have authorized it if not supplied)

___

###  legs

• **legs**: *object[]*

*Defined in [src/api/procedures/addInstruction.ts:53](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/api/procedures/addInstruction.ts#L53)*

array of Asset movements (amount, from, to, asset)

___

### `Optional` tradeDate

• **tradeDate**? : *[Date](../enums/transactionargumenttype.md#date)*

*Defined in [src/api/procedures/addInstruction.ts:62](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/api/procedures/addInstruction.ts#L62)*

date at which the trade was agreed upon (optional, for off chain trades)

___

### `Optional` valueDate

• **valueDate**? : *[Date](../enums/transactionargumenttype.md#date)*

*Defined in [src/api/procedures/addInstruction.ts:66](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/api/procedures/addInstruction.ts#L66)*

date at which the trade was executed (optional, for off chain trades)
