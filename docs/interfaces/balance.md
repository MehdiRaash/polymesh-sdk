# Interface: Balance

## Hierarchy

* **Balance**

  ↳ [PortfolioBalance](portfoliobalance.md)

## Index

### Properties

* [free](balance.md#free)
* [locked](balance.md#locked)
* [total](balance.md#total)

## Properties

###  free

• **free**: *BigNumber*

*Defined in [src/types/index.ts:654](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/types/index.ts#L654)*

balance available for transferring and paying fees

___

###  locked

• **locked**: *BigNumber*

*Defined in [src/types/index.ts:658](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/types/index.ts#L658)*

unavailable balance, either bonded for staking or locked for some other purpose

___

###  total

• **total**: *BigNumber*

*Defined in [src/types/index.ts:662](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/types/index.ts#L662)*

free + locked
