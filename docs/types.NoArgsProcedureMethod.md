# Interface: NoArgsProcedureMethod<ProcedureReturnValue, ReturnValue\>

[types](../wiki/types).NoArgsProcedureMethod

## Type parameters

| Name | Type |
| :------ | :------ |
| `ProcedureReturnValue` | `ProcedureReturnValue` |
| `ReturnValue` | `ProcedureReturnValue` |

## Callable

### NoArgsProcedureMethod

▸ **NoArgsProcedureMethod**(`opts?`): `Promise`<`TransactionQueue`<`ProcedureReturnValue`, `ReturnValue`, `unknown`[][]\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`ProcedureOpts`](../wiki/types.ProcedureOpts) |

#### Returns

`Promise`<`TransactionQueue`<`ProcedureReturnValue`, `ReturnValue`, `unknown`[][]\>\>

## Table of contents

### Properties

- [checkAuthorization](../wiki/types.NoArgsProcedureMethod#checkauthorization)

## Properties

### checkAuthorization

• **checkAuthorization**: (`opts?`: [`ProcedureOpts`](../wiki/types.ProcedureOpts)) => `Promise`<[`ProcedureAuthorizationStatus`](../wiki/types.ProcedureAuthorizationStatus)\>

#### Type declaration

▸ (`opts?`): `Promise`<[`ProcedureAuthorizationStatus`](../wiki/types.ProcedureAuthorizationStatus)\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`ProcedureOpts`](../wiki/types.ProcedureOpts) |

##### Returns

`Promise`<[`ProcedureAuthorizationStatus`](../wiki/types.ProcedureAuthorizationStatus)\>

#### Defined in

[types/index.ts:1462](https://github.com/PolymeshAssociation/polymesh-sdk/blob/3d14e829/src/types/index.ts#L1462)
