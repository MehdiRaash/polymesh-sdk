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

*Defined in [src/types/index.ts:721](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/types/index.ts#L721)*

Account that pays for the transaction

___

###  allowance

• **allowance**: *BigNumber | null*

*Inherited from [PayingAccount](payingaccount.md).[allowance](payingaccount.md#allowance)*

*Defined in [src/types/index.ts:725](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/types/index.ts#L725)*

total amount that will be paid for

___

###  balance

• **balance**: *BigNumber*

*Defined in [src/types/index.ts:739](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/types/index.ts#L739)*

free balance of the third party Account

___

###  fees

• **fees**: *[Fees](fees.md)*

*Defined in [src/types/index.ts:735](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/types/index.ts#L735)*

fees that will be paid by the third party Account

___

###  type

• **type**: *[PayingAccountType](../enums/payingaccounttype.md)*

*Inherited from [PayingAccount](payingaccount.md).[type](payingaccount.md#type)*

*Defined in [src/types/index.ts:717](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/types/index.ts#L717)*
