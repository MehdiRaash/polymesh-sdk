# Enumeration: AccountKeyType

[api/entities/Account/types](../wiki/api.entities.Account.types).AccountKeyType

Distinguishes MultiSig and Smart Contract accounts

## Table of contents

### Enumeration Members

- [MultiSig](../wiki/api.entities.Account.types.AccountKeyType#multisig)
- [Normal](../wiki/api.entities.Account.types.AccountKeyType#normal)
- [SmartContract](../wiki/api.entities.Account.types.AccountKeyType#smartcontract)

## Enumeration Members

### MultiSig

• **MultiSig** = ``"MultiSig"``

Account is a MultiSig. (i.e. multiple signatures are required to authorize transactions)

#### Defined in

[api/entities/Account/types.ts:21](https://github.com/PolymeshAssociation/polymesh-sdk/blob/07a4c5b0/src/api/entities/Account/types.ts#L21)

___

### Normal

• **Normal** = ``""``

Account is a standard type (e.g. corresponds to the public key of a sr25519 pair)

#### Defined in

[api/entities/Account/types.ts:17](https://github.com/PolymeshAssociation/polymesh-sdk/blob/07a4c5b0/src/api/entities/Account/types.ts#L17)

___

### SmartContract

• **SmartContract** = ``"SmartContract"``

Account represents a smart contract

#### Defined in

[api/entities/Account/types.ts:25](https://github.com/PolymeshAssociation/polymesh-sdk/blob/07a4c5b0/src/api/entities/Account/types.ts#L25)
