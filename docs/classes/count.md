# Class: Count

Handles all Count Transfer Restriction related functionality

## Hierarchy

* TransferRestrictionBase‹[Count](../enums/transferrestrictiontype.md#count)›

  ↳ **Count**

## Index

### Properties

* [addRestriction](count.md#addrestriction)
* [context](count.md#protected-context)
* [get](count.md#get)
* [parent](count.md#protected-parent)
* [removeRestrictions](count.md#removerestrictions)
* [setRestrictions](count.md#setrestrictions)
* [type](count.md#protected-type)

## Properties

###  addRestriction

• **addRestriction**: *[ProcedureMethod](../interfaces/proceduremethod.md)‹Omit‹[AddCountTransferRestrictionParams](../globals.md#addcounttransferrestrictionparams), "type"›, BigNumber›*

*Overrides [TransferRestrictionBase](transferrestrictionbase.md).[addRestriction](transferrestrictionbase.md#addrestriction)*

*Defined in [src/api/entities/Asset/TransferRestrictions/Count.ts:27](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/entities/Asset/TransferRestrictions/Count.ts#L27)*

Add a Count Transfer Restriction to this Asset

**`note`** the result is the total amount of restrictions after the procedure has run

___

### `Protected` context

• **context**: *Context*

*Inherited from void*

*Defined in [src/api/entities/Namespace.ts:11](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/entities/Namespace.ts#L11)*

___

###  get

• **get**: *function*

*Overrides [TransferRestrictionBase](transferrestrictionbase.md).[get](transferrestrictionbase.md#get)*

*Defined in [src/api/entities/Asset/TransferRestrictions/Count.ts:56](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/entities/Asset/TransferRestrictions/Count.ts#L56)*

Retrieve all active Count Transfer Restrictions

**`note`** there is a maximum number of restrictions allowed across all types.
  The `availableSlots` property of the result represents how many more restrictions can be added
  before reaching that limit

#### Type declaration:

▸ (): *Promise‹[ActiveTransferRestrictions](../interfaces/activetransferrestrictions.md)‹[CountTransferRestriction](../interfaces/counttransferrestriction.md)››*

___

### `Protected` parent

• **parent**: *[Asset](asset.md)*

*Inherited from void*

*Defined in [src/api/entities/Namespace.ts:9](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/entities/Namespace.ts#L9)*

___

###  removeRestrictions

• **removeRestrictions**: *[NoArgsProcedureMethod](../interfaces/noargsproceduremethod.md)‹BigNumber›*

*Overrides [TransferRestrictionBase](transferrestrictionbase.md).[removeRestrictions](transferrestrictionbase.md#removerestrictions)*

*Defined in [src/api/entities/Asset/TransferRestrictions/Count.ts:47](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/entities/Asset/TransferRestrictions/Count.ts#L47)*

Removes all Count Transfer Restrictions from this Asset

**`note`** the result is the total amount of restrictions after the procedure has run

___

###  setRestrictions

• **setRestrictions**: *[ProcedureMethod](../interfaces/proceduremethod.md)‹Omit‹[SetCountTransferRestrictionsParams](../interfaces/setcounttransferrestrictionsparams.md), "type"›, BigNumber›*

*Overrides [TransferRestrictionBase](transferrestrictionbase.md).[setRestrictions](transferrestrictionbase.md#setrestrictions)*

*Defined in [src/api/entities/Asset/TransferRestrictions/Count.ts:37](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/entities/Asset/TransferRestrictions/Count.ts#L37)*

Sets all Count Transfer Restrictions on this Asset

**`note`** the result is the total amount of restrictions after the procedure has run

___

### `Protected` type

• **type**: *[Count](../enums/transferrestrictiontype.md#count)* = TransferRestrictionType.Count as const

*Overrides [TransferRestrictionBase](transferrestrictionbase.md).[type](transferrestrictionbase.md#protected-abstract-type)*

*Defined in [src/api/entities/Asset/TransferRestrictions/Count.ts:20](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/entities/Asset/TransferRestrictions/Count.ts#L20)*
