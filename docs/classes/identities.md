# Class: Identities

Handles all Identity related functionality

## Hierarchy

* **Identities**

## Index

### Methods

* [createPortfolio](identities.md#createportfolio)
* [getIdentity](identities.md#getidentity)
* [isIdentityValid](identities.md#isidentityvalid)
* [registerIdentity](identities.md#registeridentity)

## Methods

###  createPortfolio

▸ **createPortfolio**(`args`: object, `opts?`: [ProcedureOpts](../interfaces/procedureopts.md)): *Promise‹[TransactionQueue](transactionqueue.md)‹[NumberedPortfolio](numberedportfolio.md)››*

*Defined in [src/Identities.ts:61](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/Identities.ts#L61)*

Create a new Portfolio under the ownership of the signing Identity

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call [createPortfolio.checkAuthorization](../interfaces/proceduremethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

**Parameters:**

▪ **args**: *object*

Name | Type |
------ | ------ |
`name` | string |

▪`Optional`  **opts**: *[ProcedureOpts](../interfaces/procedureopts.md)*

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹[NumberedPortfolio](numberedportfolio.md)››*

___

###  getIdentity

▸ **getIdentity**(`args`: object): *Promise‹[Identity](identity.md)›*

*Defined in [src/Identities.ts:70](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/Identities.ts#L70)*

Create an Identity instance from a DID

**`throws`** if there is no Identity with the passed DID

**Parameters:**

▪ **args**: *object*

Name | Type |
------ | ------ |
`did` | string |

**Returns:** *Promise‹[Identity](identity.md)›*

___

###  isIdentityValid

▸ **isIdentityValid**(`args`: object): *Promise‹boolean›*

*Defined in [src/Identities.ts:77](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/Identities.ts#L77)*

Return whether the supplied Identity/DID exists

**Parameters:**

▪ **args**: *object*

Name | Type |
------ | ------ |
`identity` | [Identity](identity.md) &#124; string |

**Returns:** *Promise‹boolean›*

___

###  registerIdentity

▸ **registerIdentity**(`args`: [RegisterIdentityParams](../interfaces/registeridentityparams.md), `opts?`: [ProcedureOpts](../interfaces/procedureopts.md)): *Promise‹[TransactionQueue](transactionqueue.md)‹[Identity](identity.md)››*

*Defined in [src/Identities.ts:51](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/Identities.ts#L51)*

Register an Identity

**`note`** must be a CDD provider

**`note`** this may create [Authorization Requests](authorizationrequest.md) which have to be accepted by the `targetAccount`.
  An [Account](../enums/signertype.md#account) or [Identity](../enums/roletype.md#identity) can fetch its pending Authorization Requests by calling [authorizations.getReceived](authorizations.md#getreceived).
  Also, an Account or Identity can directly fetch the details of an Authorization Request by calling [authorizations.getOne](authorizations.md#getone)

**`note`** required role:
  - Customer Due Diligence Provider

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call [registerIdentity.checkAuthorization](../interfaces/proceduremethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

**Parameters:**

Name | Type |
------ | ------ |
`args` | [RegisterIdentityParams](../interfaces/registeridentityparams.md) |
`opts?` | [ProcedureOpts](../interfaces/procedureopts.md) |

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹[Identity](identity.md)››*
