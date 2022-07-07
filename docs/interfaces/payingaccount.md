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

*Defined in [src/types/index.ts:730](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/types/index.ts#L730)*

Account that pays for the transaction

___

###  allowance

• **allowance**: *BigNumber | null*

*Defined in [src/types/index.ts:734](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/types/index.ts#L734)*

total amount that will be paid for

___

###  type

• **type**: *[PayingAccountType](../enums/payingaccounttype.md)*

*Defined in [src/types/index.ts:726](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/types/index.ts#L726)*
