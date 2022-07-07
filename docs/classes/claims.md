# Class: Claims

Handles all Claims related functionality

## Hierarchy

* **Claims**

## Index

### Methods

* [addClaims](claims.md#addclaims)
* [addInvestorUniquenessClaim](claims.md#addinvestoruniquenessclaim)
* [editClaims](claims.md#editclaims)
* [getCddClaims](claims.md#getcddclaims)
* [getClaimScopes](claims.md#getclaimscopes)
* [getIdentitiesWithClaims](claims.md#getidentitieswithclaims)
* [getIdentitiesWithClaimsV2](claims.md#getidentitieswithclaimsv2)
* [getInvestorUniquenessClaims](claims.md#getinvestoruniquenessclaims)
* [getIssuedClaims](claims.md#getissuedclaims)
* [getIssuedClaimsV2](claims.md#getissuedclaimsv2)
* [getTargetingClaims](claims.md#gettargetingclaims)
* [getTargetingClaimsV2](claims.md#gettargetingclaimsv2)
* [revokeClaims](claims.md#revokeclaims)

## Methods

###  addClaims

▸ **addClaims**(`args`: Pick‹[ModifyClaimsParams](../globals.md#modifyclaimsparams), "claims"›, `opts?`: [ProcedureOpts](../interfaces/procedureopts.md)): *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

*Defined in [src/Claims.ts:130](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/Claims.ts#L130)*

Add claims to Identities

**`note`** required roles:
  - Customer Due Diligence Provider: if there is at least one CDD claim in the arguments

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call [addClaims.checkAuthorization](../interfaces/proceduremethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

**Parameters:**

Name | Type |
------ | ------ |
`args` | Pick‹[ModifyClaimsParams](../globals.md#modifyclaimsparams), "claims"› |
`opts?` | [ProcedureOpts](../interfaces/procedureopts.md) |

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

___

###  addInvestorUniquenessClaim

▸ **addInvestorUniquenessClaim**(`args`: [AddInvestorUniquenessClaimParams](../interfaces/addinvestoruniquenessclaimparams.md), `opts?`: [ProcedureOpts](../interfaces/procedureopts.md)): *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

*Defined in [src/Claims.ts:117](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/Claims.ts#L117)*

Add an Investor Uniqueness Claim to the signing Identity

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call [addInvestorUniquenessClaim.checkAuthorization](../interfaces/proceduremethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

**Parameters:**

Name | Type |
------ | ------ |
`args` | [AddInvestorUniquenessClaimParams](../interfaces/addinvestoruniquenessclaimparams.md) |
`opts?` | [ProcedureOpts](../interfaces/procedureopts.md) |

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

___

###  editClaims

▸ **editClaims**(`args`: Pick‹[ModifyClaimsParams](../globals.md#modifyclaimsparams), "claims"›, `opts?`: [ProcedureOpts](../interfaces/procedureopts.md)): *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

*Defined in [src/Claims.ts:143](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/Claims.ts#L143)*

Edit claims associated to Identities (only the expiry date can be modified)

**`note`** required roles:
  - Customer Due Diligence Provider: if there is at least one CDD claim in the arguments

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call [editClaims.checkAuthorization](../interfaces/proceduremethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

**Parameters:**

Name | Type |
------ | ------ |
`args` | Pick‹[ModifyClaimsParams](../globals.md#modifyclaimsparams), "claims"› |
`opts?` | [ProcedureOpts](../interfaces/procedureopts.md) |

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

___

###  getCddClaims

▸ **getCddClaims**(`opts`: object): *Promise‹[ClaimData](../interfaces/claimdata.md)‹[CddClaim](../interfaces/cddclaim.md)›[]›*

*Defined in [src/Claims.ts:437](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/Claims.ts#L437)*

Retrieve the list of CDD claims for a target Identity

**Parameters:**

▪`Default value`  **opts**: *object*= {}

Name | Type | Description |
------ | ------ | ------ |
`includeExpired?` | undefined &#124; false &#124; true | whether to include expired claims. Defaults to true  |
`target?` | string &#124; [Identity](identity.md) | Identity for which to fetch CDD claims (optional, defaults to the signing Identity) |

**Returns:** *Promise‹[ClaimData](../interfaces/claimdata.md)‹[CddClaim](../interfaces/cddclaim.md)›[]›*

___

###  getClaimScopes

▸ **getClaimScopes**(`opts`: object): *Promise‹[ClaimScope](../interfaces/claimscope.md)[]›*

*Defined in [src/Claims.ts:387](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/Claims.ts#L387)*

Retrieve all scopes in which claims have been made for the target Identity.
  If the scope is an asset DID, the corresponding ticker is returned as well

**Parameters:**

▪`Default value`  **opts**: *object*= {}

Name | Type | Description |
------ | ------ | ------ |
`target?` | string &#124; [Identity](identity.md) | Identity for which to fetch claim scopes (optional, defaults to the signing Identity)  |

**Returns:** *Promise‹[ClaimScope](../interfaces/claimscope.md)[]›*

___

###  getIdentitiesWithClaims

▸ **getIdentitiesWithClaims**(`opts`: object): *Promise‹[ResultSet](../interfaces/resultset.md)‹[IdentityWithClaims](../interfaces/identitywithclaims.md)››*

*Defined in [src/Claims.ts:234](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/Claims.ts#L234)*

Retrieve a list of Identities with claims associated to them. Can be filtered using parameters

**`note`** supports pagination

**`note`** uses the middleware

**Parameters:**

▪`Default value`  **opts**: *object*= {}

Name | Type | Description |
------ | ------ | ------ |
`claimTypes?` | [Exclude](../enums/targettreatment.md#exclude)‹[ClaimType](../enums/claimtype.md), [InvestorUniquenessV2](../enums/claimtype.md#investoruniquenessv2)›[] | types of the claims to fetch. Defaults to any type |
`includeExpired?` | undefined &#124; false &#124; true | whether to include expired claims. Defaults to true |
`scope?` | [Scope](../interfaces/scope.md) | scope of the claims to fetch. Defaults to any scope |
`size?` | BigNumber | page size |
`start?` | BigNumber | page offset  |
`targets?` | (string &#124; [Identity](identity.md)‹›)[] | Identities (or Identity IDs) for which to fetch targeting claims. Defaults to all targets |
`trustedClaimIssuers?` | (string &#124; [Identity](identity.md)‹›)[] | Identity IDs of claim issuers. Defaults to all claim issuers |

**Returns:** *Promise‹[ResultSet](../interfaces/resultset.md)‹[IdentityWithClaims](../interfaces/identitywithclaims.md)››*

___

###  getIdentitiesWithClaimsV2

▸ **getIdentitiesWithClaimsV2**(`opts`: object): *Promise‹[ResultSet](../interfaces/resultset.md)‹[IdentityWithClaims](../interfaces/identitywithclaims.md)››*

*Defined in [src/Claims.ts:302](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/Claims.ts#L302)*

Retrieve a list of Identities with claims associated to them. Can be filtered using parameters

**`note`** supports pagination

**`note`** uses the middleware V2

**Parameters:**

▪`Default value`  **opts**: *object*= {}

Name | Type | Description |
------ | ------ | ------ |
`claimTypes?` | [Exclude](../enums/targettreatment.md#exclude)‹[ClaimType](../enums/claimtype.md), [InvestorUniquenessV2](../enums/claimtype.md#investoruniquenessv2)›[] | types of the claims to fetch. Defaults to any type |
`includeExpired?` | undefined &#124; false &#124; true | whether to include expired claims. Defaults to true |
`scope?` | [Scope](../interfaces/scope.md) | scope of the claims to fetch. Defaults to any scope |
`size?` | BigNumber | page size |
`start?` | BigNumber | page offset  |
`targets?` | (string &#124; [Identity](identity.md)‹›)[] | Identities (or Identity IDs) for which to fetch targeting claims. Defaults to all targets |
`trustedClaimIssuers?` | (string &#124; [Identity](identity.md)‹›)[] | Identity IDs of claim issuers. Defaults to all claim issuers |

**Returns:** *Promise‹[ResultSet](../interfaces/resultset.md)‹[IdentityWithClaims](../interfaces/identitywithclaims.md)››*

___

###  getInvestorUniquenessClaims

▸ **getInvestorUniquenessClaims**(`opts`: object): *Promise‹[ClaimData](../interfaces/claimdata.md)‹[InvestorUniquenessClaim](../interfaces/investoruniquenessclaim.md)›[]›*

*Defined in [src/Claims.ts:461](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/Claims.ts#L461)*

Retrieve the list of InvestorUniqueness claims for a target Identity

**Parameters:**

▪`Default value`  **opts**: *object*= {}

Name | Type | Description |
------ | ------ | ------ |
`includeExpired?` | undefined &#124; false &#124; true | whether to include expired claims. Defaults to true  |
`target?` | string &#124; [Identity](identity.md) | Identity for which to fetch CDD claims (optional, defaults to the signing Identity) |

**Returns:** *Promise‹[ClaimData](../interfaces/claimdata.md)‹[InvestorUniquenessClaim](../interfaces/investoruniquenessclaim.md)›[]›*

___

###  getIssuedClaims

▸ **getIssuedClaims**(`opts`: object): *Promise‹[ResultSet](../interfaces/resultset.md)‹[ClaimData](../interfaces/claimdata.md)››*

*Defined in [src/Claims.ts:169](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/Claims.ts#L169)*

Retrieve all claims issued by an Identity

**`note`** supports pagination

**`note`** uses the middleware

**Parameters:**

▪`Default value`  **opts**: *object*= {}

Name | Type | Description |
------ | ------ | ------ |
`includeExpired?` | undefined &#124; false &#124; true | whether to include expired claims. Defaults to true  |
`size?` | BigNumber | - |
`start?` | BigNumber | - |
`target?` | string &#124; [Identity](identity.md) | Identity (optional, defaults to the signing Identity) |

**Returns:** *Promise‹[ResultSet](../interfaces/resultset.md)‹[ClaimData](../interfaces/claimdata.md)››*

___

###  getIssuedClaimsV2

▸ **getIssuedClaimsV2**(`opts`: object): *Promise‹[ResultSet](../interfaces/resultset.md)‹[ClaimData](../interfaces/claimdata.md)››*

*Defined in [src/Claims.ts:199](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/Claims.ts#L199)*

Retrieve all claims issued by an Identity

**`note`** supports pagination

**`note`** uses the middlewareV2

**Parameters:**

▪`Default value`  **opts**: *object*= {}

Name | Type | Description |
------ | ------ | ------ |
`includeExpired?` | undefined &#124; false &#124; true | whether to include expired claims. Defaults to true  |
`size?` | BigNumber | - |
`start?` | BigNumber | - |
`target?` | string &#124; [Identity](identity.md) | Identity (optional, defaults to the signing Identity) |

**Returns:** *Promise‹[ResultSet](../interfaces/resultset.md)‹[ClaimData](../interfaces/claimdata.md)››*

___

###  getTargetingClaims

▸ **getTargetingClaims**(`opts`: object): *Promise‹[ResultSet](../interfaces/resultset.md)‹[IdentityWithClaims](../interfaces/identitywithclaims.md)››*

*Defined in [src/Claims.ts:488](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/Claims.ts#L488)*

Retrieve all claims issued about an Identity, grouped by claim issuer

**`note`** supports pagination

**`note`** uses the middleware (optional)

**Parameters:**

▪`Default value`  **opts**: *object*= {}

Name | Type | Description |
------ | ------ | ------ |
`includeExpired?` | undefined &#124; false &#124; true | whether to include expired claims. Defaults to true  |
`scope?` | [Scope](../interfaces/scope.md) | - |
`size?` | BigNumber | - |
`start?` | BigNumber | - |
`target?` | string &#124; [Identity](identity.md) | Identity for which to fetch targeting claims (optional, defaults to the signing Identity) |
`trustedClaimIssuers?` | (string &#124; [Identity](identity.md)‹›)[] | - |

**Returns:** *Promise‹[ResultSet](../interfaces/resultset.md)‹[IdentityWithClaims](../interfaces/identitywithclaims.md)››*

___

###  getTargetingClaimsV2

▸ **getTargetingClaimsV2**(`opts`: object): *Promise‹[ResultSet](../interfaces/resultset.md)‹[IdentityWithClaims](../interfaces/identitywithclaims.md)››*

*Defined in [src/Claims.ts:581](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/Claims.ts#L581)*

Retrieve all claims issued about an Identity, grouped by claim issuer

**`note`** supports pagination

**`note`** uses the middlewareV2 (optional)

**Parameters:**

▪`Default value`  **opts**: *object*= {}

Name | Type | Description |
------ | ------ | ------ |
`includeExpired?` | undefined &#124; false &#124; true | whether to include expired claims. Defaults to true  |
`scope?` | [Scope](../interfaces/scope.md) | - |
`size?` | BigNumber | - |
`start?` | BigNumber | - |
`target?` | string &#124; [Identity](identity.md) | Identity for which to fetch targeting claims (optional, defaults to the signing Identity) |
`trustedClaimIssuers?` | (string &#124; [Identity](identity.md)‹›)[] | - |

**Returns:** *Promise‹[ResultSet](../interfaces/resultset.md)‹[IdentityWithClaims](../interfaces/identitywithclaims.md)››*

___

###  revokeClaims

▸ **revokeClaims**(`args`: Pick‹[ModifyClaimsParams](../globals.md#modifyclaimsparams), "claims"›, `opts?`: [ProcedureOpts](../interfaces/procedureopts.md)): *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

*Defined in [src/Claims.ts:156](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/Claims.ts#L156)*

Revoke claims from Identities

**`note`** required roles:
  - Customer Due Diligence Provider: if there is at least one CDD claim in the arguments

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call [revokeClaims.checkAuthorization](../interfaces/proceduremethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

**Parameters:**

Name | Type |
------ | ------ |
`args` | Pick‹[ModifyClaimsParams](../globals.md#modifyclaimsparams), "claims"› |
`opts?` | [ProcedureOpts](../interfaces/procedureopts.md) |

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹void››*
