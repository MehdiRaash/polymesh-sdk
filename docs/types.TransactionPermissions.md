# Interface: TransactionPermissions

[types](../wiki/types).TransactionPermissions

Permissions related to Transactions. Can include/exclude individual transactions or entire modules

## Hierarchy

- [`SectionPermissions`](../wiki/types.SectionPermissions)<[`TxTag`](../wiki/generated.types#txtag) \| [`ModuleName`](../wiki/generated.types.ModuleName)\>

  ↳ **`TransactionPermissions`**

## Table of contents

### Properties

- [exceptions](../wiki/types.TransactionPermissions#exceptions)
- [type](../wiki/types.TransactionPermissions#type)
- [values](../wiki/types.TransactionPermissions#values)

## Properties

### exceptions

• `Optional` **exceptions**: [`TxTag`](../wiki/generated.types#txtag)[]

Transactions to be exempted from inclusion/exclusion. This allows more granularity when
  setting permissions. For example, let's say we want to include only the `asset` and `staking` modules,
  but exclude the `asset.registerTicker` transaction. We could add both modules to `values`, and add
  `TxTags.asset.registerTicker` to `exceptions`

#### Defined in

[types/index.ts:971](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d2/src/types/index.ts#L971)

___

### type

• **type**: [`PermissionType`](../wiki/types.PermissionType)

Whether the permissions are inclusive or exclusive

#### Inherited from

[SectionPermissions](../wiki/types.SectionPermissions).[type](../wiki/types.SectionPermissions#type)

#### Defined in

[types/index.ts:958](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d2/src/types/index.ts#L958)

___

### values

• **values**: ([`TxTag`](../wiki/generated.types#txtag) \| [`ModuleName`](../wiki/generated.types.ModuleName))[]

Values to be included/excluded

#### Inherited from

[SectionPermissions](../wiki/types.SectionPermissions).[values](../wiki/types.SectionPermissions#values)

#### Defined in

[types/index.ts:954](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d2/src/types/index.ts#L954)
