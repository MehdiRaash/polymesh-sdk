# Class: TransferRestrictionBase ‹**T**›

Base class for managing Transfer Restrictions

## Type parameters

▪ **T**: *[TransferRestrictionType](../enums/transferrestrictiontype.md)*

## Hierarchy

* Namespace‹[Asset](asset.md)›

  ↳ **TransferRestrictionBase**

  ↳ [CountTransferRestriction](../interfaces/counttransferrestriction.md)

  ↳ [PercentageTransferRestriction](../interfaces/percentagetransferrestriction.md)

## Index

### Properties

* [context](transferrestrictionbase.md#protected-context)
* [exemptedIds](transferrestrictionbase.md#optional-exemptedids)
* [parent](transferrestrictionbase.md#protected-parent)
* [type](transferrestrictionbase.md#protected-abstract-type)

### Methods

* [addRestriction](transferrestrictionbase.md#addrestriction)
* [get](transferrestrictionbase.md#get)
* [removeRestrictions](transferrestrictionbase.md#removerestrictions)
* [setRestrictions](transferrestrictionbase.md#setrestrictions)

## Properties

### `Protected` context

• **context**: *Context*

*Inherited from void*

*Defined in [src/api/entities/Namespace.ts:11](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/api/entities/Namespace.ts#L11)*

___

### `Optional` exemptedIds

• **exemptedIds**? : *string[]*

*Defined in [src/types/index.ts:1225](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/types/index.ts#L1225)*

array of Scope/Identity IDs that are exempted from the Restriction

**`note`** if the Asset requires investor uniqueness, Scope IDs are used. Otherwise, we use Identity IDs. More on Scope IDs and investor uniqueness
  [here](https://developers.polymesh.network/introduction/identity#polymesh-unique-identity-system-puis) and
  [here](https://developers.polymesh.network/polymesh-docs/primitives/confidential-identity)

___

### `Protected` parent

• **parent**: *[Asset](asset.md)*

*Inherited from void*

*Defined in [src/api/entities/Namespace.ts:9](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/api/entities/Namespace.ts#L9)*

___

### `Protected` `Abstract` type

• **type**: *T*

*Defined in [src/api/entities/Asset/TransferRestrictions/TransferRestrictionBase.ts:59](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/api/entities/Asset/TransferRestrictions/TransferRestrictionBase.ts#L59)*

## Methods

###  addRestriction

▸ **addRestriction**(`args`: [AddRestrictionParams](../globals.md#addrestrictionparams)‹T›, `opts?`: [ProcedureOpts](../interfaces/procedureopts.md)): *Promise‹[TransactionQueue](transactionqueue.md)‹BigNumber››*

*Defined in [src/api/entities/Asset/TransferRestrictions/TransferRestrictionBase.ts:126](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/api/entities/Asset/TransferRestrictions/TransferRestrictionBase.ts#L126)*

Add a Transfer Restriction of the corresponding type to this Asset

**`note`** the result is the total amount of restrictions after the procedure has run

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call [addRestriction.checkAuthorization](../interfaces/proceduremethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

**Parameters:**

Name | Type |
------ | ------ |
`args` | [AddRestrictionParams](../globals.md#addrestrictionparams)‹T› |
`opts?` | [ProcedureOpts](../interfaces/procedureopts.md) |

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹BigNumber››*

___

###  get

▸ **get**(): *Promise‹[GetReturnType](../globals.md#getreturntype)‹T››*

*Defined in [src/api/entities/Asset/TransferRestrictions/TransferRestrictionBase.ts:161](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/api/entities/Asset/TransferRestrictions/TransferRestrictionBase.ts#L161)*

Retrieve all active Transfer Restrictions of the corresponding type

**`note`** there is a maximum number of restrictions allowed across all types.
  The `availableSlots` property of the result represents how many more restrictions can be added
  before reaching that limit

**Returns:** *Promise‹[GetReturnType](../globals.md#getreturntype)‹T››*

___

###  removeRestrictions

▸ **removeRestrictions**(`opts?`: [ProcedureOpts](../interfaces/procedureopts.md)): *Promise‹[TransactionQueue](transactionqueue.md)‹BigNumber››*

*Defined in [src/api/entities/Asset/TransferRestrictions/TransferRestrictionBase.ts:150](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/api/entities/Asset/TransferRestrictions/TransferRestrictionBase.ts#L150)*

Removes all Transfer Restrictions of the corresponding type from this Asset

**`note`** the result is the total amount of restrictions after the procedure has run

**`note`** this method is of type [NoArgsProcedureMethod](../interfaces/noargsproceduremethod.md), which means you can call [removeRestrictions.checkAuthorization](../interfaces/noargsproceduremethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

**Parameters:**

Name | Type |
------ | ------ |
`opts?` | [ProcedureOpts](../interfaces/procedureopts.md) |

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹BigNumber››*

___

###  setRestrictions

▸ **setRestrictions**(`args`: [SetRestrictionsParams](../globals.md#setrestrictionsparams)‹T›, `opts?`: [ProcedureOpts](../interfaces/procedureopts.md)): *Promise‹[TransactionQueue](transactionqueue.md)‹BigNumber››*

*Defined in [src/api/entities/Asset/TransferRestrictions/TransferRestrictionBase.ts:138](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/api/entities/Asset/TransferRestrictions/TransferRestrictionBase.ts#L138)*

Sets all Transfer Restrictions of the corresponding type on this Asset

**`note`** the result is the total amount of restrictions after the procedure has run

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call [setRestrictions.checkAuthorization](../interfaces/proceduremethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

**Parameters:**

Name | Type |
------ | ------ |
`args` | [SetRestrictionsParams](../globals.md#setrestrictionsparams)‹T› |
`opts?` | [ProcedureOpts](../interfaces/procedureopts.md) |

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹BigNumber››*
