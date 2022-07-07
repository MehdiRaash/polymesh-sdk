# Class: NumberedPortfolio

Represents a numbered (non-default) Portfolio for an Identity

## Hierarchy

  ↳ [Portfolio](portfolio.md)

  ↳ **NumberedPortfolio**

## Index

### Properties

* [_id](numberedportfolio.md#protected-optional-_id)
* [context](numberedportfolio.md#protected-context)
* [id](numberedportfolio.md#id)
* [owner](numberedportfolio.md#owner)
* [uuid](numberedportfolio.md#uuid)

### Methods

* [createdAt](numberedportfolio.md#createdat)
* [createdAtV2](numberedportfolio.md#createdatv2)
* [exists](numberedportfolio.md#exists)
* [getAssetBalances](numberedportfolio.md#getassetbalances)
* [getCustodian](numberedportfolio.md#getcustodian)
* [getName](numberedportfolio.md#getname)
* [getTransactionHistory](numberedportfolio.md#gettransactionhistory)
* [getTransactionHistoryV2](numberedportfolio.md#gettransactionhistoryv2)
* [isCustodiedBy](numberedportfolio.md#iscustodiedby)
* [isEqual](numberedportfolio.md#isequal)
* [isOwnedBy](numberedportfolio.md#isownedby)
* [modifyName](numberedportfolio.md#modifyname)
* [moveFunds](numberedportfolio.md#movefunds)
* [quitCustody](numberedportfolio.md#quitcustody)
* [setCustodian](numberedportfolio.md#setcustodian)
* [toHuman](numberedportfolio.md#tohuman)
* [generateUuid](numberedportfolio.md#static-generateuuid)
* [unserialize](numberedportfolio.md#static-unserialize)

## Properties

### `Protected` `Optional` _id

• **_id**? : *BigNumber*

*Inherited from [Portfolio](portfolio.md).[_id](portfolio.md#protected-optional-_id)*

*Defined in [src/api/entities/Portfolio/index.ts:83](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/entities/Portfolio/index.ts#L83)*

internal Portfolio identifier (unused for default Portfolio)

___

### `Protected` context

• **context**: *Context*

*Inherited from [CheckpointSchedule](checkpointschedule.md).[context](checkpointschedule.md#protected-context)*

*Defined in [src/api/entities/Entity.ts:48](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/entities/Entity.ts#L48)*

___

###  id

• **id**: *BigNumber*

*Defined in [src/api/entities/NumberedPortfolio.ts:49](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/entities/NumberedPortfolio.ts#L49)*

Portfolio identifier number

___

###  owner

• **owner**: *[Identity](identity.md)*

*Inherited from [Portfolio](portfolio.md).[owner](portfolio.md#owner)*

*Defined in [src/api/entities/Portfolio/index.ts:78](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/entities/Portfolio/index.ts#L78)*

Identity of the Portfolio's owner

___

###  uuid

• **uuid**: *string*

*Inherited from [CheckpointSchedule](checkpointschedule.md).[uuid](checkpointschedule.md#uuid)*

*Defined in [src/api/entities/Entity.ts:46](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/entities/Entity.ts#L46)*

## Methods

###  createdAt

▸ **createdAt**(): *Promise‹[EventIdentifier](../interfaces/eventidentifier.md) | null›*

*Defined in [src/api/entities/NumberedPortfolio.ts:114](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/entities/NumberedPortfolio.ts#L114)*

Retrieve the identifier data (block number, date and event index) of the event that was emitted when this Portfolio was created

**`note`** uses the middleware

**`note`** there is a possibility that the data is not ready by the time it is requested. In that case, `null` is returned

**Returns:** *Promise‹[EventIdentifier](../interfaces/eventidentifier.md) | null›*

___

###  createdAtV2

▸ **createdAtV2**(): *Promise‹[EventIdentifier](../interfaces/eventidentifier.md) | null›*

*Defined in [src/api/entities/NumberedPortfolio.ts:141](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/entities/NumberedPortfolio.ts#L141)*

Retrieve the identifier data (block number, date and event index) of the event that was emitted when this Portfolio was created

**`note`** uses the middlewareV2

**`note`** there is a possibility that the data is not ready by the time it is requested. In that case, `null` is returned

**Returns:** *Promise‹[EventIdentifier](../interfaces/eventidentifier.md) | null›*

___

###  exists

▸ **exists**(): *Promise‹boolean›*

*Overrides [Entity](entity.md).[exists](entity.md#abstract-exists)*

*Defined in [src/api/entities/NumberedPortfolio.ts:167](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/entities/NumberedPortfolio.ts#L167)*

Return whether this Portfolio exists

**Returns:** *Promise‹boolean›*

___

###  getAssetBalances

▸ **getAssetBalances**(`args?`: undefined | object): *Promise‹[PortfolioBalance](../interfaces/portfoliobalance.md)[]›*

*Inherited from [Portfolio](portfolio.md).[getAssetBalances](portfolio.md#getassetbalances)*

*Defined in [src/api/entities/Portfolio/index.ts:144](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/entities/Portfolio/index.ts#L144)*

Retrieve the balances of all Assets in this Portfolio

**Parameters:**

Name | Type |
------ | ------ |
`args?` | undefined &#124; object |

**Returns:** *Promise‹[PortfolioBalance](../interfaces/portfoliobalance.md)[]›*

___

###  getCustodian

▸ **getCustodian**(): *Promise‹[Identity](identity.md)›*

*Inherited from [Portfolio](portfolio.md).[getCustodian](portfolio.md#getcustodian)*

*Defined in [src/api/entities/Portfolio/index.ts:274](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/entities/Portfolio/index.ts#L274)*

Retrieve the custodian Identity of this Portfolio

**`note`** if no custodian is set, the owner Identity is returned

**Returns:** *Promise‹[Identity](identity.md)›*

___

###  getName

▸ **getName**(): *Promise‹string›*

*Defined in [src/api/entities/NumberedPortfolio.ts:83](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/entities/NumberedPortfolio.ts#L83)*

Return the Portfolio name

**Returns:** *Promise‹string›*

___

###  getTransactionHistory

▸ **getTransactionHistory**(`filters`: object): *Promise‹[ResultSet](../interfaces/resultset.md)‹[HistoricSettlement](../interfaces/historicsettlement.md)››*

*Inherited from [Portfolio](portfolio.md).[getTransactionHistory](portfolio.md#gettransactionhistory)*

*Defined in [src/api/entities/Portfolio/index.ts:319](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/entities/Portfolio/index.ts#L319)*

Retrieve a list of transactions where this portfolio was involved. Can be filtered using parameters

**`note`** supports pagination

**`note`** uses the middleware

**Parameters:**

▪`Default value`  **filters**: *object*= {}

Name | Type | Description |
------ | ------ | ------ |
`account?` | undefined &#124; string | Account involved in the settlement |
`size?` | BigNumber | page size |
`start?` | BigNumber | page offset  |
`ticker?` | undefined &#124; string | ticker involved in the transaction |

**Returns:** *Promise‹[ResultSet](../interfaces/resultset.md)‹[HistoricSettlement](../interfaces/historicsettlement.md)››*

___

###  getTransactionHistoryV2

▸ **getTransactionHistoryV2**(`filters`: object): *Promise‹[HistoricSettlement](../interfaces/historicsettlement.md)[]›*

*Inherited from [Portfolio](portfolio.md).[getTransactionHistoryV2](portfolio.md#gettransactionhistoryv2)*

*Defined in [src/api/entities/Portfolio/index.ts:421](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/entities/Portfolio/index.ts#L421)*

Retrieve a list of transactions where this portfolio was involved. Can be filtered using parameters

**`note`** uses the middlewareV2

**Parameters:**

▪`Default value`  **filters**: *object*= {}

Name | Type | Description |
------ | ------ | ------ |
`account?` | undefined &#124; string | Account involved in the settlement |
`ticker?` | undefined &#124; string | ticker involved in the transaction  |

**Returns:** *Promise‹[HistoricSettlement](../interfaces/historicsettlement.md)[]›*

___

###  isCustodiedBy

▸ **isCustodiedBy**(`args?`: undefined | object): *Promise‹boolean›*

*Inherited from [Portfolio](portfolio.md).[isCustodiedBy](portfolio.md#iscustodiedby)*

*Defined in [src/api/entities/Portfolio/index.ts:128](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/entities/Portfolio/index.ts#L128)*

Return whether an Identity is the Portfolio custodian

**Parameters:**

Name | Type |
------ | ------ |
`args?` | undefined &#124; object |

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

###  isOwnedBy

▸ **isOwnedBy**(`args?`: undefined | object): *Promise‹boolean›*

*Inherited from [Portfolio](portfolio.md).[isOwnedBy](portfolio.md#isownedby)*

*Defined in [src/api/entities/Portfolio/index.ts:115](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/entities/Portfolio/index.ts#L115)*

Return whether an Identity is the Portfolio owner

**Parameters:**

Name | Type |
------ | ------ |
`args?` | undefined &#124; object |

**Returns:** *Promise‹boolean›*

___

###  modifyName

▸ **modifyName**(`args`: [RenamePortfolioParams](../interfaces/renameportfolioparams.md), `opts?`: [ProcedureOpts](../interfaces/procedureopts.md)): *Promise‹[TransactionQueue](transactionqueue.md)‹[NumberedPortfolio](numberedportfolio.md)››*

*Defined in [src/api/entities/NumberedPortfolio.ts:76](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/entities/NumberedPortfolio.ts#L76)*

Rename portfolio

**`note`** required role:
  - Portfolio Custodian

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call [modifyName.checkAuthorization](../interfaces/proceduremethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

**Parameters:**

Name | Type |
------ | ------ |
`args` | [RenamePortfolioParams](../interfaces/renameportfolioparams.md) |
`opts?` | [ProcedureOpts](../interfaces/procedureopts.md) |

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹[NumberedPortfolio](numberedportfolio.md)››*

___

###  moveFunds

▸ **moveFunds**(`args`: [MoveFundsParams](../interfaces/movefundsparams.md), `opts?`: [ProcedureOpts](../interfaces/procedureopts.md)): *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

*Inherited from [Portfolio](portfolio.md).[moveFunds](portfolio.md#movefunds)*

*Defined in [src/api/entities/Portfolio/index.ts:252](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/entities/Portfolio/index.ts#L252)*

Moves funds from this Portfolio to another one owned by the same Identity

**`note`** required role:
  - Portfolio Custodian

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call [moveFunds.checkAuthorization](../interfaces/proceduremethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

**Parameters:**

Name | Type |
------ | ------ |
`args` | [MoveFundsParams](../interfaces/movefundsparams.md) |
`opts?` | [ProcedureOpts](../interfaces/procedureopts.md) |

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

___

###  quitCustody

▸ **quitCustody**(`opts?`: [ProcedureOpts](../interfaces/procedureopts.md)): *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

*Inherited from [Portfolio](portfolio.md).[quitCustody](portfolio.md#quitcustody)*

*Defined in [src/api/entities/Portfolio/index.ts:265](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/entities/Portfolio/index.ts#L265)*

Returns the custody of the portfolio to the portfolio owner unilaterally

**`note`** required role:
  - Portfolio Custodian

**`note`** this method is of type [NoArgsProcedureMethod](../interfaces/noargsproceduremethod.md), which means you can call [quitCustody.checkAuthorization](../interfaces/noargsproceduremethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

**Parameters:**

Name | Type |
------ | ------ |
`opts?` | [ProcedureOpts](../interfaces/procedureopts.md) |

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

___

###  setCustodian

▸ **setCustodian**(`args`: [SetCustodianParams](../interfaces/setcustodianparams.md), `opts?`: [ProcedureOpts](../interfaces/procedureopts.md)): *Promise‹[TransactionQueue](transactionqueue.md)‹[AuthorizationRequest](authorizationrequest.md)››*

*Inherited from [Portfolio](portfolio.md).[setCustodian](portfolio.md#setcustodian)*

*Defined in [src/api/entities/Portfolio/index.ts:239](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/entities/Portfolio/index.ts#L239)*

Send an invitation to an Identity to assign it as custodian for this Portfolio

**`note`** this will create an [Authorization Request](authorizationrequest.md) which has to be accepted by the `targetIdentity`.
  An [Account](../enums/signertype.md#account) or [Identity](../enums/roletype.md#identity) can fetch its pending Authorization Requests by calling [authorizations.getReceived](authorizations.md#getreceived).
  Also, an Account or Identity can directly fetch the details of an Authorization Request by calling [authorizations.getOne](authorizations.md#getone)

**`note`** required role:
  - Portfolio Custodian

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call [setCustodian.checkAuthorization](../interfaces/proceduremethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

**Parameters:**

Name | Type |
------ | ------ |
`args` | [SetCustodianParams](../interfaces/setcustodianparams.md) |
`opts?` | [ProcedureOpts](../interfaces/procedureopts.md) |

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹[AuthorizationRequest](authorizationrequest.md)››*

___

###  toHuman

▸ **toHuman**(): *[HumanReadable](../interfaces/humanreadable.md)*

*Inherited from [Portfolio](portfolio.md).[toHuman](portfolio.md#tohuman)*

*Overrides [Entity](entity.md).[toHuman](entity.md#abstract-tohuman)*

*Defined in [src/api/entities/Portfolio/index.ts:540](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/entities/Portfolio/index.ts#L540)*

Return the Portfolio ID and owner DID

**Returns:** *[HumanReadable](../interfaces/humanreadable.md)*

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
