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

*Defined in [src/types/index.ts:663](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/types/index.ts#L663)*

balance available for transferring and paying fees

___

###  locked

• **locked**: *BigNumber*

*Defined in [src/types/index.ts:667](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/types/index.ts#L667)*

unavailable balance, either bonded for staking or locked for some other purpose

___

###  total

• **total**: *BigNumber*

*Defined in [src/types/index.ts:671](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/types/index.ts#L671)*

free + locked
