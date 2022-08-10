# Interface: InvestInOfferingParams

## Hierarchy

* **InvestInOfferingParams**

## Index

### Properties

* [fundingPortfolio](investinofferingparams.md#fundingportfolio)
* [maxPrice](investinofferingparams.md#optional-maxprice)
* [purchaseAmount](investinofferingparams.md#purchaseamount)
* [purchasePortfolio](investinofferingparams.md#purchaseportfolio)

## Properties

###  fundingPortfolio

• **fundingPortfolio**: *[PortfolioLike](../globals.md#portfoliolike)*

*Defined in [src/api/procedures/investInOffering.ts:32](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/api/procedures/investInOffering.ts#L32)*

portfolio from which funds will be withdrawn to pay for the Asset tokens

___

### `Optional` maxPrice

• **maxPrice**? : *BigNumber*

*Defined in [src/api/procedures/investInOffering.ts:40](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/api/procedures/investInOffering.ts#L40)*

maximum average price to pay per Asset token (optional)

___

###  purchaseAmount

• **purchaseAmount**: *BigNumber*

*Defined in [src/api/procedures/investInOffering.ts:36](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/api/procedures/investInOffering.ts#L36)*

amount of Asset tokens to purchase

___

###  purchasePortfolio

• **purchasePortfolio**: *[PortfolioLike](../globals.md#portfoliolike)*

*Defined in [src/api/procedures/investInOffering.ts:28](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/api/procedures/investInOffering.ts#L28)*

portfolio in which the purchased Asset tokens will be stored
