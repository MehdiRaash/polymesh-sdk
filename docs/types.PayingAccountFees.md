# Interface: PayingAccountFees

[types](../wiki/types).PayingAccountFees

Breakdown of the fees that will be paid by a specific Account for a transaction, along
  with data associated to the Paying account

## Table of contents

### Properties

- [fees](../wiki/types.PayingAccountFees#fees)
- [payingAccountData](../wiki/types.PayingAccountFees#payingaccountdata)

## Properties

### fees

• **fees**: [`Fees`](../wiki/types.Fees)

fees that will be paid by the Account

#### Defined in

[types/index.ts:824](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d2/src/types/index.ts#L824)

___

### payingAccountData

• **payingAccountData**: { `account`: [`Account`](../wiki/api.entities.Account.Account) ; `allowance`: `BigNumber` ; `type`: [`Subsidy`](../wiki/types.PayingAccountType#subsidy)  } & { `balance`: `BigNumber`  } & { `account`: [`Account`](../wiki/api.entities.Account.Account) ; `type`: [`Other`](../wiki/types.PayingAccountType#other) \| [`Caller`](../wiki/types.PayingAccountType#caller)  } & { `balance`: `BigNumber`  }

data related to the Account responsible of paying for the transaction

#### Defined in

[types/index.ts:828](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d2/src/types/index.ts#L828)
