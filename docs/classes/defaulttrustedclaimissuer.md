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
* [areSecondaryAccountsFrozen](defaulttrustedclaimissuer.md#aresecondaryaccountsfrozen)
* [checkRoles](defaulttrustedclaimissuer.md#checkroles)
* [exists](defaulttrustedclaimissuer.md#exists)
* [getAssetBalance](defaulttrustedclaimissuer.md#getassetbalance)
* [getHeldAssets](defaulttrustedclaimissuer.md#getheldassets)
* [getInstructions](defaulttrustedclaimissuer.md#getinstructions)
* [getPendingDistributions](defaulttrustedclaimissuer.md#getpendingdistributions)
* [getPendingInstructions](defaulttrustedclaimissuer.md#getpendinginstructions)
* [getPrimaryAccount](defaulttrustedclaimissuer.md#getprimaryaccount)
* [getScopeId](defaulttrustedclaimissuer.md#getscopeid)
* [getSecondaryAccounts](defaulttrustedclaimissuer.md#getsecondaryaccounts)
* [getTrustingAssets](defaulttrustedclaimissuer.md#gettrustingassets)
* [getVenues](defaulttrustedclaimissuer.md#getvenues)
* [hasRole](defaulttrustedclaimissuer.md#hasrole)
* [hasRoles](defaulttrustedclaimissuer.md#hasroles)
* [hasValidCdd](defaulttrustedclaimissuer.md#hasvalidcdd)
* [isCddProvider](defaulttrustedclaimissuer.md#iscddprovider)
* [isEqual](defaulttrustedclaimissuer.md#isequal)
* [isGcMember](defaulttrustedclaimissuer.md#isgcmember)
* [toJson](defaulttrustedclaimissuer.md#tojson)
* [trustedFor](defaulttrustedclaimissuer.md#trustedfor)
* [generateUuid](defaulttrustedclaimissuer.md#static-generateuuid)
* [unserialize](defaulttrustedclaimissuer.md#static-unserialize)

## Properties

###  asset

• **asset**: *[Asset](asset.md)*

*Defined in [src/api/entities/DefaultTrustedClaimIssuer.ts:36](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/api/entities/DefaultTrustedClaimIssuer.ts#L36)*

Asset for which this Identity is a Default Trusted Claim Issuer

___

###  assetPermissions

• **assetPermissions**: *[AssetPermissions](assetpermissions.md)*

*Inherited from [Identity](identity.md).[assetPermissions](identity.md#assetpermissions)*

*Defined in [src/api/entities/Identity/index.ts:94](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/api/entities/Identity/index.ts#L94)*

___

###  authorizations

• **authorizations**: *[IdentityAuthorizations](identityauthorizations.md)*

*Inherited from [Identity](identity.md).[authorizations](identity.md#authorizations)*

*Defined in [src/api/entities/Identity/index.ts:92](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/api/entities/Identity/index.ts#L92)*

___

### `Protected` context

• **context**: *Context*

*Inherited from [CheckpointSchedule](checkpointschedule.md).[context](checkpointschedule.md#protected-context)*

*Defined in [src/api/entities/Entity.ts:48](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/api/entities/Entity.ts#L48)*

___

###  did

• **did**: *string*

*Inherited from [Identity](identity.md).[did](identity.md#did)*

*Defined in [src/api/entities/Identity/index.ts:89](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/api/entities/Identity/index.ts#L89)*

Identity ID as stored in the blockchain

___

###  portfolios

• **portfolios**: *[Portfolios](portfolios.md)*

*Inherited from [Identity](identity.md).[portfolios](identity.md#portfolios)*

*Defined in [src/api/entities/Identity/index.ts:93](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/api/entities/Identity/index.ts#L93)*

___

###  uuid

• **uuid**: *string*

*Inherited from [CheckpointSchedule](checkpointschedule.md).[uuid](checkpointschedule.md#uuid)*

*Defined in [src/api/entities/Entity.ts:46](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/api/entities/Entity.ts#L46)*

## Methods

###  addedAt

▸ **addedAt**(): *Promise‹[EventIdentifier](../interfaces/eventidentifier.md) | null›*

*Defined in [src/api/entities/DefaultTrustedClaimIssuer.ts:55](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/api/entities/DefaultTrustedClaimIssuer.ts#L55)*

Retrieve the identifier data (block number, date and event index) of the event that was emitted when the trusted claim issuer was added

**`note`** uses the middleware

**`note`** there is a possibility that the data is not ready by the time it is requested. In that case, `null` is returned

**Returns:** *Promise‹[EventIdentifier](../interfaces/eventidentifier.md) | null›*

___

###  areSecondaryAccountsFrozen

▸ **areSecondaryAccountsFrozen**(): *Promise‹boolean›*

*Inherited from [Identity](identity.md).[areSecondaryAccountsFrozen](identity.md#aresecondaryaccountsfrozen)*

*Defined in [src/api/entities/Identity/index.ts:583](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/api/entities/Identity/index.ts#L583)*

Check whether secondary Accounts are frozen

**`note`** can be subscribed to

**Returns:** *Promise‹boolean›*

▸ **areSecondaryAccountsFrozen**(`callback`: [SubCallback](../globals.md#subcallback)‹boolean›): *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

*Inherited from [Identity](identity.md).[areSecondaryAccountsFrozen](identity.md#aresecondaryaccountsfrozen)*

*Defined in [src/api/entities/Identity/index.ts:584](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/api/entities/Identity/index.ts#L584)*

**Parameters:**

Name | Type |
------ | ------ |
`callback` | [SubCallback](../globals.md#subcallback)‹boolean› |

**Returns:** *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

___

###  checkRoles

▸ **checkRoles**(`roles`: [Role](../globals.md#role)[]): *Promise‹[CheckRolesResult](../interfaces/checkrolesresult.md)›*

*Inherited from [Identity](identity.md).[checkRoles](identity.md#checkroles)*

*Defined in [src/api/entities/Identity/index.ts:351](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/api/entities/Identity/index.ts#L351)*

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

*Defined in [src/api/entities/Identity/index.ts:713](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/api/entities/Identity/index.ts#L713)*

Determine whether this Identity exists on chain

**Returns:** *Promise‹boolean›*

___

###  getAssetBalance

▸ **getAssetBalance**(`args`: object): *Promise‹BigNumber›*

*Inherited from [Identity](identity.md).[getAssetBalance](identity.md#getassetbalance)*

*Defined in [src/api/entities/Identity/index.ts:161](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/api/entities/Identity/index.ts#L161)*

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

*Defined in [src/api/entities/Identity/index.ts:162](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/api/entities/Identity/index.ts#L162)*

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

*Defined in [src/api/entities/Identity/index.ts:309](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/api/entities/Identity/index.ts#L309)*

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

###  getInstructions

▸ **getInstructions**(): *Promise‹[GroupedInstructions](../interfaces/groupedinstructions.md)›*

*Inherited from [Identity](identity.md).[getInstructions](identity.md#getinstructions)*

*Defined in [src/api/entities/Identity/index.ts:461](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/api/entities/Identity/index.ts#L461)*

Retrieve all Instructions where this Identity is a participant,
  grouped by status

**Returns:** *Promise‹[GroupedInstructions](../interfaces/groupedinstructions.md)›*

___

###  getPendingDistributions

▸ **getPendingDistributions**(): *Promise‹[DistributionWithDetails](../interfaces/distributionwithdetails.md)[]›*

*Inherited from [Identity](identity.md).[getPendingDistributions](identity.md#getpendingdistributions)*

*Defined in [src/api/entities/Identity/index.ts:620](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/api/entities/Identity/index.ts#L620)*

Retrieve every Dividend Distribution for which this Identity is eligible and hasn't been paid

**`note`** uses the middleware

**`note`** this query can be potentially **SLOW** depending on which Assets this Identity has held

**Returns:** *Promise‹[DistributionWithDetails](../interfaces/distributionwithdetails.md)[]›*

___

###  getPendingInstructions

▸ **getPendingInstructions**(): *Promise‹[Instruction](instruction.md)[]›*

*Inherited from [Identity](identity.md).[getPendingInstructions](identity.md#getpendinginstructions)*

*Defined in [src/api/entities/Identity/index.ts:530](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/api/entities/Identity/index.ts#L530)*

Retrieve all pending Instructions involving this Identity

**`deprecated`** in favor of `getInstructions`

**Returns:** *Promise‹[Instruction](instruction.md)[]›*

___

###  getPrimaryAccount

▸ **getPrimaryAccount**(): *Promise‹[PermissionedAccount](../interfaces/permissionedaccount.md)›*

*Inherited from [Identity](identity.md).[getPrimaryAccount](identity.md#getprimaryaccount)*

*Defined in [src/api/entities/Identity/index.ts:262](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/api/entities/Identity/index.ts#L262)*

Retrieve the primary Account associated with the Identity

**`note`** can be subscribed to

**Returns:** *Promise‹[PermissionedAccount](../interfaces/permissionedaccount.md)›*

▸ **getPrimaryAccount**(`callback`: [SubCallback](../globals.md#subcallback)‹[PermissionedAccount](../interfaces/permissionedaccount.md)›): *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

*Inherited from [Identity](identity.md).[getPrimaryAccount](identity.md#getprimaryaccount)*

*Defined in [src/api/entities/Identity/index.ts:263](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/api/entities/Identity/index.ts#L263)*

**Parameters:**

Name | Type |
------ | ------ |
`callback` | [SubCallback](../globals.md#subcallback)‹[PermissionedAccount](../interfaces/permissionedaccount.md)› |

**Returns:** *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

___

###  getScopeId

▸ **getScopeId**(`args`: object): *Promise‹string | null›*

*Inherited from [Identity](identity.md).[getScopeId](identity.md#getscopeid)*

*Defined in [src/api/entities/Identity/index.ts:439](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/api/entities/Identity/index.ts#L439)*

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

*Defined in [src/api/entities/Identity/index.ts:674](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/api/entities/Identity/index.ts#L674)*

Get the list of secondary Accounts related to the Identity

**`note`** can be subscribed to

**Returns:** *Promise‹[PermissionedAccount](../interfaces/permissionedaccount.md)[]›*

▸ **getSecondaryAccounts**(`callback`: [SubCallback](../globals.md#subcallback)‹[PermissionedAccount](../interfaces/permissionedaccount.md)[]›): *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

*Inherited from [Identity](identity.md).[getSecondaryAccounts](identity.md#getsecondaryaccounts)*

*Defined in [src/api/entities/Identity/index.ts:675](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/api/entities/Identity/index.ts#L675)*

**Parameters:**

Name | Type |
------ | ------ |
`callback` | [SubCallback](../globals.md#subcallback)‹[PermissionedAccount](../interfaces/permissionedaccount.md)[]› |

**Returns:** *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

___

###  getTrustingAssets

▸ **getTrustingAssets**(): *Promise‹[Asset](asset.md)[]›*

*Inherited from [Identity](identity.md).[getTrustingAssets](identity.md#gettrustingassets)*

*Defined in [src/api/entities/Identity/index.ts:386](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/api/entities/Identity/index.ts#L386)*

Get the list of Assets for which this Identity is a trusted claim issuer

**`note`** uses the middleware

**Returns:** *Promise‹[Asset](asset.md)[]›*

___

###  getVenues

▸ **getVenues**(): *Promise‹[Venue](venue.md)[]›*

*Inherited from [Identity](identity.md).[getVenues](identity.md#getvenues)*

*Defined in [src/api/entities/Identity/index.ts:403](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/api/entities/Identity/index.ts#L403)*

Retrieve all Venues created by this Identity

**`note`** can be subscribed to

**Returns:** *Promise‹[Venue](venue.md)[]›*

▸ **getVenues**(`callback`: [SubCallback](../globals.md#subcallback)‹[Venue](venue.md)[]›): *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

*Inherited from [Identity](identity.md).[getVenues](identity.md#getvenues)*

*Defined in [src/api/entities/Identity/index.ts:404](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/api/entities/Identity/index.ts#L404)*

**Parameters:**

Name | Type |
------ | ------ |
`callback` | [SubCallback](../globals.md#subcallback)‹[Venue](venue.md)[]› |

**Returns:** *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

___

###  hasRole

▸ **hasRole**(`role`: [Role](../globals.md#role)): *Promise‹boolean›*

*Inherited from [Identity](identity.md).[hasRole](identity.md#hasrole)*

*Defined in [src/api/entities/Identity/index.ts:113](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/api/entities/Identity/index.ts#L113)*

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

*Defined in [src/api/entities/Identity/index.ts:375](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/api/entities/Identity/index.ts#L375)*

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

*Defined in [src/api/entities/Identity/index.ts:210](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/api/entities/Identity/index.ts#L210)*

Check whether this Identity has a valid CDD claim

**Returns:** *Promise‹boolean›*

___

###  isCddProvider

▸ **isCddProvider**(): *Promise‹boolean›*

*Inherited from [Identity](identity.md).[isCddProvider](identity.md#iscddprovider)*

*Defined in [src/api/entities/Identity/index.ts:243](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/api/entities/Identity/index.ts#L243)*

Check whether this Identity is a CDD provider

**Returns:** *Promise‹boolean›*

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

###  isGcMember

▸ **isGcMember**(): *Promise‹boolean›*

*Inherited from [Identity](identity.md).[isGcMember](identity.md#isgcmember)*

*Defined in [src/api/entities/Identity/index.ts:226](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/api/entities/Identity/index.ts#L226)*

Check whether this Identity is Governance Committee member

**Returns:** *Promise‹boolean›*

___

###  toJson

▸ **toJson**(): *string*

*Inherited from [Identity](identity.md).[toJson](identity.md#tojson)*

*Overrides [Entity](entity.md).[toJson](entity.md#abstract-tojson)*

*Defined in [src/api/entities/Identity/index.ts:726](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/api/entities/Identity/index.ts#L726)*

Return the Identity's DID

**Returns:** *string*

___

###  trustedFor

▸ **trustedFor**(): *Promise‹[ClaimType](../enums/claimtype.md)[] | null›*

*Defined in [src/api/entities/DefaultTrustedClaimIssuer.ts:77](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/api/entities/DefaultTrustedClaimIssuer.ts#L77)*

Retrieve claim types for which this Claim Issuer is trusted. A null value means that the issuer is trusted for all claim types

**Returns:** *Promise‹[ClaimType](../enums/claimtype.md)[] | null›*

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
