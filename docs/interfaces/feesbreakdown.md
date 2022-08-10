# Interface: FeesBreakdown

Breakdown of transaction fees for a Transaction Queue. In most cases, the entirety of the Queue's fees
  will be paid by either the signing Account or a third party. In some rare cases,
  fees can be split between them (for example, if the signing Account is being subsidized, but one of the
  transactions in the queue terminates the subsidy, leaving the signing Account with the responsibility of
  paying for the rest of the transactions)

## Hierarchy

* **FeesBreakdown**

## Index

### Properties

* [accountBalance](feesbreakdown.md#accountbalance)
* [accountFees](feesbreakdown.md#accountfees)
* [thirdPartyFees](feesbreakdown.md#thirdpartyfees)

## Properties

###  accountBalance

• **accountBalance**: *BigNumber*

*Defined in [src/types/index.ts:762](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/types/index.ts#L762)*

free balance of the caller Account

___

###  accountFees

• **accountFees**: *[Fees](fees.md)*

*Defined in [src/types/index.ts:758](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/types/index.ts#L758)*

fees that must be paid by the caller Account

___

###  thirdPartyFees

• **thirdPartyFees**: *[ThirdPartyFees](thirdpartyfees.md)[]*

*Defined in [src/types/index.ts:754](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/types/index.ts#L754)*

fees that will be paid by third parties. Each element in the array represents
  a different third party Account, their corresponding fees, allowances and balance
