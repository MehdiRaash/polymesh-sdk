# Interface: MoveFundsParams

[api/procedures/types](../wiki/api.procedures.types).MoveFundsParams

## Table of contents

### Properties

- [items](../wiki/api.procedures.types.MoveFundsParams#items)
- [to](../wiki/api.procedures.types.MoveFundsParams#to)

## Properties

### items

• **items**: [`PortfolioMovement`](../wiki/types.PortfolioMovement)[]

list of Assets (and the corresponding token amounts) that will be moved

#### Defined in

[api/procedures/types.ts:927](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46129005/src/api/procedures/types.ts#L927)

___

### to

• `Optional` **to**: `BigNumber` \| [`NumberedPortfolio`](../wiki/api.entities.NumberedPortfolio.NumberedPortfolio) \| [`DefaultPortfolio`](../wiki/api.entities.DefaultPortfolio.DefaultPortfolio)

portfolio (or portfolio ID) that will receive the funds. Optional, if no value is passed, the funds will be moved to the default Portfolio of this Portfolio's owner

#### Defined in

[api/procedures/types.ts:923](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46129005/src/api/procedures/types.ts#L923)
