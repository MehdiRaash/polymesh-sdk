# Class: Percentage

Handles all Percentage Transfer Restriction related functionality

## Hierarchy

* TransferRestrictionBase‹[Percentage](../enums/transferrestrictiontype.md#percentage)›

  ↳ **Percentage**

## Index

### Properties

* [addRestriction](percentage.md#addrestriction)
* [context](percentage.md#protected-context)
* [get](percentage.md#get)
* [parent](percentage.md#protected-parent)
* [removeRestrictions](percentage.md#removerestrictions)
* [setRestrictions](percentage.md#setrestrictions)
* [type](percentage.md#protected-type)

## Properties

###  addRestriction

• **addRestriction**: *[ProcedureMethod](../interfaces/proceduremethod.md)‹Omit‹[AddPercentageTransferRestrictionParams](../globals.md#addpercentagetransferrestrictionparams), "type"›, BigNumber›*

*Overrides [TransferRestrictionBase](transferrestrictionbase.md).[addRestriction](transferrestrictionbase.md#addrestriction)*

*Defined in [src/api/entities/Asset/TransferRestrictions/Percentage.ts:27](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/api/entities/Asset/TransferRestrictions/Percentage.ts#L27)*

Add a Percentage Transfer Restriction to this Asset

**`note`** the result is the total amount of restrictions after the procedure has run

___

### `Protected` context

• **context**: *Context*

*Inherited from void*

*Defined in [src/api/entities/Namespace.ts:11](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/api/entities/Namespace.ts#L11)*

___

###  get

• **get**: *function*

*Overrides [TransferRestrictionBase](transferrestrictionbase.md).[get](transferrestrictionbase.md#get)*

*Defined in [src/api/entities/Asset/TransferRestrictions/Percentage.ts:56](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/api/entities/Asset/TransferRestrictions/Percentage.ts#L56)*

Retrieve all active Percentage Transfer Restrictions

**`note`** there is a maximum number of restrictions allowed across all types.
  The `availableSlots` property of the result represents how many more restrictions can be added
  before reaching that limit

#### Type declaration:

▸ (): *Promise‹[ActiveTransferRestrictions](../interfaces/activetransferrestrictions.md)‹[PercentageTransferRestriction](../interfaces/percentagetransferrestriction.md)››*

___

### `Protected` parent

• **parent**: *[Asset](asset.md)*

*Inherited from void*

*Defined in [src/api/entities/Namespace.ts:9](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/api/entities/Namespace.ts#L9)*

___

###  removeRestrictions

• **removeRestrictions**: *[NoArgsProcedureMethod](../interfaces/noargsproceduremethod.md)‹BigNumber›*

*Overrides [TransferRestrictionBase](transferrestrictionbase.md).[removeRestrictions](transferrestrictionbase.md#removerestrictions)*

*Defined in [src/api/entities/Asset/TransferRestrictions/Percentage.ts:47](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/api/entities/Asset/TransferRestrictions/Percentage.ts#L47)*

Removes all Percentage Transfer Restrictions from this Asset

**`note`** the result is the total amount of restrictions after the procedure has run

___

###  setRestrictions

• **setRestrictions**: *[ProcedureMethod](../interfaces/proceduremethod.md)‹Omit‹[SetPercentageTransferRestrictionsParams](../interfaces/setpercentagetransferrestrictionsparams.md), "type"›, BigNumber›*

*Overrides [TransferRestrictionBase](transferrestrictionbase.md).[setRestrictions](transferrestrictionbase.md#setrestrictions)*

*Defined in [src/api/entities/Asset/TransferRestrictions/Percentage.ts:37](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/api/entities/Asset/TransferRestrictions/Percentage.ts#L37)*

Sets all Percentage Transfer Restrictions on this Asset

**`note`** the result is the total amount of restrictions after the procedure has run

___

### `Protected` type

• **type**: *[Percentage](../enums/transferrestrictiontype.md#percentage)* = TransferRestrictionType.Percentage as const

*Overrides [TransferRestrictionBase](transferrestrictionbase.md).[type](transferrestrictionbase.md#protected-abstract-type)*

*Defined in [src/api/entities/Asset/TransferRestrictions/Percentage.ts:20](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/api/entities/Asset/TransferRestrictions/Percentage.ts#L20)*
