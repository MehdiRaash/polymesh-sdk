# Interface: SimplePermissions

[types](../wiki/types).SimplePermissions

This represents positive permissions (i.e. only "includes"). It is used
  for specifying procedure requirements and querying if an Account has certain
  permissions. Null values represent full permissions in that category

## Table of contents

### Properties

- [assets](../wiki/types.SimplePermissions#assets)
- [portfolios](../wiki/types.SimplePermissions#portfolios)
- [transactions](../wiki/types.SimplePermissions#transactions)

## Properties

### assets

• `Optional` **assets**: ``null`` \| [`Asset`](../wiki/api.entities.Asset.Asset)[]

list of required Asset permissions

#### Defined in

[types/index.ts:1022](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d2/src/types/index.ts#L1022)

___

### portfolios

• `Optional` **portfolios**: ``null`` \| ([`NumberedPortfolio`](../wiki/api.entities.NumberedPortfolio.NumberedPortfolio) \| [`DefaultPortfolio`](../wiki/api.entities.DefaultPortfolio.DefaultPortfolio))[]

#### Defined in

[types/index.ts:1028](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d2/src/types/index.ts#L1028)

___

### transactions

• `Optional` **transactions**: ``null`` \| [`TxTag`](../wiki/generated.types#txtag)[]

list of required Transaction permissions

#### Defined in

[types/index.ts:1026](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d2/src/types/index.ts#L1026)
