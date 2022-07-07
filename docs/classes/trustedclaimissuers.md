# Class: TrustedClaimIssuers

Handles all Asset Default Trusted Claim Issuers related functionality

## Hierarchy

* Namespace‹[Asset](asset.md)›

  ↳ **TrustedClaimIssuers**

## Index

### Properties

* [context](trustedclaimissuers.md#protected-context)
* [parent](trustedclaimissuers.md#protected-parent)

### Methods

* [add](trustedclaimissuers.md#add)
* [get](trustedclaimissuers.md#get)
* [remove](trustedclaimissuers.md#remove)
* [set](trustedclaimissuers.md#set)

## Properties

### `Protected` context

• **context**: *Context*

*Inherited from void*

*Defined in [src/api/entities/Namespace.ts:11](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/entities/Namespace.ts#L11)*

___

### `Protected` parent

• **parent**: *[Asset](asset.md)*

*Inherited from void*

*Defined in [src/api/entities/Namespace.ts:9](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/entities/Namespace.ts#L9)*

## Methods

###  add

▸ **add**(`args`: [ModifyAssetTrustedClaimIssuersAddSetParams](../interfaces/modifyassettrustedclaimissuersaddsetparams.md), `opts?`: [ProcedureOpts](../interfaces/procedureopts.md)): *Promise‹[TransactionQueue](transactionqueue.md)‹[Asset](asset.md)››*

*Defined in [src/api/entities/Asset/Compliance/TrustedClaimIssuers.ts:91](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/entities/Asset/Compliance/TrustedClaimIssuers.ts#L91)*

Add the supplied Identities to the Asset's list of trusted claim issuers

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call [add.checkAuthorization](../interfaces/proceduremethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

**Parameters:**

Name | Type |
------ | ------ |
`args` | [ModifyAssetTrustedClaimIssuersAddSetParams](../interfaces/modifyassettrustedclaimissuersaddsetparams.md) |
`opts?` | [ProcedureOpts](../interfaces/procedureopts.md) |

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹[Asset](asset.md)››*

___

###  get

▸ **get**(): *Promise‹[TrustedClaimIssuer](../interfaces/trustedclaimissuer.md)‹true›[]›*

*Defined in [src/api/entities/Asset/Compliance/TrustedClaimIssuers.ts:110](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/entities/Asset/Compliance/TrustedClaimIssuers.ts#L110)*

Retrieve the current Default Trusted Claim Issuers of the Asset

**`note`** can be subscribed to

**Returns:** *Promise‹[TrustedClaimIssuer](../interfaces/trustedclaimissuer.md)‹true›[]›*

▸ **get**(`callback`: [SubCallback](../globals.md#subcallback)‹[TrustedClaimIssuer](../interfaces/trustedclaimissuer.md)‹true›[]›): *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

*Defined in [src/api/entities/Asset/Compliance/TrustedClaimIssuers.ts:111](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/entities/Asset/Compliance/TrustedClaimIssuers.ts#L111)*

**Parameters:**

Name | Type |
------ | ------ |
`callback` | [SubCallback](../globals.md#subcallback)‹[TrustedClaimIssuer](../interfaces/trustedclaimissuer.md)‹true›[]› |

**Returns:** *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

___

###  remove

▸ **remove**(`args`: [ModifyAssetTrustedClaimIssuersRemoveParams](../interfaces/modifyassettrustedclaimissuersremoveparams.md), `opts?`: [ProcedureOpts](../interfaces/procedureopts.md)): *Promise‹[TransactionQueue](transactionqueue.md)‹[Asset](asset.md)››*

*Defined in [src/api/entities/Asset/Compliance/TrustedClaimIssuers.ts:101](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/entities/Asset/Compliance/TrustedClaimIssuers.ts#L101)*

Remove the supplied Identities from the Asset's list of trusted claim issuers   *

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call [remove.checkAuthorization](../interfaces/proceduremethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

**Parameters:**

Name | Type |
------ | ------ |
`args` | [ModifyAssetTrustedClaimIssuersRemoveParams](../interfaces/modifyassettrustedclaimissuersremoveparams.md) |
`opts?` | [ProcedureOpts](../interfaces/procedureopts.md) |

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹[Asset](asset.md)››*

___

###  set

▸ **set**(`args`: [ModifyAssetTrustedClaimIssuersAddSetParams](../interfaces/modifyassettrustedclaimissuersaddsetparams.md), `opts?`: [ProcedureOpts](../interfaces/procedureopts.md)): *Promise‹[TransactionQueue](transactionqueue.md)‹[Asset](asset.md)››*

*Defined in [src/api/entities/Asset/Compliance/TrustedClaimIssuers.ts:81](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/entities/Asset/Compliance/TrustedClaimIssuers.ts#L81)*

Assign a new default list of trusted claim issuers to the Asset by replacing the existing ones with the list passed as a parameter

This requires two transactions

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call [set.checkAuthorization](../interfaces/proceduremethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

**Parameters:**

Name | Type |
------ | ------ |
`args` | [ModifyAssetTrustedClaimIssuersAddSetParams](../interfaces/modifyassettrustedclaimissuersaddsetparams.md) |
`opts?` | [ProcedureOpts](../interfaces/procedureopts.md) |

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹[Asset](asset.md)››*
