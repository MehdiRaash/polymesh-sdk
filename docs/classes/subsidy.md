# Class: Subsidy

Represents a Subsidy relationship on chain

## Hierarchy

* [Entity](entity.md)‹UniqueIdentifiers, HumanReadable›

  ↳ **Subsidy**

## Index

### Properties

* [beneficiary](subsidy.md#beneficiary)
* [context](subsidy.md#protected-context)
* [subsidizer](subsidy.md#subsidizer)
* [uuid](subsidy.md#uuid)

### Methods

* [decreaseAllowance](subsidy.md#decreaseallowance)
* [exists](subsidy.md#exists)
* [getAllowance](subsidy.md#getallowance)
* [increaseAllowance](subsidy.md#increaseallowance)
* [isEqual](subsidy.md#isequal)
* [quit](subsidy.md#quit)
* [setAllowance](subsidy.md#setallowance)
* [toJson](subsidy.md#tojson)
* [generateUuid](subsidy.md#static-generateuuid)
* [unserialize](subsidy.md#static-unserialize)

## Properties

###  beneficiary

• **beneficiary**: *[Account](account.md)*

*Defined in [src/api/entities/Subsidy/index.ts:51](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/api/entities/Subsidy/index.ts#L51)*

Account whose transactions are being paid for

___

### `Protected` context

• **context**: *Context*

*Inherited from [CheckpointSchedule](checkpointschedule.md).[context](checkpointschedule.md#protected-context)*

*Defined in [src/api/entities/Entity.ts:48](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/api/entities/Entity.ts#L48)*

___

###  subsidizer

• **subsidizer**: *[Account](account.md)*

*Defined in [src/api/entities/Subsidy/index.ts:55](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/api/entities/Subsidy/index.ts#L55)*

Account that is paying for the transactions

___

###  uuid

• **uuid**: *string*

*Inherited from [CheckpointSchedule](checkpointschedule.md).[uuid](checkpointschedule.md#uuid)*

*Defined in [src/api/entities/Entity.ts:46](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/api/entities/Entity.ts#L46)*

## Methods

###  decreaseAllowance

▸ **decreaseAllowance**(`args`: Pick‹[DecreaseAllowanceParams](../interfaces/decreaseallowanceparams.md), "allowance"›, `opts?`: [ProcedureOpts](../interfaces/procedureopts.md)): *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

*Defined in [src/api/entities/Subsidy/index.ts:176](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/api/entities/Subsidy/index.ts#L176)*

Decrease allowance for this Subsidy relationship

**`note`** Only the subsidizer is allowed to decrease the allowance

**`throws`** if the amount to decrease by is more than the existing allowance

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call [decreaseAllowance.checkAuthorization](../interfaces/proceduremethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

**Parameters:**

Name | Type |
------ | ------ |
`args` | Pick‹[DecreaseAllowanceParams](../interfaces/decreaseallowanceparams.md), "allowance"› |
`opts?` | [ProcedureOpts](../interfaces/procedureopts.md) |

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

___

###  exists

▸ **exists**(): *Promise‹boolean›*

*Overrides [Entity](entity.md).[exists](entity.md#abstract-exists)*

*Defined in [src/api/entities/Subsidy/index.ts:183](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/api/entities/Subsidy/index.ts#L183)*

Determine whether this Subsidy relationship exists on chain

**Returns:** *Promise‹boolean›*

___

###  getAllowance

▸ **getAllowance**(): *Promise‹BigNumber›*

*Defined in [src/api/entities/Subsidy/index.ts:202](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/api/entities/Subsidy/index.ts#L202)*

Get amount of POLYX subsidized for this Subsidy relationship

**`throws`** if the Subsidy does not exist

**Returns:** *Promise‹BigNumber›*

___

###  increaseAllowance

▸ **increaseAllowance**(`args`: Pick‹[IncreaseAllowanceParams](../interfaces/increaseallowanceparams.md), "allowance"›, `opts?`: [ProcedureOpts](../interfaces/procedureopts.md)): *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

*Defined in [src/api/entities/Subsidy/index.ts:162](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/api/entities/Subsidy/index.ts#L162)*

Increase allowance for this Subsidy relationship

**`note`** Only the subsidizer is allowed to increase the allowance

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call [increaseAllowance.checkAuthorization](../interfaces/proceduremethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

**Parameters:**

Name | Type |
------ | ------ |
`args` | Pick‹[IncreaseAllowanceParams](../interfaces/increaseallowanceparams.md), "allowance"› |
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

###  quit

▸ **quit**(`opts?`: [ProcedureOpts](../interfaces/procedureopts.md)): *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

*Defined in [src/api/entities/Subsidy/index.ts:136](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/api/entities/Subsidy/index.ts#L136)*

Terminate this Subsidy relationship. The beneficiary Account will be forced to pay for their own transactions

**`note`** both the beneficiary and the subsidizer are allowed to unilaterally quit the Subsidy

**`note`** this method is of type [NoArgsProcedureMethod](../interfaces/noargsproceduremethod.md), which means you can call [quit.checkAuthorization](../interfaces/noargsproceduremethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

**Parameters:**

Name | Type |
------ | ------ |
`opts?` | [ProcedureOpts](../interfaces/procedureopts.md) |

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

___

###  setAllowance

▸ **setAllowance**(`args`: Pick‹[SetAllowanceParams](../interfaces/setallowanceparams.md), "allowance"›, `opts?`: [ProcedureOpts](../interfaces/procedureopts.md)): *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

*Defined in [src/api/entities/Subsidy/index.ts:150](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/api/entities/Subsidy/index.ts#L150)*

Set allowance for this Subsidy relationship

**`note`** Only the subsidizer is allowed to set the allowance

**`throws`** if the allowance to set is equal to the current allowance

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call [setAllowance.checkAuthorization](../interfaces/proceduremethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

**Parameters:**

Name | Type |
------ | ------ |
`args` | Pick‹[SetAllowanceParams](../interfaces/setallowanceparams.md), "allowance"› |
`opts?` | [ProcedureOpts](../interfaces/procedureopts.md) |

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

___

###  toJson

▸ **toJson**(): *HumanReadable*

*Overrides [Entity](entity.md).[toJson](entity.md#abstract-tojson)*

*Defined in [src/api/entities/Subsidy/index.ts:224](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/api/entities/Subsidy/index.ts#L224)*

Return the Subsidy's static data

**Returns:** *HumanReadable*

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
