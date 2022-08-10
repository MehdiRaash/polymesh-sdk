# Class: Requirements

Handles all Asset Compliance Requirements related functionality

## Hierarchy

* Namespace‹[Asset](asset.md)›

  ↳ **Requirements**

## Index

### Properties

* [context](requirements.md#protected-context)
* [parent](requirements.md#protected-parent)

### Methods

* [add](requirements.md#add)
* [arePaused](requirements.md#arepaused)
* [checkSettle](requirements.md#checksettle)
* [get](requirements.md#get)
* [modify](requirements.md#modify)
* [pause](requirements.md#pause)
* [remove](requirements.md#remove)
* [reset](requirements.md#reset)
* [set](requirements.md#set)
* [unpause](requirements.md#unpause)

## Properties

### `Protected` context

• **context**: *Context*

*Inherited from void*

*Defined in [src/api/entities/Namespace.ts:11](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/api/entities/Namespace.ts#L11)*

___

### `Protected` parent

• **parent**: *[Asset](asset.md)*

*Inherited from void*

*Defined in [src/api/entities/Namespace.ts:9](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/api/entities/Namespace.ts#L9)*

## Methods

###  add

▸ **add**(`args`: [AddAssetRequirementParams](../interfaces/addassetrequirementparams.md), `opts?`: [ProcedureOpts](../interfaces/procedureopts.md)): *Promise‹[TransactionQueue](transactionqueue.md)‹[Asset](asset.md)››*

*Defined in [src/api/entities/Asset/Compliance/Requirements.ts:99](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/api/entities/Asset/Compliance/Requirements.ts#L99)*

Add a new compliance requirement to the the Asset. This doesn't modify existing requirements

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call [add.checkAuthorization](../interfaces/proceduremethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

**Parameters:**

Name | Type |
------ | ------ |
`args` | [AddAssetRequirementParams](../interfaces/addassetrequirementparams.md) |
`opts?` | [ProcedureOpts](../interfaces/procedureopts.md) |

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹[Asset](asset.md)››*

___

###  arePaused

▸ **arePaused**(): *Promise‹boolean›*

*Defined in [src/api/entities/Asset/Compliance/Requirements.ts:278](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/api/entities/Asset/Compliance/Requirements.ts#L278)*

Check whether Asset compliance requirements are paused or not

**Returns:** *Promise‹boolean›*

___

###  checkSettle

▸ **checkSettle**(`args`: object): *Promise‹[Compliance](compliance.md)›*

*Defined in [src/api/entities/Asset/Compliance/Requirements.ts:249](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/api/entities/Asset/Compliance/Requirements.ts#L249)*

Check whether the sender and receiver Identities in a transfer comply with all the requirements of this Asset

**`note`** this does not take balances into account

**`deprecated`** in favor of `settlements.canTransfer`

**Parameters:**

▪ **args**: *object*

Name | Type | Description |
------ | ------ | ------ |
`from?` | string &#124; [Identity](identity.md) | sender Identity (optional, defaults to the signing Identity) |
`to` | string &#124; [Identity](identity.md) | receiver Identity  |

**Returns:** *Promise‹[Compliance](compliance.md)›*

___

###  get

▸ **get**(): *Promise‹[ComplianceRequirements](../interfaces/compliancerequirements.md)›*

*Defined in [src/api/entities/Asset/Compliance/Requirements.ts:131](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/api/entities/Asset/Compliance/Requirements.ts#L131)*

Retrieve all of the Asset's compliance requirements, together with the Default Trusted Claim Issuers

**`note`** can be subscribed to

**Returns:** *Promise‹[ComplianceRequirements](../interfaces/compliancerequirements.md)›*

▸ **get**(`callback`: [SubCallback](../globals.md#subcallback)‹[ComplianceRequirements](../interfaces/compliancerequirements.md)›): *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

*Defined in [src/api/entities/Asset/Compliance/Requirements.ts:132](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/api/entities/Asset/Compliance/Requirements.ts#L132)*

**Parameters:**

Name | Type |
------ | ------ |
`callback` | [SubCallback](../globals.md#subcallback)‹[ComplianceRequirements](../interfaces/compliancerequirements.md)› |

**Returns:** *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

___

###  modify

▸ **modify**(`args`: [ModifyComplianceRequirementParams](../globals.md#modifycompliancerequirementparams), `opts?`: [ProcedureOpts](../interfaces/procedureopts.md)): *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

*Defined in [src/api/entities/Asset/Compliance/Requirements.ts:302](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/api/entities/Asset/Compliance/Requirements.ts#L302)*

Modify a compliance requirement for the Asset

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call [modify.checkAuthorization](../interfaces/proceduremethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

**Parameters:**

Name | Type |
------ | ------ |
`args` | [ModifyComplianceRequirementParams](../globals.md#modifycompliancerequirementparams) |
`opts?` | [ProcedureOpts](../interfaces/procedureopts.md) |

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

___

###  pause

▸ **pause**(`opts?`: [ProcedureOpts](../interfaces/procedureopts.md)): *Promise‹[TransactionQueue](transactionqueue.md)‹[Asset](asset.md)››*

*Defined in [src/api/entities/Asset/Compliance/Requirements.ts:225](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/api/entities/Asset/Compliance/Requirements.ts#L225)*

Pause all the Asset's requirements. This means that all transfers will be allowed until requirements are unpaused

**`note`** this method is of type [NoArgsProcedureMethod](../interfaces/noargsproceduremethod.md), which means you can call [pause.checkAuthorization](../interfaces/noargsproceduremethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

**Parameters:**

Name | Type |
------ | ------ |
`opts?` | [ProcedureOpts](../interfaces/procedureopts.md) |

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹[Asset](asset.md)››*

___

###  remove

▸ **remove**(`args`: [RemoveAssetRequirementParams](../interfaces/removeassetrequirementparams.md), `opts?`: [ProcedureOpts](../interfaces/procedureopts.md)): *Promise‹[TransactionQueue](transactionqueue.md)‹[Asset](asset.md)››*

*Defined in [src/api/entities/Asset/Compliance/Requirements.ts:109](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/api/entities/Asset/Compliance/Requirements.ts#L109)*

Remove an existing compliance requirement from the Asset

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call [remove.checkAuthorization](../interfaces/proceduremethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

**Parameters:**

Name | Type |
------ | ------ |
`args` | [RemoveAssetRequirementParams](../interfaces/removeassetrequirementparams.md) |
`opts?` | [ProcedureOpts](../interfaces/procedureopts.md) |

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹[Asset](asset.md)››*

___

###  reset

▸ **reset**(`opts?`: [ProcedureOpts](../interfaces/procedureopts.md)): *Promise‹[TransactionQueue](transactionqueue.md)‹[Asset](asset.md)››*

*Defined in [src/api/entities/Asset/Compliance/Requirements.ts:215](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/api/entities/Asset/Compliance/Requirements.ts#L215)*

Delete all the current requirements for the Asset.

**`note`** this method is of type [NoArgsProcedureMethod](../interfaces/noargsproceduremethod.md), which means you can call [reset.checkAuthorization](../interfaces/noargsproceduremethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

**Parameters:**

Name | Type |
------ | ------ |
`opts?` | [ProcedureOpts](../interfaces/procedureopts.md) |

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹[Asset](asset.md)››*

___

###  set

▸ **set**(`args`: [SetAssetRequirementsParams](../interfaces/setassetrequirementsparams.md), `opts?`: [ProcedureOpts](../interfaces/procedureopts.md)): *Promise‹[TransactionQueue](transactionqueue.md)‹[Asset](asset.md)››*

*Defined in [src/api/entities/Asset/Compliance/Requirements.ts:122](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/api/entities/Asset/Compliance/Requirements.ts#L122)*

Configure compliance requirements for the Asset. This operation will replace all existing requirements with a new requirement set

**`example`** Say A, B, C, D and E are requirements and we arrange them as `[[A, B], [C, D], [E]]`.
For a transfer to succeed, it must either comply with A AND B, C AND D, OR E.

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call [set.checkAuthorization](../interfaces/proceduremethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

**Parameters:**

Name | Type |
------ | ------ |
`args` | [SetAssetRequirementsParams](../interfaces/setassetrequirementsparams.md) |
`opts?` | [ProcedureOpts](../interfaces/procedureopts.md) |

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹[Asset](asset.md)››*

___

###  unpause

▸ **unpause**(`opts?`: [ProcedureOpts](../interfaces/procedureopts.md)): *Promise‹[TransactionQueue](transactionqueue.md)‹[Asset](asset.md)››*

*Defined in [src/api/entities/Asset/Compliance/Requirements.ts:235](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/api/entities/Asset/Compliance/Requirements.ts#L235)*

Un-pause all the Asset's current requirements

**`note`** this method is of type [NoArgsProcedureMethod](../interfaces/noargsproceduremethod.md), which means you can call [unpause.checkAuthorization](../interfaces/noargsproceduremethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

**Parameters:**

Name | Type |
------ | ------ |
`opts?` | [ProcedureOpts](../interfaces/procedureopts.md) |

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹[Asset](asset.md)››*
