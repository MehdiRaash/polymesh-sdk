# Class: Identity

Represents an Identity in the Polymesh blockchain

## Hierarchy

* [Entity](entity.md)‹UniqueIdentifiers, string›

  ↳ **Identity**

  ↳ [DefaultTrustedClaimIssuer](defaulttrustedclaimissuer.md)

## Index

### Constructors

* [constructor](identity.md#constructor)

### Properties

* [assetPermissions](identity.md#assetpermissions)
* [authorizations](identity.md#authorizations)
* [context](identity.md#protected-context)
* [did](identity.md#did)
* [portfolios](identity.md#portfolios)
* [uuid](identity.md#uuid)

### Methods

* [areSecondaryAccountsFrozen](identity.md#aresecondaryaccountsfrozen)
* [checkRoles](identity.md#checkroles)
* [exists](identity.md#exists)
* [getAssetBalance](identity.md#getassetbalance)
* [getHeldAssets](identity.md#getheldassets)
* [getHeldAssetsV2](identity.md#getheldassetsv2)
* [getInstructions](identity.md#getinstructions)
* [getPendingDistributions](identity.md#getpendingdistributions)
* [getPendingInstructions](identity.md#getpendinginstructions)
* [getPrimaryAccount](identity.md#getprimaryaccount)
* [getScopeId](identity.md#getscopeid)
* [getSecondaryAccounts](identity.md#getsecondaryaccounts)
* [getTrustingAssets](identity.md#gettrustingassets)
* [getTrustingAssetsV2](identity.md#gettrustingassetsv2)
* [getVenues](identity.md#getvenues)
* [hasRole](identity.md#hasrole)
* [hasRoles](identity.md#hasroles)
* [hasValidCdd](identity.md#hasvalidcdd)
* [isCddProvider](identity.md#iscddprovider)
* [isEqual](identity.md#isequal)
* [isGcMember](identity.md#isgcmember)
* [toHuman](identity.md#tohuman)
* [generateUuid](identity.md#static-generateuuid)
* [unserialize](identity.md#static-unserialize)

## Constructors

###  constructor

\+ **new Identity**(`identifiers`: UniqueIdentifiers, `context`: Context): *[Identity](identity.md)*

*Overrides void*

*Defined in [src/api/entities/Identity/index.ts:96](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/entities/Identity/index.ts#L96)*

Create an Identity entity

**Parameters:**

Name | Type |
------ | ------ |
`identifiers` | UniqueIdentifiers |
`context` | Context |

**Returns:** *[Identity](identity.md)*

## Properties

###  assetPermissions

• **assetPermissions**: *[AssetPermissions](assetpermissions.md)*

*Defined in [src/api/entities/Identity/index.ts:96](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/entities/Identity/index.ts#L96)*

___

###  authorizations

• **authorizations**: *[IdentityAuthorizations](identityauthorizations.md)*

*Defined in [src/api/entities/Identity/index.ts:94](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/entities/Identity/index.ts#L94)*

___

### `Protected` context

• **context**: *Context*

*Inherited from [CheckpointSchedule](checkpointschedule.md).[context](checkpointschedule.md#protected-context)*

*Defined in [src/api/entities/Entity.ts:48](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/entities/Entity.ts#L48)*

___

###  did

• **did**: *string*

*Defined in [src/api/entities/Identity/index.ts:91](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/entities/Identity/index.ts#L91)*

Identity ID as stored in the blockchain

___

###  portfolios

• **portfolios**: *[Portfolios](portfolios.md)*

*Defined in [src/api/entities/Identity/index.ts:95](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/entities/Identity/index.ts#L95)*

___

###  uuid

• **uuid**: *string*

*Inherited from [CheckpointSchedule](checkpointschedule.md).[uuid](checkpointschedule.md#uuid)*

*Defined in [src/api/entities/Entity.ts:46](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/entities/Entity.ts#L46)*

## Methods

###  areSecondaryAccountsFrozen

▸ **areSecondaryAccountsFrozen**(): *Promise‹boolean›*

*Defined in [src/api/entities/Identity/index.ts:649](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/entities/Identity/index.ts#L649)*

Check whether secondary Accounts are frozen

**`note`** can be subscribed to

**Returns:** *Promise‹boolean›*

▸ **areSecondaryAccountsFrozen**(`callback`: [SubCallback](../globals.md#subcallback)‹boolean›): *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

*Defined in [src/api/entities/Identity/index.ts:650](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/entities/Identity/index.ts#L650)*

**Parameters:**

Name | Type |
------ | ------ |
`callback` | [SubCallback](../globals.md#subcallback)‹boolean› |

**Returns:** *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

___

###  checkRoles

▸ **checkRoles**(`roles`: [Role](../globals.md#role)[]): *Promise‹[CheckRolesResult](../interfaces/checkrolesresult.md)›*

*Defined in [src/api/entities/Identity/index.ts:398](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/entities/Identity/index.ts#L398)*

Check whether this Identity possesses all specified roles

**Parameters:**

Name | Type |
------ | ------ |
`roles` | [Role](../globals.md#role)[] |

**Returns:** *Promise‹[CheckRolesResult](../interfaces/checkrolesresult.md)›*

___

###  exists

▸ **exists**(): *Promise‹boolean›*

*Overrides [Entity](entity.md).[exists](entity.md#abstract-exists)*

*Defined in [src/api/entities/Identity/index.ts:779](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/entities/Identity/index.ts#L779)*

Determine whether this Identity exists on chain

**Returns:** *Promise‹boolean›*

___

###  getAssetBalance

▸ **getAssetBalance**(`args`: object): *Promise‹BigNumber›*

*Defined in [src/api/entities/Identity/index.ts:163](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/entities/Identity/index.ts#L163)*

Retrieve the balance of a particular Asset

**`note`** can be subscribed to

**Parameters:**

▪ **args**: *object*

Name | Type |
------ | ------ |
`ticker` | string |

**Returns:** *Promise‹BigNumber›*

▸ **getAssetBalance**(`args`: object, `callback`: [SubCallback](../globals.md#subcallback)‹BigNumber›): *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

*Defined in [src/api/entities/Identity/index.ts:164](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/entities/Identity/index.ts#L164)*

**Parameters:**

▪ **args**: *object*

Name | Type |
------ | ------ |
`ticker` | string |

▪ **callback**: *[SubCallback](../globals.md#subcallback)‹BigNumber›*

**Returns:** *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

___

###  getHeldAssets

▸ **getHeldAssets**(`opts`: object): *Promise‹[ResultSet](../interfaces/resultset.md)‹[Asset](asset.md)››*

*Defined in [src/api/entities/Identity/index.ts:311](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/entities/Identity/index.ts#L311)*

Retrieve a list of all Assets which were held at one point by this Identity

**`note`** uses the middleware

**`note`** supports pagination

**Parameters:**

▪`Default value`  **opts**: *object*= { order: Order.Asc }

Name | Type |
------ | ------ |
`order?` | Order |
`size?` | BigNumber |
`start?` | BigNumber |

**Returns:** *Promise‹[ResultSet](../interfaces/resultset.md)‹[Asset](asset.md)››*

___

###  getHeldAssetsV2

▸ **getHeldAssetsV2**(`opts`: object): *Promise‹[ResultSet](../interfaces/resultset.md)‹[Asset](asset.md)››*

*Defined in [src/api/entities/Identity/index.ts:356](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/entities/Identity/index.ts#L356)*

Retrieve a list of all Assets which were held at one point by this Identity

**`note`** uses the middlewareV2

**`note`** supports pagination

**Parameters:**

▪`Default value`  **opts**: *object*= {}

Name | Type |
------ | ------ |
`order?` | AssetHoldersOrderBy |
`size?` | BigNumber |
`start?` | BigNumber |

**Returns:** *Promise‹[ResultSet](../interfaces/resultset.md)‹[Asset](asset.md)››*

___

###  getInstructions

▸ **getInstructions**(): *Promise‹[GroupedInstructions](../interfaces/groupedinstructions.md)›*

*Defined in [src/api/entities/Identity/index.ts:527](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/entities/Identity/index.ts#L527)*

Retrieve all Instructions where this Identity is a participant,
  grouped by status

**Returns:** *Promise‹[GroupedInstructions](../interfaces/groupedinstructions.md)›*

___

###  getPendingDistributions

▸ **getPendingDistributions**(): *Promise‹[DistributionWithDetails](../interfaces/distributionwithdetails.md)[]›*

*Defined in [src/api/entities/Identity/index.ts:686](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/entities/Identity/index.ts#L686)*

Retrieve every Dividend Distribution for which this Identity is eligible and hasn't been paid

**`note`** uses the middleware

**`note`** this query can be potentially **SLOW** depending on which Assets this Identity has held

**Returns:** *Promise‹[DistributionWithDetails](../interfaces/distributionwithdetails.md)[]›*

___

###  getPendingInstructions

▸ **getPendingInstructions**(): *Promise‹[Instruction](instruction.md)[]›*

*Defined in [src/api/entities/Identity/index.ts:596](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/entities/Identity/index.ts#L596)*

Retrieve all pending Instructions involving this Identity

**`deprecated`** in favor of `getInstructions`

**Returns:** *Promise‹[Instruction](instruction.md)[]›*

___

###  getPrimaryAccount

▸ **getPrimaryAccount**(): *Promise‹[PermissionedAccount](../interfaces/permissionedaccount.md)›*

*Defined in [src/api/entities/Identity/index.ts:264](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/entities/Identity/index.ts#L264)*

Retrieve the primary Account associated with the Identity

**`note`** can be subscribed to

**Returns:** *Promise‹[PermissionedAccount](../interfaces/permissionedaccount.md)›*

▸ **getPrimaryAccount**(`callback`: [SubCallback](../globals.md#subcallback)‹[PermissionedAccount](../interfaces/permissionedaccount.md)›): *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

*Defined in [src/api/entities/Identity/index.ts:265](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/entities/Identity/index.ts#L265)*

**Parameters:**

Name | Type |
------ | ------ |
`callback` | [SubCallback](../globals.md#subcallback)‹[PermissionedAccount](../interfaces/permissionedaccount.md)› |

**Returns:** *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

___

###  getScopeId

▸ **getScopeId**(`args`: object): *Promise‹string | null›*

*Defined in [src/api/entities/Identity/index.ts:505](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/entities/Identity/index.ts#L505)*

Retrieve the Scope ID associated to this Identity's Investor Uniqueness Claim for a specific Asset, or null
  if there is none

**`note`** more on Investor Uniqueness [here](https://developers.polymesh.network/introduction/identity#polymesh-unique-identity-system-puis) and
  [here](https://developers.polymesh.network/polymesh-docs/primitives/confidential-identity)

**Parameters:**

▪ **args**: *object*

Name | Type |
------ | ------ |
`asset` | [Asset](asset.md) &#124; string |

**Returns:** *Promise‹string | null›*

___

###  getSecondaryAccounts

▸ **getSecondaryAccounts**(): *Promise‹[PermissionedAccount](../interfaces/permissionedaccount.md)[]›*

*Defined in [src/api/entities/Identity/index.ts:740](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/entities/Identity/index.ts#L740)*

Get the list of secondary Accounts related to the Identity

**`note`** can be subscribed to

**Returns:** *Promise‹[PermissionedAccount](../interfaces/permissionedaccount.md)[]›*

▸ **getSecondaryAccounts**(`callback`: [SubCallback](../globals.md#subcallback)‹[PermissionedAccount](../interfaces/permissionedaccount.md)[]›): *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

*Defined in [src/api/entities/Identity/index.ts:741](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/entities/Identity/index.ts#L741)*

**Parameters:**

Name | Type |
------ | ------ |
`callback` | [SubCallback](../globals.md#subcallback)‹[PermissionedAccount](../interfaces/permissionedaccount.md)[]› |

**Returns:** *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

___

###  getTrustingAssets

▸ **getTrustingAssets**(): *Promise‹[Asset](asset.md)[]›*

*Defined in [src/api/entities/Identity/index.ts:433](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/entities/Identity/index.ts#L433)*

Get the list of Assets for which this Identity is a trusted claim issuer

**`note`** uses the middleware

**Returns:** *Promise‹[Asset](asset.md)[]›*

___

###  getTrustingAssetsV2

▸ **getTrustingAssetsV2**(): *Promise‹[Asset](asset.md)[]›*

*Defined in [src/api/entities/Identity/index.ts:450](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/entities/Identity/index.ts#L450)*

Get the list of Assets for which this Identity is a trusted claim issuer

**`note`** uses the middlewareV2

**Returns:** *Promise‹[Asset](asset.md)[]›*

___

###  getVenues

▸ **getVenues**(): *Promise‹[Venue](venue.md)[]›*

*Defined in [src/api/entities/Identity/index.ts:469](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/entities/Identity/index.ts#L469)*

Retrieve all Venues created by this Identity

**`note`** can be subscribed to

**Returns:** *Promise‹[Venue](venue.md)[]›*

▸ **getVenues**(`callback`: [SubCallback](../globals.md#subcallback)‹[Venue](venue.md)[]›): *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

*Defined in [src/api/entities/Identity/index.ts:470](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/entities/Identity/index.ts#L470)*

**Parameters:**

Name | Type |
------ | ------ |
`callback` | [SubCallback](../globals.md#subcallback)‹[Venue](venue.md)[]› |

**Returns:** *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

___

###  hasRole

▸ **hasRole**(`role`: [Role](../globals.md#role)): *Promise‹boolean›*

*Defined in [src/api/entities/Identity/index.ts:115](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/entities/Identity/index.ts#L115)*

Check whether this Identity possesses the specified Role

**Parameters:**

Name | Type |
------ | ------ |
`role` | [Role](../globals.md#role) |

**Returns:** *Promise‹boolean›*

___

###  hasRoles

▸ **hasRoles**(`roles`: [Role](../globals.md#role)[]): *Promise‹boolean›*

*Defined in [src/api/entities/Identity/index.ts:422](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/entities/Identity/index.ts#L422)*

Check whether this Identity possesses all specified roles

**`deprecated`** in favor of `checkRoles`

**Parameters:**

Name | Type |
------ | ------ |
`roles` | [Role](../globals.md#role)[] |

**Returns:** *Promise‹boolean›*

___

###  hasValidCdd

▸ **hasValidCdd**(): *Promise‹boolean›*

*Defined in [src/api/entities/Identity/index.ts:212](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/entities/Identity/index.ts#L212)*

Check whether this Identity has a valid CDD claim

**Returns:** *Promise‹boolean›*

___

###  isCddProvider

▸ **isCddProvider**(): *Promise‹boolean›*

*Defined in [src/api/entities/Identity/index.ts:245](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/entities/Identity/index.ts#L245)*

Check whether this Identity is a CDD provider

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

###  isGcMember

▸ **isGcMember**(): *Promise‹boolean›*

*Defined in [src/api/entities/Identity/index.ts:228](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/entities/Identity/index.ts#L228)*

Check whether this Identity is Governance Committee member

**Returns:** *Promise‹boolean›*

___

###  toHuman

▸ **toHuman**(): *string*

*Overrides [Entity](entity.md).[toHuman](entity.md#abstract-tohuman)*

*Defined in [src/api/entities/Identity/index.ts:792](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/entities/Identity/index.ts#L792)*

Return the Identity's DID

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
