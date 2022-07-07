# Class: Checkpoints

Handles all Asset Checkpoints related functionality

## Hierarchy

* Namespace‹[Asset](asset.md)›

  ↳ **Checkpoints**

## Index

### Properties

* [context](checkpoints.md#protected-context)
* [parent](checkpoints.md#protected-parent)
* [schedules](checkpoints.md#schedules)

### Methods

* [create](checkpoints.md#create)
* [get](checkpoints.md#get)
* [getOne](checkpoints.md#getone)

## Properties

### `Protected` context

• **context**: *Context*

*Inherited from void*

*Defined in [src/api/entities/Namespace.ts:11](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/entities/Namespace.ts#L11)*

___

### `Protected` parent

• **parent**: *[Asset](asset.md)*

*Inherited from void*

*Defined in [src/api/entities/Namespace.ts:9](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/entities/Namespace.ts#L9)*

___

###  schedules

• **schedules**: *[Schedules](schedules.md)*

*Defined in [src/api/entities/Asset/Checkpoints/index.ts:29](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/entities/Asset/Checkpoints/index.ts#L29)*

## Methods

###  create

▸ **create**(`opts?`: [ProcedureOpts](../interfaces/procedureopts.md)): *Promise‹[TransactionQueue](transactionqueue.md)‹[Checkpoint](checkpoint.md)››*

*Defined in [src/api/entities/Asset/Checkpoints/index.ts:53](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/entities/Asset/Checkpoints/index.ts#L53)*

Create a snapshot of Asset Holders and their respective balances at this moment

**`note`** this method is of type [NoArgsProcedureMethod](../interfaces/noargsproceduremethod.md), which means you can call [create.checkAuthorization](../interfaces/noargsproceduremethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

**Parameters:**

Name | Type |
------ | ------ |
`opts?` | [ProcedureOpts](../interfaces/procedureopts.md) |

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹[Checkpoint](checkpoint.md)››*

___

###  get

▸ **get**(`paginationOpts?`: [PaginationOptions](../interfaces/paginationoptions.md)): *Promise‹[ResultSet](../interfaces/resultset.md)‹[CheckpointWithData](../interfaces/checkpointwithdata.md)››*

*Defined in [src/api/entities/Asset/Checkpoints/index.ts:87](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/entities/Asset/Checkpoints/index.ts#L87)*

Retrieve all Checkpoints created on this Asset, together with their corresponding creation Date and Total Supply

**`note`** supports pagination

**Parameters:**

Name | Type |
------ | ------ |
`paginationOpts?` | [PaginationOptions](../interfaces/paginationoptions.md) |

**Returns:** *Promise‹[ResultSet](../interfaces/resultset.md)‹[CheckpointWithData](../interfaces/checkpointwithdata.md)››*

___

###  getOne

▸ **getOne**(`args`: object): *Promise‹[Checkpoint](checkpoint.md)›*

*Defined in [src/api/entities/Asset/Checkpoints/index.ts:62](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/entities/Asset/Checkpoints/index.ts#L62)*

Retrieve a single Checkpoint for this Asset by its ID

**`throws`** if there is no Checkpoint with the passed ID

**Parameters:**

▪ **args**: *object*

Name | Type |
------ | ------ |
`id` | BigNumber |

**Returns:** *Promise‹[Checkpoint](checkpoint.md)›*
