# Module: types/utils

## Table of contents

### Type Aliases

- [ArgsType](../wiki/types.utils#argstype)
- [Ensured](../wiki/types.utils#ensured)
- [EnsuredV2](../wiki/types.utils#ensuredv2)
- [HumanReadableType](../wiki/types.utils#humanreadabletype)
- [Modify](../wiki/types.utils#modify)
- [PaginatedQueryArgs](../wiki/types.utils#paginatedqueryargs)
- [QueryArgs](../wiki/types.utils#queryargs)
- [WithRequired](../wiki/types.utils#withrequired)

## Type Aliases

### ArgsType

Ƭ **ArgsType**<`T`\>: `T` extends (...`args`: infer A) => `unknown` ? `A` : `never`

Less strict version of Parameters<T>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[types/utils/index.ts:30](https://github.com/PolymeshAssociation/polymesh-sdk/blob/3d14e829/src/types/utils/index.ts#L30)

___

### Ensured

Ƭ **Ensured**<`T`, `K`\>: `Required`<`Pick`<`T`, `K`\>\>

Pick a single property from T and ensure it is defined

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `K` | extends keyof `T` |

#### Defined in

[types/utils/index.ts:78](https://github.com/PolymeshAssociation/polymesh-sdk/blob/3d14e829/src/types/utils/index.ts#L78)

___

### EnsuredV2

Ƭ **EnsuredV2**<`T`, `K`\>: `Required`<`Pick`<`T`, `K`\>\> & { [SubKey in K]: NonNullable<T[SubKey]\> }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `K` | extends keyof `T` |

#### Defined in

[types/utils/index.ts:80](https://github.com/PolymeshAssociation/polymesh-sdk/blob/3d14e829/src/types/utils/index.ts#L80)

___

### HumanReadableType

Ƭ **HumanReadableType**<`T`\>: `T` extends [`Entity`](../wiki/api.entities.Entity.Entity)<`unknown`, infer H\> ? [`HumanReadableType`](../wiki/types.utils#humanreadabletype)<`H`\> : `T` extends `BigNumber` ? `string` : `T` extends `Date` ? `string` : `T` extends `object` ? { [K in keyof T]: T[K] extends Entity<unknown, infer E\> ? HumanReadableType<E\> : HumanReadableType<T[K]\> } : `T`

Recursively traverse a type and transform its Entity properties into their
  human readable version (as if `.toHuman` had been called on all of them)

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[types/utils/index.ts:36](https://github.com/PolymeshAssociation/polymesh-sdk/blob/3d14e829/src/types/utils/index.ts#L36)

___

### Modify

Ƭ **Modify**<`T`, `R`\>: `Omit`<`T`, keyof `R`\> & `R`

Override T with the properties of R

#### Type parameters

| Name |
| :------ |
| `T` |
| `R` |

#### Defined in

[types/utils/index.ts:67](https://github.com/PolymeshAssociation/polymesh-sdk/blob/3d14e829/src/types/utils/index.ts#L67)

___

### PaginatedQueryArgs

Ƭ **PaginatedQueryArgs**<`T`\>: `T` & { `size?`: `number` ; `start?`: `number`  }

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[types/utils/index.ts:84](https://github.com/PolymeshAssociation/polymesh-sdk/blob/3d14e829/src/types/utils/index.ts#L84)

___

### QueryArgs

Ƭ **QueryArgs**<`T`, `K`\>: { [P in K]?: T[P] }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `K` | extends keyof `T` |

#### Defined in

[types/utils/index.ts:89](https://github.com/PolymeshAssociation/polymesh-sdk/blob/3d14e829/src/types/utils/index.ts#L89)

___

### WithRequired

Ƭ **WithRequired**<`T`, `K`\>: `T` & { [P in K]-?: T[P] }

Ensure a specific property of T is defined

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `K` | extends keyof `T` |

#### Defined in

[types/utils/index.ts:73](https://github.com/PolymeshAssociation/polymesh-sdk/blob/3d14e829/src/types/utils/index.ts#L73)
