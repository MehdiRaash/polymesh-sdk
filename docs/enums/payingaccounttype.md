# Enumeration: PayingAccountType

Type of relationship between a paying account and a beneficiary

## Index

### Enumeration members

* [Other](payingaccounttype.md#other)
* [Subsidy](payingaccounttype.md#subsidy)

## Enumeration members

###  Other

• **Other**: = "Other"

*Defined in [src/types/index.ts:709](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/types/index.ts#L709)*

the paying Account is paying for a specific transaction because of
  chain-specific constraints (i.e. the caller is accepting an invitation to an Identity
  and cannot have any funds to pay for it by definition)

___

###  Subsidy

• **Subsidy**: = "Subsidy"

*Defined in [src/types/index.ts:703](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/types/index.ts#L703)*

the paying Account is currently subsidizing the caller
