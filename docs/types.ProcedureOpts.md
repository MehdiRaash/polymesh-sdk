# Interface: ProcedureOpts

[types](../wiki/types).ProcedureOpts

## Table of contents

### Properties

- [nonce](../wiki/types.ProcedureOpts#nonce)
- [signingAccount](../wiki/types.ProcedureOpts#signingaccount)

## Properties

### nonce

• `Optional` **nonce**: `BigNumber` \| `Promise`<`BigNumber`\> \| () => `BigNumber` \| `Promise`<`BigNumber`\>

nonce value for signing the transaction

An [Account](../wiki/api.entities.Account.Account) can directly fetch its current nonce by calling [account.getCurrentNonce](../wiki/api.entities.Account.Account#getcurrentnonce). More information can be found at: https://polkadot.js.org/docs/api/cookbook/tx/#how-do-i-take-the-pending-tx-pool-into-account-in-my-nonce

**`Note`**

 the passed value can be either the nonce itself or a function that returns the nonce. This allows, for example, passing a closure that increases the returned value every time it's called, or a function that fetches the nonce from the chain or a different source

#### Defined in

[types/index.ts:1429](https://github.com/PolymeshAssociation/polymesh-sdk/blob/16e8c2ca/src/types/index.ts#L1429)

___

### signingAccount

• `Optional` **signingAccount**: `string` \| [`Account`](../wiki/api.entities.Account.Account)

Account or address of a signing key to replace the current one (for this procedure only)

#### Defined in

[types/index.ts:1420](https://github.com/PolymeshAssociation/polymesh-sdk/blob/16e8c2ca/src/types/index.ts#L1420)
