# Interface: PayingAccount

Represents a relationship in which a third party Account
  is paying for a transaction on behalf of the caller

## Hierarchy

* **PayingAccount**

  ↳ [ThirdPartyFees](thirdpartyfees.md)

## Index

### Properties

* [account](payingaccount.md#account)
* [allowance](payingaccount.md#allowance)
* [type](payingaccount.md#type)

## Properties

###  account

• **account**: *[Account](../classes/account.md)*

*Defined in [src/types/index.ts:721](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/types/index.ts#L721)*

Account that pays for the transaction

___

###  allowance

• **allowance**: *BigNumber | null*

*Defined in [src/types/index.ts:725](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/types/index.ts#L725)*

total amount that will be paid for

___

###  type

• **type**: *[PayingAccountType](../enums/payingaccounttype.md)*

*Defined in [src/types/index.ts:717](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/types/index.ts#L717)*
