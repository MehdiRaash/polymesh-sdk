# Class: DefaultTrustedClaimIssuer

Represents a default trusted claim issuer for a specific Asset in the Polymesh blockchain

## Hierarchy

  ↳ [Identity](identity.md)

  ↳ **DefaultTrustedClaimIssuer**

## Index

### Properties

* [asset](defaulttrustedclaimissuer.md#asset)
* [assetPermissions](defaulttrustedclaimissuer.md#assetpermissions)
* [authorizations](defaulttrustedclaimissuer.md#authorizations)
* [context](defaulttrustedclaimissuer.md#protected-context)
* [did](defaulttrustedclaimissuer.md#did)
* [portfolios](defaulttrustedclaimissuer.md#portfolios)
* [uuid](defaulttrustedclaimissuer.md#uuid)

### Methods

* [addedAt](defaulttrustedclaimissuer.md#addedat)
* [addedAtV2](defaulttrustedclaimissuer.md#addedatv2)
* [areSecondaryAccountsFrozen](defaulttrustedclaimissuer.md#aresecondaryaccountsfrozen)
* [checkRoles](defaulttrustedclaimissuer.md#checkroles)
* [exists](defaulttrustedclaimissuer.md#exists)
* [getAssetBalance](defaulttrustedclaimissuer.md#getassetbalance)
* [getHeldAssets](defaulttrustedclaimissuer.md#getheldassets)
* [getHeldAssetsV2](defaulttrustedclaimissuer.md#getheldassetsv2)
* [getInstructions](defaulttrustedclaimissuer.md#getinstructions)
* [getPendingDistributions](defaulttrustedclaimissuer.md#getpendingdistributions)
* [getPendingInstructions](defaulttrustedclaimissuer.md#getpendinginstructions)
* [getPrimaryAccount](defaulttrustedclaimissuer.md#getprimaryaccount)
* [getScopeId](defaulttrustedclaimissuer.md#getscopeid)
* [getSecondaryAccounts](defaulttrustedclaimissuer.md#getsecondaryaccounts)
* [getTrustingAssets](defaulttrustedclaimissuer.md#gettrustingassets)
* [getTrustingAssetsV2](defaulttrustedclaimissuer.md#gettrustingassetsv2)
* [getVenues](defaulttrustedclaimissuer.md#getvenues)
* [hasRole](defaulttrustedclaimissuer.md#hasrole)
* [hasRoles](defaulttrustedclaimissuer.md#hasroles)
* [hasValidCdd](defaulttrustedclaimissuer.md#hasvalidcdd)
* [isCddProvider](defaulttrustedclaimissuer.md#iscddprovider)
* [isEqual](defaulttrustedclaimissuer.md#isequal)
* [isGcMember](defaulttrustedclaimissuer.md#isgcmember)
* [toHuman](defaulttrustedclaimissuer.md#tohuman)
* [trustedFor](defaulttrustedclaimissuer.md#trustedfor)
* [generateUuid](defaulttrustedclaimissuer.md#static-generateuuid)
* [unserialize](defaulttrustedclaimissuer.md#static-unserialize)

## Properties

###  asset

• **asset**: *[Asset](asset.md)*

*Defined in [src/api/entities/DefaultTrustedClaimIssuer.ts:39](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/entities/DefaultTrustedClaimIssuer.ts#L39)*

Asset for which this Identity is a Default Trusted Claim Issuer

___

###  assetPermissions

• **assetPermissions**: *[AssetPermissions](assetpermissions.md)*

*Inherited from [Identity](identity.md).[assetPermissions](identity.md#assetpermissions)*

*Defined in [src/api/entities/Identity/index.ts:96](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/entities/Identity/index.ts#L96)*

___

###  authorizations

• **authorizations**: *[IdentityAuthorizations](identityauthorizations.md)*

*Inherited from [Identity](identity.md).[authorizations](identity.md#authorizations)*

*Defined in [src/api/entities/Identity/index.ts:94](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/entities/Identity/index.ts#L94)*

___

### `Protected` context

• **context**: *Context*

*Inherited from [CheckpointSchedule](checkpointschedule.md).[context](checkpointschedule.md#protected-context)*

*Defined in [src/api/entities/Entity.ts:48](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/entities/Entity.ts#L48)*

___

###  did

• **did**: *string*

*Inherited from [Identity](identity.md).[did](identity.md#did)*

*Defined in [src/api/entities/Identity/index.ts:91](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/entities/Identity/index.ts#L91)*

Identity ID as stored in the blockchain

___

###  portfolios

• **portfolios**: *[Portfolios](portfolios.md)*

*Inherited from [Identity](identity.md).[portfolios](identity.md#portfolios)*

*Defined in [src/api/entities/Identity/index.ts:95](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/entities/Identity/index.ts#L95)*

___

###  uuid

• **uuid**: *string*

*Inherited from [CheckpointSchedule](checkpointschedule.md).[uuid](checkpointschedule.md#uuid)*

*Defined in [src/api/entities/Entity.ts:46](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/entities/Entity.ts#L46)*

## Methods

###  addedAt

▸ **addedAt**(): *Promise‹[EventIdentifier](../interfaces/eventidentifier.md) | null›*

*Defined in [src/api/entities/DefaultTrustedClaimIssuer.ts:58](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/entities/DefaultTrustedClaimIssuer.ts#L58)*

Retrieve the identifier data (block number, date and event index) of the event that was emitted when the trusted claim issuer was added

**`note`** uses the middleware

**`note`** there is a possibility that the data is not ready by the time it is requested. In that case, `null` is returned

**Returns:** *Promise‹[EventIdentifier](../interfaces/eventidentifier.md) | null›*

___

###  addedAtV2

▸ **addedAtV2**(): *Promise‹[EventIdentifier](../interfaces/eventidentifier.md) | null›*

*Defined in [src/api/entities/DefaultTrustedClaimIssuer.ts:83](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/entities/DefaultTrustedClaimIssuer.ts#L83)*

Retrieve the identifier data (block number, date and event index) of the event that was emitted when the trusted claim issuer was added

**`note`** uses the middlewareV2

**`note`** there is a possibility that the data is not ready by the time it is requested. In that case, `null` is returned

**Returns:** *Promise‹[EventIdentifier](../interfaces/eventidentifier.md) | null›*

___

###  areSecondaryAccountsFrozen

▸ **areSecondaryAccountsFrozen**(): *Promise‹boolean›*

*Inherited from [Identity](identity.md).[areSecondaryAccountsFrozen](identity.md#aresecondaryaccountsfrozen)*

*Defined in [src/api/entities/Identity/index.ts:649](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/entities/Identity/index.ts#L649)*

Check whether secondary Accounts are frozen

**`note`** can be subscribed to

**Returns:** *Promise‹boolean›*

▸ **areSecondaryAccountsFrozen**(`callback`: [SubCallback](../globals.md#subcallback)‹boolean›): *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

*Inherited from [Identity](identity.md).[areSecondaryAccountsFrozen](identity.md#aresecondaryaccountsfrozen)*

*Defined in [src/api/entities/Identity/index.ts:650](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/entities/Identity/index.ts#L650)*

**Parameters:**

Name | Type |
------ | ------ |
`callback` | [SubCallback](../globals.md#subcallback)‹boolean› |

**Returns:** *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

___

###  checkRoles

▸ **checkRoles**(`roles`: [Role](../globals.md#role)[]): *Promise‹[CheckRolesResult](../interfaces/checkrolesresult.md)›*

*Inherited from [Identity](identity.md).[checkRoles](identity.md#checkroles)*

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

*Inherited from [Identity](identity.md).[exists](identity.md#exists)*

*Overrides [Entity](entity.md).[exists](entity.md#abstract-exists)*

*Defined in [src/api/entities/Identity/index.ts:779](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/entities/Identity/index.ts#L779)*

Determine whether this Identity exists on chain

**Returns:** *Promise‹boolean›*

___

###  getAssetBalance

▸ **getAssetBalance**(`args`: object): *Promise‹BigNumber›*

*Inherited from [Identity](identity.md).[getAssetBalance](identity.md#getassetbalance)*

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

*Inherited from [Identity](identity.md).[getAssetBalance](identity.md#getassetbalance)*

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

*Inherited from [Identity](identity.md).[getHeldAssets](identity.md#getheldassets)*

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

*Inherited from [Identity](identity.md).[getHeldAssetsV2](identity.md#getheldassetsv2)*

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

*Inherited from [Identity](identity.md).[getInstructions](identity.md#getinstructions)*

*Defined in [src/api/entities/Identity/index.ts:527](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/entities/Identity/index.ts#L527)*

Retrieve all Instructions where this Identity is a participant,
  grouped by status

**Returns:** *Promise‹[GroupedInstructions](../interfaces/groupedinstructions.md)›*

___

###  getPendingDistributions

▸ **getPendingDistributions**(): *Promise‹[DistributionWithDetails](../interfaces/distributionwithdetails.md)[]›*

*Inherited from [Identity](identity.md).[getPendingDistributions](identity.md#getpendingdistributions)*

*Defined in [src/api/entities/Identity/index.ts:686](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/entities/Identity/index.ts#L686)*

Retrieve every Dividend Distribution for which this Identity is eligible and hasn't been paid

**`note`** uses the middleware

**`note`** this query can be potentially **SLOW** depending on which Assets this Identity has held

**Returns:** *Promise‹[DistributionWithDetails](../interfaces/distributionwithdetails.md)[]›*

___

###  getPendingInstructions

▸ **getPendingInstructions**(): *Promise‹[Instruction](instruction.md)[]›*

*Inherited from [Identity](identity.md).[getPendingInstructions](identity.md#getpendinginstructions)*

*Defined in [src/api/entities/Identity/index.ts:596](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/entities/Identity/index.ts#L596)*

Retrieve all pending Instructions involving this Identity

**`deprecated`** in favor of `getInstructions`

**Returns:** *Promise‹[Instruction](instruction.md)[]›*

___

###  getPrimaryAccount

▸ **getPrimaryAccount**(): *Promise‹[PermissionedAccount](../interfaces/permissionedaccount.md)›*

*Inherited from [Identity](identity.md).[getPrimaryAccount](identity.md#getprimaryaccount)*

*Defined in [src/api/entities/Identity/index.ts:264](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/entities/Identity/index.ts#L264)*

Retrieve the primary Account associated with the Identity

**`note`** can be subscribed to

**Returns:** *Promise‹[PermissionedAccount](../interfaces/permissionedaccount.md)›*

▸ **getPrimaryAccount**(`callback`: [SubCallback](../globals.md#subcallback)‹[PermissionedAccount](../interfaces/permissionedaccount.md)›): *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

*Inherited from [Identity](identity.md).[getPrimaryAccount](identity.md#getprimaryaccount)*

*Defined in [src/api/entities/Identity/index.ts:265](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/entities/Identity/index.ts#L265)*

**Parameters:**

Name | Type |
------ | ------ |
`callback` | [SubCallback](../globals.md#subcallback)‹[PermissionedAccount](../interfaces/permissionedaccount.md)› |

**Returns:** *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

___

###  getScopeId

▸ **getScopeId**(`args`: object): *Promise‹string | null›*

*Inherited from [Identity](identity.md).[getScopeId](identity.md#getscopeid)*

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

*Inherited from [Identity](identity.md).[getSecondaryAccounts](identity.md#getsecondaryaccounts)*

*Defined in [src/api/entities/Identity/index.ts:740](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/entities/Identity/index.ts#L740)*

Get the list of secondary Accounts related to the Identity

**`note`** can be subscribed to

**Returns:** *Promise‹[PermissionedAccount](../interfaces/permissionedaccount.md)[]›*

▸ **getSecondaryAccounts**(`callback`: [SubCallback](../globals.md#subcallback)‹[PermissionedAccount](../interfaces/permissionedaccount.md)[]›): *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

*Inherited from [Identity](identity.md).[getSecondaryAccounts](identity.md#getsecondaryaccounts)*

*Defined in [src/api/entities/Identity/index.ts:741](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/entities/Identity/index.ts#L741)*

**Parameters:**

Name | Type |
------ | ------ |
`callback` | [SubCallback](../globals.md#subcallback)‹[PermissionedAccount](../interfaces/permissionedaccount.md)[]› |

**Returns:** *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

___

###  getTrustingAssets

▸ **getTrustingAssets**(): *Promise‹[Asset](asset.md)[]›*

*Inherited from [Identity](identity.md).[getTrustingAssets](identity.md#gettrustingassets)*

*Defined in [src/api/entities/Identity/index.ts:433](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/entities/Identity/index.ts#L433)*

Get the list of Assets for which this Identity is a trusted claim issuer

**`note`** uses the middleware

**Returns:** *Promise‹[Asset](asset.md)[]›*

___

###  getTrustingAssetsV2

▸ **getTrustingAssetsV2**(): *Promise‹[Asset](asset.md)[]›*

*Inherited from [Identity](identity.md).[getTrustingAssetsV2](identity.md#gettrustingassetsv2)*

*Defined in [src/api/entities/Identity/index.ts:450](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/entities/Identity/index.ts#L450)*

Get the list of Assets for which this Identity is a trusted claim issuer

**`note`** uses the middlewareV2

**Returns:** *Promise‹[Asset](asset.md)[]›*

___

###  getVenues

▸ **getVenues**(): *Promise‹[Venue](venue.md)[]›*

*Inherited from [Identity](identity.md).[getVenues](identity.md#getvenues)*

*Defined in [src/api/entities/Identity/index.ts:469](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/entities/Identity/index.ts#L469)*

Retrieve all Venues created by this Identity

**`note`** can be subscribed to

**Returns:** *Promise‹[Venue](venue.md)[]›*

▸ **getVenues**(`callback`: [SubCallback](../globals.md#subcallback)‹[Venue](venue.md)[]›): *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

*Inherited from [Identity](identity.md).[getVenues](identity.md#getvenues)*

*Defined in [src/api/entities/Identity/index.ts:470](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/entities/Identity/index.ts#L470)*

**Parameters:**

Name | Type |
------ | ------ |
`callback` | [SubCallback](../globals.md#subcallback)‹[Venue](venue.md)[]› |

**Returns:** *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

___

###  hasRole

▸ **hasRole**(`role`: [Role](../globals.md#role)): *Promise‹boolean›*

*Inherited from [Identity](identity.md).[hasRole](identity.md#hasrole)*

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

*Inherited from [Identity](identity.md).[hasRoles](identity.md#hasroles)*

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

*Inherited from [Identity](identity.md).[hasValidCdd](identity.md#hasvalidcdd)*

*Defined in [src/api/entities/Identity/index.ts:212](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/entities/Identity/index.ts#L212)*

Check whether this Identity has a valid CDD claim

**Returns:** *Promise‹boolean›*

___

###  isCddProvider

▸ **isCddProvider**(): *Promise‹boolean›*

*Inherited from [Identity](identity.md).[isCddProvider](identity.md#iscddprovider)*

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

*Inherited from [Identity](identity.md).[isGcMember](identity.md#isgcmember)*

*Defined in [src/api/entities/Identity/index.ts:228](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/entities/Identity/index.ts#L228)*

Check whether this Identity is Governance Committee member

**Returns:** *Promise‹boolean›*

___

###  toHuman

▸ **toHuman**(): *string*

*Inherited from [Identity](identity.md).[toHuman](identity.md#tohuman)*

*Overrides [Entity](entity.md).[toHuman](entity.md#abstract-tohuman)*

*Defined in [src/api/entities/Identity/index.ts:792](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/entities/Identity/index.ts#L792)*

Return the Identity's DID

**Returns:** *string*

___

###  trustedFor

▸ **trustedFor**(): *Promise‹[ClaimType](../enums/claimtype.md)[] | null›*

*Defined in [src/api/entities/DefaultTrustedClaimIssuer.ts:109](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/entities/DefaultTrustedClaimIssuer.ts#L109)*

Retrieve claim types for which this Claim Issuer is trusted. A null value means that the issuer is trusted for all claim types

**Returns:** *Promise‹[ClaimType](../enums/claimtype.md)[] | null›*

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
