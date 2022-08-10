# Class: Offering

Represents an Asset Offering in the Polymesh blockchain

## Hierarchy

* [Entity](entity.md)‹UniqueIdentifiers, [HumanReadable](../interfaces/humanreadable.md)›

  ↳ **Offering**

## Index

### Properties

* [asset](offering.md#asset)
* [context](offering.md#protected-context)
* [id](offering.md#id)
* [uuid](offering.md#uuid)

### Methods

* [close](offering.md#close)
* [details](offering.md#details)
* [exists](offering.md#exists)
* [freeze](offering.md#freeze)
* [getInvestments](offering.md#getinvestments)
* [invest](offering.md#invest)
* [isEqual](offering.md#isequal)
* [modifyTimes](offering.md#modifytimes)
* [toJson](offering.md#tojson)
* [unfreeze](offering.md#unfreeze)
* [generateUuid](offering.md#static-generateuuid)
* [unserialize](offering.md#static-unserialize)

## Properties

###  asset

• **asset**: *[Asset](asset.md)*

*Defined in [src/api/entities/Offering/index.ts:66](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/api/entities/Offering/index.ts#L66)*

Asset being offered

___

### `Protected` context

• **context**: *Context*

*Inherited from [CheckpointSchedule](checkpointschedule.md).[context](checkpointschedule.md#protected-context)*

*Defined in [src/api/entities/Entity.ts:48](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/api/entities/Entity.ts#L48)*

___

###  id

• **id**: *BigNumber*

*Defined in [src/api/entities/Offering/index.ts:61](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/api/entities/Offering/index.ts#L61)*

identifier number of the Offering

___

###  uuid

• **uuid**: *string*

*Inherited from [CheckpointSchedule](checkpointschedule.md).[uuid](checkpointschedule.md#uuid)*

*Defined in [src/api/entities/Entity.ts:46](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/api/entities/Entity.ts#L46)*

## Methods

###  close

▸ **close**(`opts?`: [ProcedureOpts](../interfaces/procedureopts.md)): *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

*Defined in [src/api/entities/Offering/index.ts:159](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/api/entities/Offering/index.ts#L159)*

Close the Offering

**`note`** this method is of type [NoArgsProcedureMethod](../interfaces/noargsproceduremethod.md), which means you can call [close.checkAuthorization](../interfaces/noargsproceduremethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

**Parameters:**

Name | Type |
------ | ------ |
`opts?` | [ProcedureOpts](../interfaces/procedureopts.md) |

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

___

###  details

▸ **details**(): *Promise‹[OfferingDetails](../interfaces/offeringdetails.md)›*

*Defined in [src/api/entities/Offering/index.ts:112](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/api/entities/Offering/index.ts#L112)*

Retrieve the Offering's details

**`note`** can be subscribed to

**Returns:** *Promise‹[OfferingDetails](../interfaces/offeringdetails.md)›*

▸ **details**(`callback`: [SubCallback](../globals.md#subcallback)‹[OfferingDetails](../interfaces/offeringdetails.md)›): *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

*Defined in [src/api/entities/Offering/index.ts:113](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/api/entities/Offering/index.ts#L113)*

**Parameters:**

Name | Type |
------ | ------ |
`callback` | [SubCallback](../globals.md#subcallback)‹[OfferingDetails](../interfaces/offeringdetails.md)› |

**Returns:** *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

___

###  exists

▸ **exists**(): *Promise‹boolean›*

*Overrides [Entity](entity.md).[exists](entity.md#abstract-exists)*

*Defined in [src/api/entities/Offering/index.ts:278](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/api/entities/Offering/index.ts#L278)*

Determine whether this Offering exists on chain

**Returns:** *Promise‹boolean›*

___

###  freeze

▸ **freeze**(`opts?`: [ProcedureOpts](../interfaces/procedureopts.md)): *Promise‹[TransactionQueue](transactionqueue.md)‹[Offering](offering.md)››*

*Defined in [src/api/entities/Offering/index.ts:169](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/api/entities/Offering/index.ts#L169)*

Freeze the Offering

**`note`** this method is of type [NoArgsProcedureMethod](../interfaces/noargsproceduremethod.md), which means you can call [freeze.checkAuthorization](../interfaces/noargsproceduremethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

**Parameters:**

Name | Type |
------ | ------ |
`opts?` | [ProcedureOpts](../interfaces/procedureopts.md) |

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹[Offering](offering.md)››*

___

###  getInvestments

▸ **getInvestments**(`opts`: object): *Promise‹[ResultSet](../interfaces/resultset.md)‹[Investment](../interfaces/investment.md)››*

*Defined in [src/api/entities/Offering/index.ts:221](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/api/entities/Offering/index.ts#L221)*

Retrieve all investments made on this Offering

**`note`** supports pagination

**`note`** uses the middleware

**Parameters:**

▪`Default value`  **opts**: *object*= {}

Name | Type | Description |
------ | ------ | ------ |
`size?` | BigNumber | page size |
`start?` | BigNumber | page offset  |

**Returns:** *Promise‹[ResultSet](../interfaces/resultset.md)‹[Investment](../interfaces/investment.md)››*

___

###  invest

▸ **invest**(`args`: [InvestInOfferingParams](../interfaces/investinofferingparams.md), `opts?`: [ProcedureOpts](../interfaces/procedureopts.md)): *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

*Defined in [src/api/entities/Offering/index.ts:208](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/api/entities/Offering/index.ts#L208)*

Invest in the Offering

**`note`** required roles:
  - Purchase Portfolio Custodian
  - Funding Portfolio Custodian

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call [invest.checkAuthorization](../interfaces/proceduremethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

**Parameters:**

Name | Type |
------ | ------ |
`args` | [InvestInOfferingParams](../interfaces/investinofferingparams.md) |
`opts?` | [ProcedureOpts](../interfaces/procedureopts.md) |

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

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

###  modifyTimes

▸ **modifyTimes**(`args`: ModifyStoTimesParams, `opts?`: [ProcedureOpts](../interfaces/procedureopts.md)): *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

*Defined in [src/api/entities/Offering/index.ts:194](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/api/entities/Offering/index.ts#L194)*

Modify the start/end time of the Offering

**`throws`** if:
  - Trying to modify the start time on an Offering that already started
  - Trying to modify anything on an Offering that already ended
  - Trying to change start or end time to a past date

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call [modifyTimes.checkAuthorization](../interfaces/proceduremethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

**Parameters:**

Name | Type |
------ | ------ |
`args` | ModifyStoTimesParams |
`opts?` | [ProcedureOpts](../interfaces/procedureopts.md) |

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

___

###  toJson

▸ **toJson**(): *[HumanReadable](../interfaces/humanreadable.md)*

*Overrides [Entity](entity.md).[toJson](entity.md#abstract-tojson)*

*Defined in [src/api/entities/Offering/index.ts:296](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/api/entities/Offering/index.ts#L296)*

Return the Offering's ID and Asset ticker

**Returns:** *[HumanReadable](../interfaces/humanreadable.md)*

___

###  unfreeze

▸ **unfreeze**(`opts?`: [ProcedureOpts](../interfaces/procedureopts.md)): *Promise‹[TransactionQueue](transactionqueue.md)‹[Offering](offering.md)››*

*Defined in [src/api/entities/Offering/index.ts:179](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/api/entities/Offering/index.ts#L179)*

Unfreeze the Offering

**`note`** this method is of type [NoArgsProcedureMethod](../interfaces/noargsproceduremethod.md), which means you can call [unfreeze.checkAuthorization](../interfaces/noargsproceduremethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

**Parameters:**

Name | Type |
------ | ------ |
`opts?` | [ProcedureOpts](../interfaces/procedureopts.md) |

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹[Offering](offering.md)››*

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
