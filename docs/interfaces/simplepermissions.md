# Interface: SimplePermissions

This represents positive permissions (i.e. only "includes"). It is used
  for specifying procedure requirements and querying if an Account has certain
  permissions. Null values represent full permissions in that category

## Hierarchy

* **SimplePermissions**

## Index

### Properties

* [assets](simplepermissions.md#optional-assets)
* [portfolios](simplepermissions.md#optional-portfolios)
* [transactions](simplepermissions.md#optional-transactions)

## Properties

### `Optional` assets

• **assets**? : *[Asset](../classes/asset.md)[] | null*

*Defined in [src/types/index.ts:947](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/types/index.ts#L947)*

list of required Asset permissions

___

### `Optional` portfolios

• **portfolios**? : *([DefaultPortfolio](../classes/defaultportfolio.md)‹› | [NumberedPortfolio](../classes/numberedportfolio.md)‹›)[] | null*

*Defined in [src/types/index.ts:953](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/types/index.ts#L953)*

___

### `Optional` transactions

• **transactions**? : *TxTag[] | null*

*Defined in [src/types/index.ts:951](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/types/index.ts#L951)*

list of required Transaction permissions
