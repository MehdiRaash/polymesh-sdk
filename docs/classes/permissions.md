# Class: Permissions

Permissions a Secondary Key has over the Identity. A null value means the key has
  all permissions of that type (i.e. if `assets` is null, the key has permissions over all
  of the Identity's Assets)
Handles all Asset Permissions related functionality

## Hierarchy

* Namespace‹[Asset](asset.md)›

  ↳ **Permissions**

## Index

### Properties

* [assets](permissions.md#assets)
* [context](permissions.md#protected-context)
* [parent](permissions.md#protected-parent)
* [portfolios](permissions.md#portfolios)
* [transactionGroups](permissions.md#transactiongroups)
* [transactions](permissions.md#transactions)

### Methods

* [createGroup](permissions.md#creategroup)
* [getAgents](permissions.md#getagents)
* [getGroup](permissions.md#getgroup)
* [getGroups](permissions.md#getgroups)
* [inviteAgent](permissions.md#inviteagent)
* [removeAgent](permissions.md#removeagent)

## Properties

###  assets

• **assets**: *[SectionPermissions](../interfaces/sectionpermissions.md)‹[Asset](asset.md)› | null*

*Defined in [src/types/index.ts:917](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/types/index.ts#L917)*

Assets over which this key has permissions

___

### `Protected` context

• **context**: *Context*

*Inherited from void*

*Defined in [src/api/entities/Namespace.ts:11](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/entities/Namespace.ts#L11)*

___

### `Protected` parent

• **parent**: *[Asset](asset.md)*

*Inherited from void*

*Defined in [src/api/entities/Namespace.ts:9](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/entities/Namespace.ts#L9)*

___

###  portfolios

• **portfolios**: *[SectionPermissions](../interfaces/sectionpermissions.md)‹[DefaultPortfolio](defaultportfolio.md) | [NumberedPortfolio](numberedportfolio.md)› | null*

*Defined in [src/types/index.ts:931](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/types/index.ts#L931)*

___

###  transactionGroups

• **transactionGroups**: *[TxGroup](../enums/txgroup.md)[]*

*Defined in [src/types/index.ts:929](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/types/index.ts#L929)*

list of Transaction Groups this key can execute. Having permissions over a TxGroup
  means having permissions over every TxTag in said group. Partial group permissions are not
  covered by this value. For a full picture of transaction permissions, see the `transactions` property

NOTE: If transactions is null, ignore this value

___

###  transactions

• **transactions**: *[TransactionPermissions](../interfaces/transactionpermissions.md) | null*

*Defined in [src/types/index.ts:921](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/types/index.ts#L921)*

Transactions this key can execute

## Methods

###  createGroup

▸ **createGroup**(`args`: [CreateGroupParams](../interfaces/creategroupparams.md), `opts?`: [ProcedureOpts](../interfaces/procedureopts.md)): *Promise‹[TransactionQueue](transactionqueue.md)‹[CustomPermissionGroup](custompermissiongroup.md)››*

*Defined in [src/api/entities/Asset/Permissions.ts:70](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/entities/Asset/Permissions.ts#L70)*

Create a Permission Group for this Asset. Identities can be assigned to Permission Groups as agents. Agents assigned to a Permission Group have said group's permissions over the Asset

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call [createGroup.checkAuthorization](../interfaces/proceduremethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

**Parameters:**

Name | Type |
------ | ------ |
`args` | [CreateGroupParams](../interfaces/creategroupparams.md) |
`opts?` | [ProcedureOpts](../interfaces/procedureopts.md) |

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹[CustomPermissionGroup](custompermissiongroup.md)››*

___

###  getAgents

▸ **getAgents**(): *Promise‹[AgentWithGroup](../interfaces/agentwithgroup.md)[]›*

*Defined in [src/api/entities/Asset/Permissions.ts:171](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/entities/Asset/Permissions.ts#L171)*

Retrieve a list of agents (Identities which have permissions over the Asset) and
  their respective Permission Groups

**Returns:** *Promise‹[AgentWithGroup](../interfaces/agentwithgroup.md)[]›*

___

###  getGroup

▸ **getGroup**(`args`: object): *Promise‹[CustomPermissionGroup](custompermissiongroup.md)›*

*Defined in [src/api/entities/Asset/Permissions.ts:104](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/entities/Asset/Permissions.ts#L104)*

Retrieve a single Permission Group by its ID (or type). Passing an ID will fetch a Custom Permission Group,
  while passing a type will fetch a Known Permission Group

**`throws`** if there is no Permission Group with the passed ID

**Parameters:**

▪ **args**: *object*

Name | Type |
------ | ------ |
`id` | BigNumber |

**Returns:** *Promise‹[CustomPermissionGroup](custompermissiongroup.md)›*

▸ **getGroup**(`args`: object): *Promise‹[KnownPermissionGroup](knownpermissiongroup.md)›*

*Defined in [src/api/entities/Asset/Permissions.ts:105](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/entities/Asset/Permissions.ts#L105)*

**Parameters:**

▪ **args**: *object*

Name | Type |
------ | ------ |
`type` | [PermissionGroupType](../enums/permissiongrouptype.md) |

**Returns:** *Promise‹[KnownPermissionGroup](knownpermissiongroup.md)›*

___

###  getGroups

▸ **getGroups**(): *Promise‹[PermissionGroups](../interfaces/permissiongroups.md)›*

*Defined in [src/api/entities/Asset/Permissions.ts:137](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/entities/Asset/Permissions.ts#L137)*

Retrieve all Permission Groups of this Asset

**Returns:** *Promise‹[PermissionGroups](../interfaces/permissiongroups.md)›*

___

###  inviteAgent

▸ **inviteAgent**(`args`: [InviteExternalAgentParams](../interfaces/inviteexternalagentparams.md), `opts?`: [ProcedureOpts](../interfaces/procedureopts.md)): *Promise‹[TransactionQueue](transactionqueue.md)‹[AuthorizationRequest](authorizationrequest.md)››*

*Defined in [src/api/entities/Asset/Permissions.ts:84](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/entities/Asset/Permissions.ts#L84)*

Invite an Identity to be an agent with permissions over this Asset

**`note`** this will create an [Authorization Request](authorizationrequest.md) which has to be accepted by the `target` Identity.
  An [Account](../enums/signertype.md#account) or [Identity](../enums/roletype.md#identity) can fetch its pending Authorization Requests by calling [authorizations.getReceived](authorizations.md#getreceived).
  Also, an Account or Identity can directly fetch the details of an Authorization Request by calling [authorizations.getOne](authorizations.md#getone)

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call [inviteAgent.checkAuthorization](../interfaces/proceduremethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

**Parameters:**

Name | Type |
------ | ------ |
`args` | [InviteExternalAgentParams](../interfaces/inviteexternalagentparams.md) |
`opts?` | [ProcedureOpts](../interfaces/procedureopts.md) |

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹[AuthorizationRequest](authorizationrequest.md)››*

___

###  removeAgent

▸ **removeAgent**(`args`: [RemoveExternalAgentParams](../interfaces/removeexternalagentparams.md), `opts?`: [ProcedureOpts](../interfaces/procedureopts.md)): *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

*Defined in [src/api/entities/Asset/Permissions.ts:94](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/entities/Asset/Permissions.ts#L94)*

Revoke an agent's permissions over this Asset

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call [removeAgent.checkAuthorization](../interfaces/proceduremethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

**Parameters:**

Name | Type |
------ | ------ |
`args` | [RemoveExternalAgentParams](../interfaces/removeexternalagentparams.md) |
`opts?` | [ProcedureOpts](../interfaces/procedureopts.md) |

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹void››*
