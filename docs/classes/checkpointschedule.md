# Class: CheckpointSchedule

Represents a Checkpoint Schedule for an Asset. Schedules can be set up to create Checkpoints at regular intervals

## Hierarchy

* [Entity](entity.md)‹[UniqueIdentifiers](../interfaces/uniqueidentifiers.md), [HumanReadable](../interfaces/humanreadable.md)›

  ↳ **CheckpointSchedule**

## Index

### Properties

* [asset](checkpointschedule.md#asset)
* [complexity](checkpointschedule.md#complexity)
* [context](checkpointschedule.md#protected-context)
* [expiryDate](checkpointschedule.md#expirydate)
* [id](checkpointschedule.md#id)
* [period](checkpointschedule.md#period)
* [start](checkpointschedule.md#start)
* [uuid](checkpointschedule.md#uuid)

### Methods

* [details](checkpointschedule.md#details)
* [exists](checkpointschedule.md#exists)
* [getCheckpoints](checkpointschedule.md#getcheckpoints)
* [isEqual](checkpointschedule.md#isequal)
* [toHuman](checkpointschedule.md#tohuman)
* [generateUuid](checkpointschedule.md#static-generateuuid)
* [unserialize](checkpointschedule.md#static-unserialize)

## Properties

###  asset

• **asset**: *[Asset](asset.md)*

*Defined in [src/api/entities/CheckpointSchedule/index.ts:65](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/entities/CheckpointSchedule/index.ts#L65)*

Asset for which Checkpoints are scheduled

___

###  complexity

• **complexity**: *BigNumber*

*Defined in [src/api/entities/CheckpointSchedule/index.ts:87](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/entities/CheckpointSchedule/index.ts#L87)*

abstract measure of the complexity of this Schedule. Shorter periods translate into more complexity

___

### `Protected` context

• **context**: *Context*

*Inherited from [CheckpointSchedule](checkpointschedule.md).[context](checkpointschedule.md#protected-context)*

*Defined in [src/api/entities/Entity.ts:48](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/entities/Entity.ts#L48)*

___

###  expiryDate

• **expiryDate**: *Date | null*

*Defined in [src/api/entities/CheckpointSchedule/index.ts:82](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/entities/CheckpointSchedule/index.ts#L82)*

date at which the last Checkpoint will be created with this Schedule.
  A null value means that this Schedule never expires

___

###  id

• **id**: *BigNumber*

*Defined in [src/api/entities/CheckpointSchedule/index.ts:60](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/entities/CheckpointSchedule/index.ts#L60)*

schedule identifier number

___

###  period

• **period**: *[CalendarPeriod](../interfaces/calendarperiod.md) | null*

*Defined in [src/api/entities/CheckpointSchedule/index.ts:71](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/entities/CheckpointSchedule/index.ts#L71)*

how often this Schedule creates a Checkpoint. A null value means this Schedule
  creates a single Checkpoint and then expires

___

###  start

• **start**: *Date*

*Defined in [src/api/entities/CheckpointSchedule/index.ts:76](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/entities/CheckpointSchedule/index.ts#L76)*

first Checkpoint creation date

___

###  uuid

• **uuid**: *string*

*Inherited from [CheckpointSchedule](checkpointschedule.md).[uuid](checkpointschedule.md#uuid)*

*Defined in [src/api/entities/Entity.ts:46](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/entities/Entity.ts#L46)*

## Methods

###  details

▸ **details**(): *Promise‹[ScheduleDetails](../interfaces/scheduledetails.md)›*

*Defined in [src/api/entities/CheckpointSchedule/index.ts:123](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/entities/CheckpointSchedule/index.ts#L123)*

Retrieve information specific to this Schedule

**Returns:** *Promise‹[ScheduleDetails](../interfaces/scheduledetails.md)›*

___

###  exists

▸ **exists**(): *Promise‹boolean›*

*Overrides [Entity](entity.md).[exists](entity.md#abstract-exists)*

*Defined in [src/api/entities/CheckpointSchedule/index.ts:189](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/entities/CheckpointSchedule/index.ts#L189)*

Determine whether this Checkpoint Schedule exists on chain

**Returns:** *Promise‹boolean›*

___

###  getCheckpoints

▸ **getCheckpoints**(): *Promise‹[Checkpoint](checkpoint.md)[]›*

*Defined in [src/api/entities/CheckpointSchedule/index.ts:157](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/entities/CheckpointSchedule/index.ts#L157)*

Retrieve all Checkpoints created by this Schedule

**Returns:** *Promise‹[Checkpoint](checkpoint.md)[]›*

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

▸ **toHuman**(): *[HumanReadable](../interfaces/humanreadable.md)*

*Overrides [Entity](entity.md).[toHuman](entity.md#abstract-tohuman)*

*Defined in [src/api/entities/CheckpointSchedule/index.ts:211](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/entities/CheckpointSchedule/index.ts#L211)*

Return the Schedule's static data

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
