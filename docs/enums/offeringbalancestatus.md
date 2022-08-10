# Enumeration: OfferingBalanceStatus

## Index

### Enumeration members

* [Available](offeringbalancestatus.md#available)
* [Residual](offeringbalancestatus.md#residual)
* [SoldOut](offeringbalancestatus.md#soldout)

## Enumeration members

###  Available

• **Available**: = "Available"

*Defined in [src/api/entities/Offering/types.ts:24](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/api/entities/Offering/types.ts#L24)*

There still are Asset tokens available for purchase

___

###  Residual

• **Residual**: = "Residual"

*Defined in [src/api/entities/Offering/types.ts:34](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/api/entities/Offering/types.ts#L34)*

There are remaining Asset tokens, but their added value is lower than the Offering's
  minimum investment, so they cannot be purchased. The Offering should be manually closed
  to retrieve them

___

###  SoldOut

• **SoldOut**: = "SoldOut"

*Defined in [src/api/entities/Offering/types.ts:28](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/api/entities/Offering/types.ts#L28)*

All Asset tokens in the Offering have been sold
