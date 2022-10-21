# Enumeration: PayingAccountType

[types](../wiki/types).PayingAccountType

Type of relationship between a paying account and a beneficiary

## Table of contents

### Enumeration Members

- [Caller](../wiki/types.PayingAccountType#caller)
- [Other](../wiki/types.PayingAccountType#other)
- [Subsidy](../wiki/types.PayingAccountType#subsidy)

## Enumeration Members

### Caller

• **Caller** = ``"Caller"``

the caller Account is responsible of paying the fees

#### Defined in

[types/index.ts:751](https://github.com/PolymeshAssociation/polymesh-sdk/blob/16e8c2ca/src/types/index.ts#L751)

___

### Other

• **Other** = ``"Other"``

the paying Account is paying for a specific transaction because of
  chain-specific constraints (e.g. the caller is accepting an invitation to an Identity
  and cannot have any funds to pay for it by definition)

#### Defined in

[types/index.ts:747](https://github.com/PolymeshAssociation/polymesh-sdk/blob/16e8c2ca/src/types/index.ts#L747)

___

### Subsidy

• **Subsidy** = ``"Subsidy"``

the paying Account is currently subsidizing the caller

#### Defined in

[types/index.ts:741](https://github.com/PolymeshAssociation/polymesh-sdk/blob/16e8c2ca/src/types/index.ts#L741)
