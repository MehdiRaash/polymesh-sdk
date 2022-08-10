# Class: CustomPermissionGroup

Represents a group of custom permissions for an Asset

## Hierarchy

  ↳ [PermissionGroup](permissiongroup.md)

  ↳ **CustomPermissionGroup**

## Index

### Properties

* [asset](custompermissiongroup.md#asset)
* [context](custompermissiongroup.md#protected-context)
* [id](custompermissiongroup.md#id)
* [uuid](custompermissiongroup.md#uuid)

### Methods

* [exists](custompermissiongroup.md#exists)
* [getPermissions](custompermissiongroup.md#getpermissions)
* [isEqual](custompermissiongroup.md#isequal)
* [setPermissions](custompermissiongroup.md#setpermissions)
* [toJson](custompermissiongroup.md#tojson)
* [generateUuid](custompermissiongroup.md#static-generateuuid)
* [unserialize](custompermissiongroup.md#static-unserialize)

## Properties

###  asset

• **asset**: *[Asset](asset.md)*

*Inherited from [PermissionGroup](permissiongroup.md).[asset](permissiongroup.md#asset)*

*Defined in [src/api/entities/PermissionGroup.ts:19](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/api/entities/PermissionGroup.ts#L19)*

Asset for which this group specifies permissions

___

### `Protected` context

• **context**: *Context*

*Inherited from [CheckpointSchedule](checkpointschedule.md).[context](checkpointschedule.md#protected-context)*

*Defined in [src/api/entities/Entity.ts:48](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/api/entities/Entity.ts#L48)*

___

###  id

• **id**: *BigNumber*

*Defined in [src/api/entities/CustomPermissionGroup.ts:45](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/api/entities/CustomPermissionGroup.ts#L45)*

___

###  uuid

• **uuid**: *string*

*Inherited from [CheckpointSchedule](checkpointschedule.md).[uuid](checkpointschedule.md#uuid)*

*Defined in [src/api/entities/Entity.ts:46](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/api/entities/Entity.ts#L46)*

## Methods

###  exists

▸ **exists**(): *Promise‹boolean›*

*Overrides [Entity](entity.md).[exists](entity.md#abstract-exists)*

*Defined in [src/api/entities/CustomPermissionGroup.ts:106](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/api/entities/CustomPermissionGroup.ts#L106)*

Determine whether this Custom Permission Group exists on chain

**Returns:** *Promise‹boolean›*

___

###  getPermissions

▸ **getPermissions**(): *Promise‹[GroupPermissions](../globals.md#grouppermissions)›*

*Overrides [PermissionGroup](permissiongroup.md).[getPermissions](permissiongroup.md#abstract-getpermissions)*

*Defined in [src/api/entities/CustomPermissionGroup.ts:76](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/api/entities/CustomPermissionGroup.ts#L76)*

Retrieve the list of permissions and transaction groups associated with this Permission Group

**Returns:** *Promise‹[GroupPermissions](../globals.md#grouppermissions)›*

___

###  isEqual

▸ **isEqual**(`entity`: [Entity](entity.md)‹unknown, unknown›): *boolean*

*Inherited from [CheckpointSchedule](checkpointschedule.md).[isEqual](checkpointschedule.md#isequal)*

*Defined in [src/api/entities/Entity.ts:61](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/api/entities/Entity.ts#L61)*

Determine whether this Entity is the same as another one

**Parameters:**

Name | Type |
------ | ------ |
`entity` | [Entity](entity.md)‹unknown, unknown› |

**Returns:** *boolean*

___

###  setPermissions

▸ **setPermissions**(`args`: [SetGroupPermissionsParams](../interfaces/setgrouppermissionsparams.md), `opts?`: [ProcedureOpts](../interfaces/procedureopts.md)): *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

*Defined in [src/api/entities/CustomPermissionGroup.ts:69](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/api/entities/CustomPermissionGroup.ts#L69)*

Modify the group's permissions

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call [setPermissions.checkAuthorization](../interfaces/proceduremethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

**Parameters:**

Name | Type |
------ | ------ |
`args` | [SetGroupPermissionsParams](../interfaces/setgrouppermissionsparams.md) |
`opts?` | [ProcedureOpts](../interfaces/procedureopts.md) |

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

___

###  toJson

▸ **toJson**(): *HumanReadable*

*Overrides [Entity](entity.md).[toJson](entity.md#abstract-tojson)*

*Defined in [src/api/entities/CustomPermissionGroup.ts:124](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/api/entities/CustomPermissionGroup.ts#L124)*

Return the Group's static data

**Returns:** *HumanReadable*

___

### `Static` generateUuid

▸ **generateUuid**‹**Identifiers**›(`identifiers`: Identifiers): *string*

*Inherited from [CheckpointSchedule](checkpointschedule.md).[generateUuid](checkpointschedule.md#static-generateuuid)*

*Defined in [src/api/entities/Entity.ts:14](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/api/entities/Entity.ts#L14)*

Generate the Entity's UUID from its identifying properties

**Type parameters:**

▪ **Identifiers**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`identifiers` | Identifiers |   |

**Returns:** *string*

___

### `Static` unserialize

▸ **unserialize**‹**Identifiers**›(`serialized`: string): *Identifiers*

*Inherited from [CheckpointSchedule](checkpointschedule.md).[unserialize](checkpointschedule.md#static-unserialize)*

*Defined in [src/api/entities/Entity.ts:23](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/api/entities/Entity.ts#L23)*

Unserialize a UUID into its Unique Identifiers

**Type parameters:**

▪ **Identifiers**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`serialized` | string | UUID to unserialize  |

**Returns:** *Identifiers*
