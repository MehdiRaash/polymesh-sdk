# Class: DefaultPortfolio

Represents the default Portfolio for an Identity

## Hierarchy

  ↳ [Portfolio](portfolio.md)

  ↳ **DefaultPortfolio**

## Index

### Properties

* [_id](defaultportfolio.md#protected-optional-_id)
* [context](defaultportfolio.md#protected-context)
* [owner](defaultportfolio.md#owner)
* [uuid](defaultportfolio.md#uuid)

### Methods

* [exists](defaultportfolio.md#exists)
* [getAssetBalances](defaultportfolio.md#getassetbalances)
* [getCustodian](defaultportfolio.md#getcustodian)
* [getTransactionHistory](defaultportfolio.md#gettransactionhistory)
* [isCustodiedBy](defaultportfolio.md#iscustodiedby)
* [isEqual](defaultportfolio.md#isequal)
* [isOwnedBy](defaultportfolio.md#isownedby)
* [moveFunds](defaultportfolio.md#movefunds)
* [quitCustody](defaultportfolio.md#quitcustody)
* [setCustodian](defaultportfolio.md#setcustodian)
* [toJson](defaultportfolio.md#tojson)
* [generateUuid](defaultportfolio.md#static-generateuuid)
* [unserialize](defaultportfolio.md#static-unserialize)

## Properties

### `Protected` `Optional` _id

• **_id**? : *BigNumber*

*Inherited from [Portfolio](portfolio.md).[_id](portfolio.md#protected-optional-_id)*

*Defined in [src/api/entities/Portfolio/index.ts:80](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/api/entities/Portfolio/index.ts#L80)*

internal Portfolio identifier (unused for default Portfolio)

___

### `Protected` context

• **context**: *Context*

*Inherited from [CheckpointSchedule](checkpointschedule.md).[context](checkpointschedule.md#protected-context)*

*Defined in [src/api/entities/Entity.ts:48](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/api/entities/Entity.ts#L48)*

___

###  owner

• **owner**: *[Identity](identity.md)*

*Inherited from [Portfolio](portfolio.md).[owner](portfolio.md#owner)*

*Defined in [src/api/entities/Portfolio/index.ts:75](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/api/entities/Portfolio/index.ts#L75)*

Identity of the Portfolio's owner

___

###  uuid

• **uuid**: *string*

*Inherited from [CheckpointSchedule](checkpointschedule.md).[uuid](checkpointschedule.md#uuid)*

*Defined in [src/api/entities/Entity.ts:46](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/api/entities/Entity.ts#L46)*

## Methods

###  exists

▸ **exists**(): *Promise‹boolean›*

*Overrides [Entity](entity.md).[exists](entity.md#abstract-exists)*

*Defined in [src/api/entities/DefaultPortfolio.ts:22](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/api/entities/DefaultPortfolio.ts#L22)*

Determine whether this Portfolio exists on chain

**Returns:** *Promise‹boolean›*

___

###  getAssetBalances

▸ **getAssetBalances**(`args?`: undefined | object): *Promise‹[PortfolioBalance](../interfaces/portfoliobalance.md)[]›*

*Inherited from [Portfolio](portfolio.md).[getAssetBalances](portfolio.md#getassetbalances)*

*Defined in [src/api/entities/Portfolio/index.ts:141](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/api/entities/Portfolio/index.ts#L141)*

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

*Defined in [src/api/entities/Portfolio/index.ts:259](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/api/entities/Portfolio/index.ts#L259)*

Retrieve the custodian Identity of this Portfolio

**`note`** if no custodian is set, the owner Identity is returned

**Returns:** *Promise‹[Identity](identity.md)›*

___

###  getTransactionHistory

▸ **getTransactionHistory**(`filters`: object): *Promise‹[ResultSet](../interfaces/resultset.md)‹[HistoricSettlement](../interfaces/historicsettlement.md)››*

*Inherited from [Portfolio](portfolio.md).[getTransactionHistory](portfolio.md#gettransactionhistory)*

*Defined in [src/api/entities/Portfolio/index.ts:304](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/api/entities/Portfolio/index.ts#L304)*

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

###  isCustodiedBy

▸ **isCustodiedBy**(`args?`: undefined | object): *Promise‹boolean›*

*Inherited from [Portfolio](portfolio.md).[isCustodiedBy](portfolio.md#iscustodiedby)*

*Defined in [src/api/entities/Portfolio/index.ts:125](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/api/entities/Portfolio/index.ts#L125)*

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

*Defined in [src/api/entities/Entity.ts:61](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/api/entities/Entity.ts#L61)*

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

*Defined in [src/api/entities/Portfolio/index.ts:112](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/api/entities/Portfolio/index.ts#L112)*

Return whether an Identity is the Portfolio owner

**Parameters:**

Name | Type |
------ | ------ |
`args?` | undefined &#124; object |

**Returns:** *Promise‹boolean›*

___

###  moveFunds

▸ **moveFunds**(`args`: [MoveFundsParams](../interfaces/movefundsparams.md), `opts?`: [ProcedureOpts](../interfaces/procedureopts.md)): *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

*Inherited from [Portfolio](portfolio.md).[moveFunds](portfolio.md#movefunds)*

*Defined in [src/api/entities/Portfolio/index.ts:237](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/api/entities/Portfolio/index.ts#L237)*

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

*Defined in [src/api/entities/Portfolio/index.ts:250](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/api/entities/Portfolio/index.ts#L250)*

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

*Defined in [src/api/entities/Portfolio/index.ts:224](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/api/entities/Portfolio/index.ts#L224)*

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

###  toJson

▸ **toJson**(): *[HumanReadable](../interfaces/humanreadable.md)*

*Inherited from [Portfolio](portfolio.md).[toJson](portfolio.md#tojson)*

*Overrides [Entity](entity.md).[toJson](entity.md#abstract-tojson)*

*Defined in [src/api/entities/Portfolio/index.ts:401](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/api/entities/Portfolio/index.ts#L401)*

Return the Portfolio ID and owner DID

**Returns:** *[HumanReadable](../interfaces/humanreadable.md)*

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
