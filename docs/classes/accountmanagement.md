# Class: AccountManagement

Handles functionality related to Account Management

## Hierarchy

* **AccountManagement**

## Index

### Methods

* [freezeSecondaryAccounts](accountmanagement.md#freezesecondaryaccounts)
* [getAccount](accountmanagement.md#getaccount)
* [getAccountBalance](accountmanagement.md#getaccountbalance)
* [getSigningAccount](accountmanagement.md#getsigningaccount)
* [getSigningAccounts](accountmanagement.md#getsigningaccounts)
* [inviteAccount](accountmanagement.md#inviteaccount)
* [leaveIdentity](accountmanagement.md#leaveidentity)
* [modifyPermissions](accountmanagement.md#modifypermissions)
* [removeSecondaryAccounts](accountmanagement.md#removesecondaryaccounts)
* [revokePermissions](accountmanagement.md#revokepermissions)
* [subsidizeAccount](accountmanagement.md#subsidizeaccount)
* [unfreezeSecondaryAccounts](accountmanagement.md#unfreezesecondaryaccounts)

## Methods

###  freezeSecondaryAccounts

▸ **freezeSecondaryAccounts**(`opts?`: [ProcedureOpts](../interfaces/procedureopts.md)): *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

*Defined in [src/AccountManagement.ts:161](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/AccountManagement.ts#L161)*

Freeze all of the secondary Accounts in the signing Identity. This means revoking their permission to perform any operation on the blockchain and freezing their funds until the Accounts are unfrozen via [unfreezeSecondaryAccounts](accountmanagement.md#unfreezesecondaryaccounts)

**`note`** this method is of type [NoArgsProcedureMethod](../interfaces/noargsproceduremethod.md), which means you can call [freezeSecondaryAccounts.checkAuthorization](../interfaces/noargsproceduremethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

**Parameters:**

Name | Type |
------ | ------ |
`opts?` | [ProcedureOpts](../interfaces/procedureopts.md) |

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

___

###  getAccount

▸ **getAccount**(`args`: object): *[Account](account.md)*

*Defined in [src/AccountManagement.ts:242](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/AccountManagement.ts#L242)*

Return an Account instance from an address

**Parameters:**

▪ **args**: *object*

Name | Type |
------ | ------ |
`address` | string |

**Returns:** *[Account](account.md)*

___

###  getAccountBalance

▸ **getAccountBalance**(`args?`: undefined | object): *Promise‹[AccountBalance](../globals.md#accountbalance)›*

*Defined in [src/AccountManagement.ts:196](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/AccountManagement.ts#L196)*

Get the free/locked POLYX balance of an Account

**`note`** can be subscribed to

**Parameters:**

Name | Type |
------ | ------ |
`args?` | undefined &#124; object |

**Returns:** *Promise‹[AccountBalance](../globals.md#accountbalance)›*

▸ **getAccountBalance**(`callback`: [SubCallback](../globals.md#subcallback)‹[AccountBalance](../globals.md#accountbalance)›): *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

*Defined in [src/AccountManagement.ts:197](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/AccountManagement.ts#L197)*

**Parameters:**

Name | Type |
------ | ------ |
`callback` | [SubCallback](../globals.md#subcallback)‹[AccountBalance](../globals.md#accountbalance)› |

**Returns:** *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

▸ **getAccountBalance**(`args`: object, `callback`: [SubCallback](../globals.md#subcallback)‹[AccountBalance](../globals.md#accountbalance)›): *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

*Defined in [src/AccountManagement.ts:198](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/AccountManagement.ts#L198)*

**Parameters:**

▪ **args**: *object*

Name | Type |
------ | ------ |
`account` | string &#124; [Account](account.md) |

▪ **callback**: *[SubCallback](../globals.md#subcallback)‹[AccountBalance](../globals.md#accountbalance)›*

**Returns:** *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

___

###  getSigningAccount

▸ **getSigningAccount**(): *[Account](account.md) | null*

*Defined in [src/AccountManagement.ts:251](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/AccountManagement.ts#L251)*

Return the signing Account, or null if no signing Account has been set

**Returns:** *[Account](account.md) | null*

___

###  getSigningAccounts

▸ **getSigningAccounts**(): *Promise‹[Account](account.md)[]›*

*Defined in [src/AccountManagement.ts:264](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/AccountManagement.ts#L264)*

Return a list that contains all the signing Accounts associated to the SDK instance's Signing Manager

**`throws`** — if there is no Signing Manager attached to the SDK

**Returns:** *Promise‹[Account](account.md)[]›*

___

###  inviteAccount

▸ **inviteAccount**(`args`: [InviteAccountParams](../interfaces/inviteaccountparams.md), `opts?`: [ProcedureOpts](../interfaces/procedureopts.md)): *Promise‹[TransactionQueue](transactionqueue.md)‹[AuthorizationRequest](authorizationrequest.md)››*

*Defined in [src/AccountManagement.ts:151](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/AccountManagement.ts#L151)*

Send an invitation to an Account to join the signing Identity as a secondary Account

**`note`** this will create an [Authorization Request](authorizationrequest.md) which has to be accepted by the `targetAccount`.
  An [Account](../enums/signertype.md#account) or [Identity](../enums/roletype.md#identity) can fetch its pending Authorization Requests by calling [authorizations.getReceived](authorizations.md#getreceived).
  Also, an Account or Identity can directly fetch the details of an Authorization Request by calling [authorizations.getOne](authorizations.md#getone)

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call [inviteAccount.checkAuthorization](../interfaces/proceduremethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

**Parameters:**

Name | Type |
------ | ------ |
`args` | [InviteAccountParams](../interfaces/inviteaccountparams.md) |
`opts?` | [ProcedureOpts](../interfaces/procedureopts.md) |

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹[AuthorizationRequest](authorizationrequest.md)››*

___

###  leaveIdentity

▸ **leaveIdentity**(`opts?`: [ProcedureOpts](../interfaces/procedureopts.md)): *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

*Defined in [src/AccountManagement.ts:107](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/AccountManagement.ts#L107)*

Disassociate the signing Account from its Identity. This operation can only be done if the signing Account is a secondary Account

**`note`** this method is of type [NoArgsProcedureMethod](../interfaces/noargsproceduremethod.md), which means you can call [leaveIdentity.checkAuthorization](../interfaces/noargsproceduremethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

**Parameters:**

Name | Type |
------ | ------ |
`opts?` | [ProcedureOpts](../interfaces/procedureopts.md) |

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

___

###  modifyPermissions

▸ **modifyPermissions**(`args`: [ModifySignerPermissionsParams](../interfaces/modifysignerpermissionsparams.md), `opts?`: [ProcedureOpts](../interfaces/procedureopts.md)): *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

*Defined in [src/AccountManagement.ts:137](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/AccountManagement.ts#L137)*

Modify all permissions of a list of secondary Accounts associated with the signing Identity

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call [modifyPermissions.checkAuthorization](../interfaces/proceduremethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

**Parameters:**

Name | Type |
------ | ------ |
`args` | [ModifySignerPermissionsParams](../interfaces/modifysignerpermissionsparams.md) |
`opts?` | [ProcedureOpts](../interfaces/procedureopts.md) |

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

___

###  removeSecondaryAccounts

▸ **removeSecondaryAccounts**(`args`: [RemoveSecondaryAccountsParams](../interfaces/removesecondaryaccountsparams.md), `opts?`: [ProcedureOpts](../interfaces/procedureopts.md)): *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

*Defined in [src/AccountManagement.ts:117](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/AccountManagement.ts#L117)*

Remove a list of secondary Accounts associated with the signing Identity

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call [removeSecondaryAccounts.checkAuthorization](../interfaces/proceduremethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

**Parameters:**

Name | Type |
------ | ------ |
`args` | [RemoveSecondaryAccountsParams](../interfaces/removesecondaryaccountsparams.md) |
`opts?` | [ProcedureOpts](../interfaces/procedureopts.md) |

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

___

###  revokePermissions

▸ **revokePermissions**(`args`: object, `opts?`: [ProcedureOpts](../interfaces/procedureopts.md)): *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

*Defined in [src/AccountManagement.ts:127](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/AccountManagement.ts#L127)*

Revoke all permissions of a list of secondary Accounts associated with the signing Identity

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call [revokePermissions.checkAuthorization](../interfaces/proceduremethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

**Parameters:**

▪ **args**: *object*

Name | Type |
------ | ------ |
`secondaryAccounts` | [Account](account.md)[] |

▪`Optional`  **opts**: *[ProcedureOpts](../interfaces/procedureopts.md)*

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

___

###  subsidizeAccount

▸ **subsidizeAccount**(`args`: [SubsidizeAccountParams](../interfaces/subsidizeaccountparams.md), `opts?`: [ProcedureOpts](../interfaces/procedureopts.md)): *Promise‹[TransactionQueue](transactionqueue.md)‹[AuthorizationRequest](authorizationrequest.md)››*

*Defined in [src/AccountManagement.ts:185](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/AccountManagement.ts#L185)*

Send an Authorization Request to an Account to subsidize its transaction fees

**`note`** this will create an [Authorization Request](authorizationrequest.md) which has to be accepted by the `beneficiary` Account.
  An [Account](../enums/signertype.md#account) or [Identity](../enums/roletype.md#identity) can fetch its pending Authorization Requests by calling [authorizations.getReceived](authorizations.md#getreceived).
  Also, an Account or Identity can directly fetch the details of an Authorization Request by calling [authorizations.getOne](authorizations.md#getone)

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call [subsidizeAccount.checkAuthorization](../interfaces/proceduremethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

**Parameters:**

Name | Type |
------ | ------ |
`args` | [SubsidizeAccountParams](../interfaces/subsidizeaccountparams.md) |
`opts?` | [ProcedureOpts](../interfaces/procedureopts.md) |

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹[AuthorizationRequest](authorizationrequest.md)››*

___

###  unfreezeSecondaryAccounts

▸ **unfreezeSecondaryAccounts**(`opts?`: [ProcedureOpts](../interfaces/procedureopts.md)): *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

*Defined in [src/AccountManagement.ts:171](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/AccountManagement.ts#L171)*

Unfreeze all of the secondary Accounts in the signing Identity. This will restore their permissions as they were before being frozen

**`note`** this method is of type [NoArgsProcedureMethod](../interfaces/noargsproceduremethod.md), which means you can call [unfreezeSecondaryAccounts.checkAuthorization](../interfaces/noargsproceduremethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

**Parameters:**

Name | Type |
------ | ------ |
`opts?` | [ProcedureOpts](../interfaces/procedureopts.md) |

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹void››*
