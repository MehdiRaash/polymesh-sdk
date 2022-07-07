# Interface: ThirdPartyFees

Breakdown of the fees that will be paid by a specific third party in a Transaction Queue

## Hierarchy

* [PayingAccount](payingaccount.md)

  ↳ **ThirdPartyFees**

## Index

### Properties

* [account](thirdpartyfees.md#account)
* [allowance](thirdpartyfees.md#allowance)
* [balance](thirdpartyfees.md#balance)
* [fees](thirdpartyfees.md#fees)
* [type](thirdpartyfees.md#type)

## Properties

###  account

• **account**: *[Account](../classes/account.md)*

*Inherited from [PayingAccount](payingaccount.md).[account](payingaccount.md#account)*

*Defined in [src/types/index.ts:730](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/types/index.ts#L730)*

Account that pays for the transaction

___

###  allowance

• **allowance**: *BigNumber | null*

*Inherited from [PayingAccount](payingaccount.md).[allowance](payingaccount.md#allowance)*

*Defined in [src/types/index.ts:734](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/types/index.ts#L734)*

total amount that will be paid for

___

###  balance

• **balance**: *BigNumber*

*Defined in [src/types/index.ts:748](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/types/index.ts#L748)*

free balance of the third party Account

___

###  fees

• **fees**: *[Fees](fees.md)*

*Defined in [src/types/index.ts:744](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/types/index.ts#L744)*

fees that will be paid by the third party Account

___

###  type

• **type**: *[PayingAccountType](../enums/payingaccounttype.md)*

*Inherited from [PayingAccount](payingaccount.md).[type](payingaccount.md#type)*

*Defined in [src/types/index.ts:726](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/types/index.ts#L726)*
