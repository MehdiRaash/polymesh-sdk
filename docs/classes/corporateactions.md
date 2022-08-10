# Class: CorporateActions

Handles all Asset Corporate Actions related functionality

## Hierarchy

* Namespace‹[Asset](asset.md)›

  ↳ **CorporateActions**

## Index

### Properties

* [context](corporateactions.md#protected-context)
* [distributions](corporateactions.md#distributions)
* [parent](corporateactions.md#protected-parent)

### Methods

* [getAgents](corporateactions.md#getagents)
* [getDefaultConfig](corporateactions.md#getdefaultconfig)
* [remove](corporateactions.md#remove)
* [removeAgent](corporateactions.md#removeagent)
* [setAgent](corporateactions.md#setagent)
* [setDefaultConfig](corporateactions.md#setdefaultconfig)

## Properties

### `Protected` context

• **context**: *Context*

*Inherited from void*

*Defined in [src/api/entities/Namespace.ts:11](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/api/entities/Namespace.ts#L11)*

___

###  distributions

• **distributions**: *[Distributions](distributions.md)*

*Defined in [src/api/entities/Asset/CorporateActions/index.ts:35](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/api/entities/Asset/CorporateActions/index.ts#L35)*

___

### `Protected` parent

• **parent**: *[Asset](asset.md)*

*Inherited from void*

*Defined in [src/api/entities/Namespace.ts:9](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/api/entities/Namespace.ts#L9)*

## Methods

###  getAgents

▸ **getAgents**(): *Promise‹[Identity](identity.md)[]›*

*Defined in [src/api/entities/Asset/CorporateActions/index.ts:125](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/api/entities/Asset/CorporateActions/index.ts#L125)*

Retrieve a list of agent Identities

**Returns:** *Promise‹[Identity](identity.md)[]›*

___

###  getDefaultConfig

▸ **getDefaultConfig**(): *Promise‹[CorporateActionDefaultConfig](../interfaces/corporateactiondefaultconfig.md)›*

*Defined in [src/api/entities/Asset/CorporateActions/index.ts:160](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/api/entities/Asset/CorporateActions/index.ts#L160)*

Retrieve default config comprising of targets, global tax withholding percentage and per-Identity tax withholding percentages.

**`note`** This config is applied to every Corporate Action that is created until they are modified. Modifying the default config
  does not impact existing Corporate Actions.
  When creating a Corporate Action, values passed explicitly will override this default config

**Returns:** *Promise‹[CorporateActionDefaultConfig](../interfaces/corporateactiondefaultconfig.md)›*

___

###  remove

▸ **remove**(`args`: [RemoveCorporateActionParams](../interfaces/removecorporateactionparams.md), `opts?`: [ProcedureOpts](../interfaces/procedureopts.md)): *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

*Defined in [src/api/entities/Asset/CorporateActions/index.ts:118](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/api/entities/Asset/CorporateActions/index.ts#L118)*

Remove a Corporate Action

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call [remove.checkAuthorization](../interfaces/proceduremethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

**Parameters:**

Name | Type |
------ | ------ |
`args` | [RemoveCorporateActionParams](../interfaces/removecorporateactionparams.md) |
`opts?` | [ProcedureOpts](../interfaces/procedureopts.md) |

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

___

###  removeAgent

▸ **removeAgent**(`opts?`: [ProcedureOpts](../interfaces/procedureopts.md)): *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

*Defined in [src/api/entities/Asset/CorporateActions/index.ts:108](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/api/entities/Asset/CorporateActions/index.ts#L108)*

Remove the Corporate Actions Agent of the Asset

**`note`** this action will leave the Asset owner as the Corporate Actions Agent

**`deprecated`** 

**`note`** this method is of type [NoArgsProcedureMethod](../interfaces/noargsproceduremethod.md), which means you can call [removeAgent.checkAuthorization](../interfaces/noargsproceduremethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

**Parameters:**

Name | Type |
------ | ------ |
`opts?` | [ProcedureOpts](../interfaces/procedureopts.md) |

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

___

###  setAgent

▸ **setAgent**(`args`: [ModifyCorporateActionsAgentParams](../interfaces/modifycorporateactionsagentparams.md), `opts?`: [ProcedureOpts](../interfaces/procedureopts.md)): *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

*Defined in [src/api/entities/Asset/CorporateActions/index.ts:94](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/api/entities/Asset/CorporateActions/index.ts#L94)*

Assign a new Corporate Actions Agent for the Asset

**`note`** this may create [Authorization Requests](authorizationrequest.md) which have to be accepted by the `target` Identity.
  An [Account](../enums/signertype.md#account) or [Identity](../enums/roletype.md#identity) can fetch its pending Authorization Requests by calling [authorizations.getReceived](authorizations.md#getreceived).
  Also, an Account or Identity can directly fetch the details of an Authorization Request by calling [authorizations.getOne](authorizations.md#getone)

**`deprecated`** in favor of `inviteAgent`

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call [setAgent.checkAuthorization](../interfaces/proceduremethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

**Parameters:**

Name | Type |
------ | ------ |
`args` | [ModifyCorporateActionsAgentParams](../interfaces/modifycorporateactionsagentparams.md) |
`opts?` | [ProcedureOpts](../interfaces/procedureopts.md) |

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

___

###  setDefaultConfig

▸ **setDefaultConfig**(`args`: [ModifyCaDefaultConfigParams](../globals.md#modifycadefaultconfigparams), `opts?`: [ProcedureOpts](../interfaces/procedureopts.md)): *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

*Defined in [src/api/entities/Asset/CorporateActions/index.ts:78](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/api/entities/Asset/CorporateActions/index.ts#L78)*

Assign default config values(targets, global tax withholding percentage and per-Identity tax withholding percentages)

**`note`** These config values are applied to every Corporate Action that is created until they are modified. Modifying these values
  does not impact existing Corporate Actions.
  When creating a Corporate Action, values passed explicitly will override these default config values

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call [setDefaultConfig.checkAuthorization](../interfaces/proceduremethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

**Parameters:**

Name | Type |
------ | ------ |
`args` | [ModifyCaDefaultConfigParams](../globals.md#modifycadefaultconfigparams) |
`opts?` | [ProcedureOpts](../interfaces/procedureopts.md) |

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹void››*
