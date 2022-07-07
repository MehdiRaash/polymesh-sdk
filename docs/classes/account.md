# Class: Account

Represents an Account in the Polymesh blockchain. Accounts can hold POLYX, control Identities and vote on proposals (among other things)

## Hierarchy

* [Entity](entity.md)‹UniqueIdentifiers, string›

  ↳ **Account**

## Index

### Properties

* [address](account.md#address)
* [authorizations](account.md#authorizations)
* [context](account.md#protected-context)
* [key](account.md#key)
* [uuid](account.md#uuid)

### Methods

* [checkPermissions](account.md#checkpermissions)
* [exists](account.md#exists)
* [getBalance](account.md#getbalance)
* [getIdentity](account.md#getidentity)
* [getPermissions](account.md#getpermissions)
* [getSubsidy](account.md#getsubsidy)
* [getTransactionHistory](account.md#gettransactionhistory)
* [getTransactionHistoryV2](account.md#gettransactionhistoryv2)
* [hasPermissions](account.md#haspermissions)
* [isEqual](account.md#isequal)
* [isFrozen](account.md#isfrozen)
* [toHuman](account.md#tohuman)
* [generateUuid](account.md#static-generateuuid)
* [unserialize](account.md#static-unserialize)

## Properties

###  address

• **address**: *string*

*Defined in [src/api/entities/Account.ts:255](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/entities/Account.ts#L255)*

Polymesh-specific address of the Account. Serves as an identifier

___

###  authorizations

• **authorizations**: *[Authorizations](authorizations.md)‹[Account](account.md)›*

*Defined in [src/api/entities/Account.ts:264](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/entities/Account.ts#L264)*

___

### `Protected` context

• **context**: *Context*

*Inherited from [CheckpointSchedule](checkpointschedule.md).[context](checkpointschedule.md#protected-context)*

*Defined in [src/api/entities/Entity.ts:48](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/entities/Entity.ts#L48)*

___

###  key

• **key**: *string*

*Defined in [src/api/entities/Account.ts:261](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/entities/Account.ts#L261)*

A hex representation of the cryptographic public key of the Account. This is consistent across
Substrate chains, while the address depends on the chain as well.

___

###  uuid

• **uuid**: *string*

*Inherited from [CheckpointSchedule](checkpointschedule.md).[uuid](checkpointschedule.md#uuid)*

*Defined in [src/api/entities/Entity.ts:46](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/entities/Entity.ts#L46)*

## Methods

###  checkPermissions

▸ **checkPermissions**(`permissions`: [SimplePermissions](../interfaces/simplepermissions.md)): *Promise‹[CheckPermissionsResult](../interfaces/checkpermissionsresult.md)‹[Account](../enums/signertype.md#account)››*

*Defined in [src/api/entities/Account.ts:634](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/entities/Account.ts#L634)*

Check if this Account possesses certain Permissions to act on behalf of its corresponding Identity

**Parameters:**

Name | Type |
------ | ------ |
`permissions` | [SimplePermissions](../interfaces/simplepermissions.md) |

**Returns:** *Promise‹[CheckPermissionsResult](../interfaces/checkpermissionsresult.md)‹[Account](../enums/signertype.md#account)››*

which permissions the Account is missing (if any) and the final result

___

###  exists

▸ **exists**(): *Promise‹boolean›*

*Overrides [Entity](entity.md).[exists](entity.md#abstract-exists)*

*Defined in [src/api/entities/Account.ts:700](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/entities/Account.ts#L700)*

Determine whether this Account exists on chain

**Returns:** *Promise‹boolean›*

___

###  getBalance

▸ **getBalance**(): *Promise‹[AccountBalance](../globals.md#accountbalance)›*

*Defined in [src/api/entities/Account.ts:286](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/entities/Account.ts#L286)*

Get the free/locked POLYX balance of the Account

**`note`** can be subscribed to

**Returns:** *Promise‹[AccountBalance](../globals.md#accountbalance)›*

▸ **getBalance**(`callback`: [SubCallback](../globals.md#subcallback)‹[AccountBalance](../globals.md#accountbalance)›): *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

*Defined in [src/api/entities/Account.ts:287](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/entities/Account.ts#L287)*

**Parameters:**

Name | Type |
------ | ------ |
`callback` | [SubCallback](../globals.md#subcallback)‹[AccountBalance](../globals.md#accountbalance)› |

**Returns:** *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

___

###  getIdentity

▸ **getIdentity**(): *Promise‹[Identity](identity.md) | null›*

*Defined in [src/api/entities/Account.ts:327](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/entities/Account.ts#L327)*

Retrieve the Identity associated to this Account (null if there is none)

**Returns:** *Promise‹[Identity](identity.md) | null›*

___

###  getPermissions

▸ **getPermissions**(): *Promise‹[Permissions](permissions.md)›*

*Defined in [src/api/entities/Account.ts:593](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/entities/Account.ts#L593)*

Retrieve the Permissions this Account has as a Permissioned Account for its corresponding Identity

**`throws`** if there is no Identity associated with the Account

**Returns:** *Promise‹[Permissions](permissions.md)›*

___

###  getSubsidy

▸ **getSubsidy**(): *Promise‹[SubsidyWithAllowance](../interfaces/subsidywithallowance.md) | null›*

*Defined in [src/api/entities/Account.ts:308](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/entities/Account.ts#L308)*

Get the subsidized balance of this Account and the subsidizer Account. If
  this Account isn't being subsidized, return null

**`note`** can be subscribed to

**Returns:** *Promise‹[SubsidyWithAllowance](../interfaces/subsidywithallowance.md) | null›*

▸ **getSubsidy**(`callback`: [SubCallback](../globals.md#subcallback)‹[SubsidyWithAllowance](../interfaces/subsidywithallowance.md) | null›): *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

*Defined in [src/api/entities/Account.ts:309](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/entities/Account.ts#L309)*

**Parameters:**

Name | Type |
------ | ------ |
`callback` | [SubCallback](../globals.md#subcallback)‹[SubsidyWithAllowance](../interfaces/subsidywithallowance.md) &#124; null› |

**Returns:** *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

___

###  getTransactionHistory

▸ **getTransactionHistory**(`filters`: object): *Promise‹[ResultSet](../interfaces/resultset.md)‹[ExtrinsicData](../interfaces/extrinsicdata.md)››*

*Defined in [src/api/entities/Account.ts:361](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/entities/Account.ts#L361)*

Retrieve a list of transactions signed by this Account. Can be filtered using parameters

**`note`** if both `blockNumber` and `blockHash` are passed, only `blockNumber` is taken into account

**`note`** uses the middleware

**Parameters:**

▪`Default value`  **filters**: *object*= {}

Name | Type | Description |
------ | ------ | ------ |
`blockHash?` | undefined &#124; string | - |
`blockNumber?` | BigNumber | - |
`orderBy?` | TransactionOrderByInput | - |
`size?` | BigNumber | page size |
`start?` | BigNumber | page offset  |
`success?` | undefined &#124; false &#124; true | whether the transaction was successful or not |
`tag?` | TxTag | tag associated with the transaction |

**Returns:** *Promise‹[ResultSet](../interfaces/resultset.md)‹[ExtrinsicData](../interfaces/extrinsicdata.md)››*

___

###  getTransactionHistoryV2

▸ **getTransactionHistoryV2**(`filters`: object): *Promise‹[ResultSet](../interfaces/resultset.md)‹[ExtrinsicData](../interfaces/extrinsicdata.md)››*

*Defined in [src/api/entities/Account.ts:469](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/entities/Account.ts#L469)*

Retrieve a list of transactions signed by this Account. Can be filtered using parameters

**`note`** if both `blockNumber` and `blockHash` are passed, only `blockNumber` is taken into account

**`note`** uses the middlewareV2

**Parameters:**

▪`Default value`  **filters**: *object*= {}

Name | Type | Description |
------ | ------ | ------ |
`blockHash?` | undefined &#124; string | - |
`blockNumber?` | BigNumber | - |
`orderBy?` | ExtrinsicsOrderBy | - |
`size?` | BigNumber | page size |
`start?` | BigNumber | page offset  |
`success?` | undefined &#124; false &#124; true | whether the transaction was successful or not |
`tag?` | TxTag | tag associated with the transaction |

**Returns:** *Promise‹[ResultSet](../interfaces/resultset.md)‹[ExtrinsicData](../interfaces/extrinsicdata.md)››*

___

###  hasPermissions

▸ **hasPermissions**(`permissions`: [SimplePermissions](../interfaces/simplepermissions.md)): *Promise‹boolean›*

*Defined in [src/api/entities/Account.ts:691](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/entities/Account.ts#L691)*

Check if this Account possesses certain Permissions to act on behalf of its corresponding Identity

**`deprecated`** in favor of `checkPermissions`

**Parameters:**

Name | Type |
------ | ------ |
`permissions` | [SimplePermissions](../interfaces/simplepermissions.md) |

**Returns:** *Promise‹boolean›*

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

###  isFrozen

▸ **isFrozen**(): *Promise‹boolean›*

*Defined in [src/api/entities/Account.ts:572](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/entities/Account.ts#L572)*

Check whether this Account is frozen. If frozen, it cannot perform any action until the primary Account of the Identity unfreezes all secondary Accounts

**Returns:** *Promise‹boolean›*

___

###  toHuman

▸ **toHuman**(): *string*

*Overrides [Entity](entity.md).[toHuman](entity.md#abstract-tohuman)*

*Defined in [src/api/entities/Account.ts:707](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/entities/Account.ts#L707)*

Return the Account's address

**Returns:** *string*

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
