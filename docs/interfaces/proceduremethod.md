# Interface: ProcedureMethod ‹**MethodArgs, ProcedureReturnValue, ReturnValue**›

## Type parameters

▪ **MethodArgs**

▪ **ProcedureReturnValue**

▪ **ReturnValue**

## Hierarchy

* **ProcedureMethod**

## Callable

▸ (`args`: MethodArgs, `opts?`: [ProcedureOpts](procedureopts.md)): *Promise‹[TransactionQueue](../classes/transactionqueue.md)‹ProcedureReturnValue, ReturnValue››*

*Defined in [src/types/index.ts:1340](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/types/index.ts#L1340)*

**Parameters:**

Name | Type |
------ | ------ |
`args` | MethodArgs |
`opts?` | [ProcedureOpts](procedureopts.md) |

**Returns:** *Promise‹[TransactionQueue](../classes/transactionqueue.md)‹ProcedureReturnValue, ReturnValue››*

## Index

### Properties

* [checkAuthorization](proceduremethod.md#checkauthorization)

## Properties

###  checkAuthorization

• **checkAuthorization**: *function*

*Defined in [src/types/index.ts:1344](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/types/index.ts#L1344)*

#### Type declaration:

▸ (`args`: MethodArgs, `opts?`: [ProcedureOpts](procedureopts.md)): *Promise‹[ProcedureAuthorizationStatus](procedureauthorizationstatus.md)›*

**Parameters:**

Name | Type |
------ | ------ |
`args` | MethodArgs |
`opts?` | [ProcedureOpts](procedureopts.md) |
