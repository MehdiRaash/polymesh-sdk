# Class: KnownPermissionGroup

Represents a pre-defined group of permissions for an Asset

## Hierarchy

  ↳ [PermissionGroup](permissiongroup.md)

  ↳ **KnownPermissionGroup**

## Index

### Properties

* [asset](knownpermissiongroup.md#asset)
* [context](knownpermissiongroup.md#protected-context)
* [type](knownpermissiongroup.md#type)
* [uuid](knownpermissiongroup.md#uuid)

### Methods

* [exists](knownpermissiongroup.md#exists)
* [getPermissions](knownpermissiongroup.md#getpermissions)
* [isEqual](knownpermissiongroup.md#isequal)
* [toHuman](knownpermissiongroup.md#tohuman)
* [generateUuid](knownpermissiongroup.md#static-generateuuid)
* [unserialize](knownpermissiongroup.md#static-unserialize)

## Properties

###  asset

• **asset**: *[Asset](asset.md)*

*Inherited from [PermissionGroup](permissiongroup.md).[asset](permissiongroup.md#asset)*

*Defined in [src/api/entities/PermissionGroup.ts:19](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/entities/PermissionGroup.ts#L19)*

Asset for which this group specifies permissions

___

### `Protected` context

• **context**: *Context*

*Inherited from [CheckpointSchedule](checkpointschedule.md).[context](checkpointschedule.md#protected-context)*

*Defined in [src/api/entities/Entity.ts:48](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/entities/Entity.ts#L48)*

___

###  type

• **type**: *[PermissionGroupType](../enums/permissiongrouptype.md)*

*Defined in [src/api/entities/KnownPermissionGroup.ts:30](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/entities/KnownPermissionGroup.ts#L30)*

___

###  uuid

• **uuid**: *string*

*Inherited from [CheckpointSchedule](checkpointschedule.md).[uuid](checkpointschedule.md#uuid)*

*Defined in [src/api/entities/Entity.ts:46](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/entities/Entity.ts#L46)*

## Methods

###  exists

▸ **exists**(): *Promise‹boolean›*

*Overrides [Entity](entity.md).[exists](entity.md#abstract-exists)*

*Defined in [src/api/entities/KnownPermissionGroup.ts:90](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/entities/KnownPermissionGroup.ts#L90)*

Determine whether this Known Permission Group exists on chain

**Returns:** *Promise‹boolean›*

___

###  getPermissions

▸ **getPermissions**(): *Promise‹[GroupPermissions](../globals.md#grouppermissions)›*

*Overrides [PermissionGroup](permissiongroup.md).[getPermissions](permissiongroup.md#abstract-getpermissions)*

*Defined in [src/api/entities/KnownPermissionGroup.ts:46](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/entities/KnownPermissionGroup.ts#L46)*

Retrieve the Permissions associated with this Permission Group

**Returns:** *Promise‹[GroupPermissions](../globals.md#grouppermissions)›*

___

###  isEqual

▸ **isEqual**(`entity`: [Entity](entity.md)‹unknown, unknown›): *boolean*

*Inherited from [CheckpointSchedule](checkpointschedule.md).[isEqual](checkpointschedule.md#isequal)*

*Defined in [src/api/entities/Entity.ts:61](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/entities/Entity.ts#L61)*

Determine whether this Entity is the same as another one

**Parameters:**

Name | Type |
------ | ------ |
`entity` | [Entity](entity.md)‹unknown, unknown› |

**Returns:** *boolean*

___

###  toHuman

▸ **toHuman**(): *HumanReadable*

*Overrides [Entity](entity.md).[toHuman](entity.md#abstract-tohuman)*

*Defined in [src/api/entities/KnownPermissionGroup.ts:97](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/entities/KnownPermissionGroup.ts#L97)*

Return the KnownPermissionGroup's static data

**Returns:** *HumanReadable*

___

### `Static` generateUuid

▸ **generateUuid**‹**Identifiers**›(`identifiers`: Identifiers): *string*

*Inherited from [CheckpointSchedule](checkpointschedule.md).[generateUuid](checkpointschedule.md#static-generateuuid)*

*Defined in [src/api/entities/Entity.ts:14](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/entities/Entity.ts#L14)*

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

*Defined in [src/api/entities/Entity.ts:23](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/entities/Entity.ts#L23)*

Unserialize a UUID into its Unique Identifiers

**Type parameters:**

▪ **Identifiers**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`serialized` | string | UUID to unserialize  |

**Returns:** *Identifiers*
