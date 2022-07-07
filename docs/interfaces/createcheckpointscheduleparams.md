# Interface: CreateCheckpointScheduleParams

## Hierarchy

* **CreateCheckpointScheduleParams**

## Index

### Properties

* [period](createcheckpointscheduleparams.md#period)
* [repetitions](createcheckpointscheduleparams.md#repetitions)
* [start](createcheckpointscheduleparams.md#start)

## Properties

###  period

• **period**: *[CalendarPeriod](calendarperiod.md) | null*

*Defined in [src/api/procedures/createCheckpointSchedule.ts:30](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/procedures/createCheckpointSchedule.ts#L30)*

The cadence with which to make Checkpoints.

**`note`** A null value indicates to create only one Checkpoint, regardless of repetitions specified. This can be used to schedule the creation of a Checkpoint in the future

___

###  repetitions

• **repetitions**: *BigNumber | null*

*Defined in [src/api/procedures/createCheckpointSchedule.ts:34](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/procedures/createCheckpointSchedule.ts#L34)*

The number of snapshots to take. A null value indicates snapshots should be made indefinitely

___

###  start

• **start**: *Date | null*

*Defined in [src/api/procedures/createCheckpointSchedule.ts:25](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/procedures/createCheckpointSchedule.ts#L25)*

The date from which to begin creating snapshots. A null value indicates immediately
