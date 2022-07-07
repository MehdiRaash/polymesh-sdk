# Interface: MoveFundsParams

## Hierarchy

* **MoveFundsParams**

## Index

### Properties

* [items](movefundsparams.md#items)
* [to](movefundsparams.md#optional-to)

## Properties

###  items

• **items**: *[PortfolioMovement](portfoliomovement.md)[]*

*Defined in [src/api/procedures/moveFunds.ts:22](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/procedures/moveFunds.ts#L22)*

list of Assets (and the corresponding token amounts) that will be moved

___

### `Optional` to

• **to**? : *BigNumber | [DefaultPortfolio](../classes/defaultportfolio.md) | [NumberedPortfolio](../classes/numberedportfolio.md)*

*Defined in [src/api/procedures/moveFunds.ts:18](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/procedures/moveFunds.ts#L18)*

portfolio (or portfolio ID) that will receive the funds. Optional, if no value is passed, the funds will be moved to the default Portfolio of this Portfolio's owner
