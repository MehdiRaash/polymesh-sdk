# Class: TickerReservation

Represents a reserved Asset symbol in the Polymesh blockchain. Ticker reservations expire
  after a set length of time, after which they can be reserved by another Identity.
  A Ticker must be previously reserved by an Identity for that Identity to be able create an Asset with it

## Hierarchy

* [Entity](entity.md)‹UniqueIdentifiers, string›

  ↳ **TickerReservation**

## Index

### Properties

* [context](tickerreservation.md#protected-context)
* [ticker](tickerreservation.md#ticker)
* [uuid](tickerreservation.md#uuid)

### Methods

* [createAsset](tickerreservation.md#createasset)
* [details](tickerreservation.md#details)
* [exists](tickerreservation.md#exists)
* [extend](tickerreservation.md#extend)
* [isEqual](tickerreservation.md#isequal)
* [toHuman](tickerreservation.md#tohuman)
* [transferOwnership](tickerreservation.md#transferownership)
* [generateUuid](tickerreservation.md#static-generateuuid)
* [unserialize](tickerreservation.md#static-unserialize)

## Properties

### `Protected` context

• **context**: *Context*

*Inherited from [CheckpointSchedule](checkpointschedule.md).[context](checkpointschedule.md#protected-context)*

*Defined in [src/api/entities/Entity.ts:48](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/entities/Entity.ts#L48)*

___

###  ticker

• **ticker**: *string*

*Defined in [src/api/entities/TickerReservation/index.ts:51](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/entities/TickerReservation/index.ts#L51)*

reserved ticker

___

###  uuid

• **uuid**: *string*

*Inherited from [CheckpointSchedule](checkpointschedule.md).[uuid](checkpointschedule.md#uuid)*

*Defined in [src/api/entities/Entity.ts:46](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/entities/Entity.ts#L46)*

## Methods

###  createAsset

▸ **createAsset**(`args`: [CreateAssetParams](../interfaces/createassetparams.md), `opts?`: [ProcedureOpts](../interfaces/procedureopts.md)): *Promise‹[TransactionQueue](transactionqueue.md)‹[Asset](asset.md)››*

*Defined in [src/api/entities/TickerReservation/index.ts:196](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/entities/TickerReservation/index.ts#L196)*

Create an Asset using the reserved ticker

**`note`** required role:
  - Ticker Owner

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call [createAsset.checkAuthorization](../interfaces/proceduremethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

**Parameters:**

Name | Type |
------ | ------ |
`args` | [CreateAssetParams](../interfaces/createassetparams.md) |
`opts?` | [ProcedureOpts](../interfaces/procedureopts.md) |

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹[Asset](asset.md)››*

___

###  details

▸ **details**(): *Promise‹[TickerReservationDetails](../interfaces/tickerreservationdetails.md)›*

*Defined in [src/api/entities/TickerReservation/index.ts:91](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/entities/TickerReservation/index.ts#L91)*

Retrieve the Reservation's owner, expiry date and status

**`note`** can be subscribed to

**Returns:** *Promise‹[TickerReservationDetails](../interfaces/tickerreservationdetails.md)›*

▸ **details**(`callback`: [SubCallback](../globals.md#subcallback)‹[TickerReservationDetails](../interfaces/tickerreservationdetails.md)›): *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

*Defined in [src/api/entities/TickerReservation/index.ts:92](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/entities/TickerReservation/index.ts#L92)*

**Parameters:**

Name | Type |
------ | ------ |
`callback` | [SubCallback](../globals.md#subcallback)‹[TickerReservationDetails](../interfaces/tickerreservationdetails.md)› |

**Returns:** *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

___

###  exists

▸ **exists**(): *Promise‹boolean›*

*Overrides [Entity](entity.md).[exists](entity.md#abstract-exists)*

*Defined in [src/api/entities/TickerReservation/index.ts:221](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/entities/TickerReservation/index.ts#L221)*

Determine whether this Ticker Reservation exists on chain

**Returns:** *Promise‹boolean›*

___

###  extend

▸ **extend**(`opts?`: [ProcedureOpts](../interfaces/procedureopts.md)): *Promise‹[TransactionQueue](transactionqueue.md)‹[TickerReservation](tickerreservation.md)››*

*Defined in [src/api/entities/TickerReservation/index.ts:183](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/entities/TickerReservation/index.ts#L183)*

Extend the Reservation time period of the ticker for 60 days from now
to later use it in the creation of an Asset.

**`note`** required role:
  - Ticker Owner

**`note`** this method is of type [NoArgsProcedureMethod](../interfaces/noargsproceduremethod.md), which means you can call [extend.checkAuthorization](../interfaces/noargsproceduremethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

**Parameters:**

Name | Type |
------ | ------ |
`opts?` | [ProcedureOpts](../interfaces/procedureopts.md) |

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹[TickerReservation](tickerreservation.md)››*

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

###  toHuman

▸ **toHuman**(): *string*

*Overrides [Entity](entity.md).[toHuman](entity.md#abstract-tohuman)*

*Defined in [src/api/entities/TickerReservation/index.ts:234](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/entities/TickerReservation/index.ts#L234)*

Return the Reservation's ticker

**Returns:** *string*

___

###  transferOwnership

▸ **transferOwnership**(`args`: [TransferTickerOwnershipParams](../interfaces/transfertickerownershipparams.md), `opts?`: [ProcedureOpts](../interfaces/procedureopts.md)): *Promise‹[TransactionQueue](transactionqueue.md)‹[AuthorizationRequest](authorizationrequest.md)››*

*Defined in [src/api/entities/TickerReservation/index.ts:214](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/entities/TickerReservation/index.ts#L214)*

Transfer ownership of the Ticker Reservation to another Identity. This generates an authorization request that must be accepted
  by the target

**`note`** this will create [Authorization Request](authorizationrequest.md) which has to be accepted by the `target` Identity.
  An [Account](../enums/signertype.md#account) or [Identity](../enums/roletype.md#identity) can fetch its pending Authorization Requests by calling [authorizations.getReceived](authorizations.md#getreceived).
  Also, an Account or Identity can directly fetch the details of an Authorization Request by calling [authorizations.getOne](authorizations.md#getone)

**`note`** required role:
  - Ticker Owner

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call [transferOwnership.checkAuthorization](../interfaces/proceduremethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

**Parameters:**

Name | Type |
------ | ------ |
`args` | [TransferTickerOwnershipParams](../interfaces/transfertickerownershipparams.md) |
`opts?` | [ProcedureOpts](../interfaces/procedureopts.md) |

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹[AuthorizationRequest](authorizationrequest.md)››*

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
