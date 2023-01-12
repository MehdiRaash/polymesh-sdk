# Interface: CreateCheckpointScheduleParams

[api/procedures/types](../wiki/api.procedures.types).CreateCheckpointScheduleParams

## Table of contents

### Properties

- [period](../wiki/api.procedures.types.CreateCheckpointScheduleParams#period)
- [repetitions](../wiki/api.procedures.types.CreateCheckpointScheduleParams#repetitions)
- [start](../wiki/api.procedures.types.CreateCheckpointScheduleParams#start)

## Properties

### period

• **period**: ``null`` \| [`CalendarPeriod`](../wiki/types.CalendarPeriod)

The cadence with which to make Checkpoints.

**`Note`**

 A null value indicates to create only one Checkpoint, regardless of repetitions specified. This can be used to schedule the creation of a Checkpoint in the future

#### Defined in

[api/procedures/types.ts:538](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46129005/src/api/procedures/types.ts#L538)

___

### repetitions

• **repetitions**: ``null`` \| `BigNumber`

The number of snapshots to take. A null value indicates snapshots should be made indefinitely

#### Defined in

[api/procedures/types.ts:542](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46129005/src/api/procedures/types.ts#L542)

___

### start

• **start**: ``null`` \| `Date`

The date from which to begin creating snapshots. A null value indicates immediately

#### Defined in

[api/procedures/types.ts:533](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46129005/src/api/procedures/types.ts#L533)
