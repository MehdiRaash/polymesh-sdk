# Enumeration: PayingAccountType

Type of relationship between a paying account and a beneficiary

## Index

### Enumeration members

* [Other](payingaccounttype.md#other)
* [Subsidy](payingaccounttype.md#subsidy)

## Enumeration members

###  Other

• **Other**: = "Other"

*Defined in [src/types/index.ts:718](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/types/index.ts#L718)*

the paying Account is paying for a specific transaction because of
  chain-specific constraints (i.e. the caller is accepting an invitation to an Identity
  and cannot have any funds to pay for it by definition)

___

###  Subsidy

• **Subsidy**: = "Subsidy"

*Defined in [src/types/index.ts:712](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/types/index.ts#L712)*

the paying Account is currently subsidizing the caller
