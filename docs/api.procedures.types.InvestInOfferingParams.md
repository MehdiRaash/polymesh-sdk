# Interface: InvestInOfferingParams

[api/procedures/types](../wiki/api.procedures.types).InvestInOfferingParams

## Table of contents

### Properties

- [fundingPortfolio](../wiki/api.procedures.types.InvestInOfferingParams#fundingportfolio)
- [maxPrice](../wiki/api.procedures.types.InvestInOfferingParams#maxprice)
- [purchaseAmount](../wiki/api.procedures.types.InvestInOfferingParams#purchaseamount)
- [purchasePortfolio](../wiki/api.procedures.types.InvestInOfferingParams#purchaseportfolio)

## Properties

### fundingPortfolio

• **fundingPortfolio**: [`PortfolioLike`](../wiki/types#portfoliolike)

portfolio from which funds will be withdrawn to pay for the Asset tokens

#### Defined in

[api/procedures/types.ts:849](https://github.com/PolymeshAssociation/polymesh-sdk/blob/16e8c2ca/src/api/procedures/types.ts#L849)

___

### maxPrice

• `Optional` **maxPrice**: `BigNumber`

maximum average price to pay per Asset token (optional)

#### Defined in

[api/procedures/types.ts:857](https://github.com/PolymeshAssociation/polymesh-sdk/blob/16e8c2ca/src/api/procedures/types.ts#L857)

___

### purchaseAmount

• **purchaseAmount**: `BigNumber`

amount of Asset tokens to purchase

#### Defined in

[api/procedures/types.ts:853](https://github.com/PolymeshAssociation/polymesh-sdk/blob/16e8c2ca/src/api/procedures/types.ts#L853)

___

### purchasePortfolio

• **purchasePortfolio**: [`PortfolioLike`](../wiki/types#portfoliolike)

portfolio in which the purchased Asset tokens will be stored

#### Defined in

[api/procedures/types.ts:845](https://github.com/PolymeshAssociation/polymesh-sdk/blob/16e8c2ca/src/api/procedures/types.ts#L845)
