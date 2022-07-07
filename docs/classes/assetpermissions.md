# Class: AssetPermissions

Handles all Asset Permissions (External Agents) related functionality on the Identity side

## Hierarchy

* Namespace‹[Identity](identity.md)›

  ↳ **AssetPermissions**

## Index

### Properties

* [context](assetpermissions.md#protected-context)
* [parent](assetpermissions.md#protected-parent)

### Methods

* [checkPermissions](assetpermissions.md#checkpermissions)
* [enabledAt](assetpermissions.md#enabledat)
* [enabledAtV2](assetpermissions.md#enabledatv2)
* [get](assetpermissions.md#get)
* [getGroup](assetpermissions.md#getgroup)
* [getOperationHistory](assetpermissions.md#getoperationhistory)
* [getOperationHistoryV2](assetpermissions.md#getoperationhistoryv2)
* [hasPermissions](assetpermissions.md#haspermissions)
* [setGroup](assetpermissions.md#setgroup)
* [waive](assetpermissions.md#waive)

## Properties

### `Protected` context

• **context**: *Context*

*Inherited from void*

*Defined in [src/api/entities/Namespace.ts:11](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/entities/Namespace.ts#L11)*

___

### `Protected` parent

• **parent**: *[Identity](identity.md)*

*Inherited from void*

*Defined in [src/api/entities/Namespace.ts:9](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/entities/Namespace.ts#L9)*

## Methods

###  checkPermissions

▸ **checkPermissions**(`args`: object): *Promise‹[CheckPermissionsResult](../interfaces/checkpermissionsresult.md)‹[Identity](../enums/signertype.md#identity)››*

*Defined in [src/api/entities/Identity/AssetPermissions.ts:136](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/entities/Identity/AssetPermissions.ts#L136)*

Check whether this Identity has specific transaction Permissions over an Asset

**Parameters:**

▪ **args**: *object*

Name | Type |
------ | ------ |
`asset` | [Asset](asset.md) &#124; string |
`transactions` | TxTag[] &#124; null |

**Returns:** *Promise‹[CheckPermissionsResult](../interfaces/checkpermissionsresult.md)‹[Identity](../enums/signertype.md#identity)››*

___

###  enabledAt

▸ **enabledAt**(`__namedParameters`: object): *Promise‹[EventIdentifier](../interfaces/eventidentifier.md) | null›*

*Defined in [src/api/entities/Identity/AssetPermissions.ts:340](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/entities/Identity/AssetPermissions.ts#L340)*

Retrieve the identifier data (block number, date and event index) of the event that was emitted when this Identity was enabled/added as
  an Agent with permissions over a specific Asset

**`note`** uses the middleware

**`note`** there is a possibility that the data is not ready by the time it is requested. In that case, `null` is returned

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`asset` | string &#124; [Asset](asset.md)‹› |

**Returns:** *Promise‹[EventIdentifier](../interfaces/eventidentifier.md) | null›*

___

###  enabledAtV2

▸ **enabledAtV2**(`__namedParameters`: object): *Promise‹[EventIdentifier](../interfaces/eventidentifier.md) | null›*

*Defined in [src/api/entities/Identity/AssetPermissions.ts:365](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/entities/Identity/AssetPermissions.ts#L365)*

Retrieve the identifier data (block number, date and event index) of the event that was emitted when this Identity was enabled/added as
  an Agent with permissions over a specific Asset

**`note`** uses the middlewareV2

**`note`** there is a possibility that the data is not ready by the time it is requested. In that case, `null` is returned

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`asset` | string &#124; [Asset](asset.md)‹› |

**Returns:** *Promise‹[EventIdentifier](../interfaces/eventidentifier.md) | null›*

___

###  get

▸ **get**(): *Promise‹[AssetWithGroup](../interfaces/assetwithgroup.md)[]›*

*Defined in [src/api/entities/Identity/AssetPermissions.ts:107](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/entities/Identity/AssetPermissions.ts#L107)*

Retrieve all the Assets over which this Identity has permissions, with the corresponding Permission Group

**Returns:** *Promise‹[AssetWithGroup](../interfaces/assetwithgroup.md)[]›*

___

###  getGroup

▸ **getGroup**(`__namedParameters`: object): *Promise‹[CustomPermissionGroup](custompermissiongroup.md) | [KnownPermissionGroup](knownpermissiongroup.md)›*

*Defined in [src/api/entities/Identity/AssetPermissions.ts:300](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/entities/Identity/AssetPermissions.ts#L300)*

Retrieve this Identity's Permission Group for a specific Asset

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`asset` | string &#124; [Asset](asset.md)‹› |

**Returns:** *Promise‹[CustomPermissionGroup](custompermissiongroup.md) | [KnownPermissionGroup](knownpermissiongroup.md)›*

___

###  getOperationHistory

▸ **getOperationHistory**(`opts`: object): *Promise‹[ResultSet](../interfaces/resultset.md)‹[EventIdentifier](../interfaces/eventidentifier.md)››*

*Defined in [src/api/entities/Identity/AssetPermissions.ts:415](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/entities/Identity/AssetPermissions.ts#L415)*

Retrieve all Events triggered by Operations this Identity has performed on a specific Asset

**`note`** uses the middleware

**`note`** supports pagination

**Parameters:**

▪ **opts**: *object*

Name | Type | Description |
------ | ------ | ------ |
`asset` | string &#124; [Asset](asset.md) | - |
`eventId?` | EventId | filters results by event |
`moduleId?` | ModuleId | filters results by module |
`size?` | BigNumber | page size |
`start?` | BigNumber | page offset  |

**Returns:** *Promise‹[ResultSet](../interfaces/resultset.md)‹[EventIdentifier](../interfaces/eventidentifier.md)››*

___

###  getOperationHistoryV2

▸ **getOperationHistoryV2**(`opts`: object): *Promise‹[ResultSet](../interfaces/resultset.md)‹[EventIdentifier](../interfaces/eventidentifier.md)››*

*Defined in [src/api/entities/Identity/AssetPermissions.ts:500](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/entities/Identity/AssetPermissions.ts#L500)*

Retrieve all Events triggered by Operations this Identity has performed on a specific Asset

**`note`** uses the middlewareV2

**`note`** supports pagination

**Parameters:**

▪ **opts**: *object*

Name | Type | Description |
------ | ------ | ------ |
`asset` | string &#124; [Asset](asset.md) | - |
`eventId?` | EventId | filters results by event |
`moduleId?` | ModuleId | filters results by module |
`size?` | BigNumber | page size |
`start?` | BigNumber | page offset  |

**Returns:** *Promise‹[ResultSet](../interfaces/resultset.md)‹[EventIdentifier](../interfaces/eventidentifier.md)››*

___

###  hasPermissions

▸ **hasPermissions**(`args`: object): *Promise‹boolean›*

*Defined in [src/api/entities/Identity/AssetPermissions.ts:288](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/entities/Identity/AssetPermissions.ts#L288)*

Check whether this Identity has specific transaction Permissions over an Asset

**`deprecated`** in favor of `checkPermissions`

**Parameters:**

▪ **args**: *object*

Name | Type |
------ | ------ |
`asset` | [Asset](asset.md) &#124; string |
`transactions` | TxTag[] &#124; null |

**Returns:** *Promise‹boolean›*

___

###  setGroup

▸ **setGroup**(`args`: [SetPermissionGroupParams](../interfaces/setpermissiongroupparams.md), `opts?`: [ProcedureOpts](../interfaces/procedureopts.md)): *Promise‹[TransactionQueue](transactionqueue.md)‹[CustomPermissionGroup](custompermissiongroup.md) | [KnownPermissionGroup](knownpermissiongroup.md)››*

*Defined in [src/api/entities/Identity/AssetPermissions.ts:400](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/entities/Identity/AssetPermissions.ts#L400)*

Assign this Identity to a different Permission Group for a given Asset

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call [setGroup.checkAuthorization](../interfaces/proceduremethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

**Parameters:**

Name | Type |
------ | ------ |
`args` | [SetPermissionGroupParams](../interfaces/setpermissiongroupparams.md) |
`opts?` | [ProcedureOpts](../interfaces/procedureopts.md) |

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹[CustomPermissionGroup](custompermissiongroup.md) | [KnownPermissionGroup](knownpermissiongroup.md)››*

___

###  waive

▸ **waive**(`args`: [WaivePermissionsParams](../interfaces/waivepermissionsparams.md), `opts?`: [ProcedureOpts](../interfaces/procedureopts.md)): *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

*Defined in [src/api/entities/Identity/AssetPermissions.ts:390](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/entities/Identity/AssetPermissions.ts#L390)*

Abdicate from the current Permissions Group for a given Asset. This means that this Identity will no longer have any permissions over said Asset

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call [waive.checkAuthorization](../interfaces/proceduremethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

**Parameters:**

Name | Type |
------ | ------ |
`args` | [WaivePermissionsParams](../interfaces/waivepermissionsparams.md) |
`opts?` | [ProcedureOpts](../interfaces/procedureopts.md) |

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹void››*
