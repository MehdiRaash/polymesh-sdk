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

*Defined in [src/types/index.ts:956](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/types/index.ts#L956)*

list of required Asset permissions

___

### `Optional` portfolios

• **portfolios**? : *([DefaultPortfolio](../classes/defaultportfolio.md)‹› | [NumberedPortfolio](../classes/numberedportfolio.md)‹›)[] | null*

*Defined in [src/types/index.ts:962](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/types/index.ts#L962)*

___

### `Optional` transactions

• **transactions**? : *TxTag[] | null*

*Defined in [src/types/index.ts:960](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/types/index.ts#L960)*

list of required Transaction permissions
