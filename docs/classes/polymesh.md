# Class: Polymesh

Main entry point of the Polymesh SDK

## Hierarchy

* **Polymesh**

## Index

### Properties

* [accountManagement](polymesh.md#accountmanagement)
* [assets](polymesh.md#assets)
* [claims](polymesh.md#claims)
* [identities](polymesh.md#identities)
* [network](polymesh.md#network)
* [settlements](polymesh.md#settlements)

### Accessors

* [_middlewareApi](polymesh.md#_middlewareapi)
* [_polkadotApi](polymesh.md#_polkadotapi)
* [_signingAddress](polymesh.md#_signingaddress)

### Methods

* [disconnect](polymesh.md#disconnect)
* [getSigningIdentity](polymesh.md#getsigningidentity)
* [onConnectionError](polymesh.md#onconnectionerror)
* [onDisconnect](polymesh.md#ondisconnect)
* [setSigningAccount](polymesh.md#setsigningaccount)
* [setSigningManager](polymesh.md#setsigningmanager)
* [connect](polymesh.md#static-connect)

## Properties

###  accountManagement

• **accountManagement**: *[AccountManagement](accountmanagement.md)*

*Defined in [src/Polymesh.ts:53](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/Polymesh.ts#L53)*

A set of methods for managing a Polymesh Identity's Accounts and their permissions

___

###  assets

• **assets**: *[Assets](assets.md)*

*Defined in [src/Polymesh.ts:61](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/Polymesh.ts#L61)*

A set of methods for interacting with Assets

___

###  claims

• **claims**: *[Claims](claims.md)*

*Defined in [src/Polymesh.ts:41](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/Polymesh.ts#L41)*

A set of methods to deal with Claims

___

###  identities

• **identities**: *[Identities](identities.md)*

*Defined in [src/Polymesh.ts:57](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/Polymesh.ts#L57)*

A set of methods for interacting with Polymesh Identities.

___

###  network

• **network**: *[Network](network.md)*

*Defined in [src/Polymesh.ts:45](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/Polymesh.ts#L45)*

A set of methods to interact with the Polymesh network. This includes transferring POLYX, reading network properties and querying for historical events

___

###  settlements

• **settlements**: *Settlements*

*Defined in [src/Polymesh.ts:49](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/Polymesh.ts#L49)*

A set of methods for exchanging Assets

## Accessors

###  _middlewareApi

• **get _middlewareApi**(): *ApolloClient‹NormalizedCacheObject›*

*Defined in [src/Polymesh.ts:270](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/Polymesh.ts#L270)*

Middleware client

**Returns:** *ApolloClient‹NormalizedCacheObject›*

___

###  _polkadotApi

• **get _polkadotApi**(): *ApiPromise*

*Defined in [src/Polymesh.ts:254](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/Polymesh.ts#L254)*

Polkadot client

**Returns:** *ApiPromise*

___

###  _signingAddress

• **get _signingAddress**(): *string*

*Defined in [src/Polymesh.ts:262](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/Polymesh.ts#L262)*

signing address (to manually submit transactions with the polkadot API)

**Returns:** *string*

## Methods

###  disconnect

▸ **disconnect**(): *Promise‹void›*

*Defined in [src/Polymesh.ts:229](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/Polymesh.ts#L229)*

Disconnect the client and close all open connections and subscriptions

**`note`** the SDK will become unusable after this operation. It will throw an error when attempting to
  access any chain or middleware data. If you wish to continue using the SDK, you must
  create a new instance by calling [connect](polymesh.md#static-connect)

**Returns:** *Promise‹void›*

___

###  getSigningIdentity

▸ **getSigningIdentity**(): *Promise‹[Identity](identity.md) | null›*

*Defined in [src/Polymesh.ts:184](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/Polymesh.ts#L184)*

Retrieve the Identity associated to the signing Account (null if there is none)

**`throws`** if there is no signing Account associated to the SDK

**Returns:** *Promise‹[Identity](identity.md) | null›*

___

###  onConnectionError

▸ **onConnectionError**(`callback`: function): *function*

*Defined in [src/Polymesh.ts:193](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/Polymesh.ts#L193)*

Handle connection errors

**Parameters:**

▪ **callback**: *function*

▸ (...`args`: unknown[]): *unknown*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | unknown[] |

**Returns:** *function*

an unsubscribe callback

▸ (): *void*

___

###  onDisconnect

▸ **onDisconnect**(`callback`: function): *function*

*Defined in [src/Polymesh.ts:210](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/Polymesh.ts#L210)*

Handle disconnection

**Parameters:**

▪ **callback**: *function*

▸ (...`args`: unknown[]): *unknown*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | unknown[] |

**Returns:** *function*

an unsubscribe callback

▸ (): *void*

___

###  setSigningAccount

▸ **setSigningAccount**(`signer`: string | [Account](account.md)): *Promise‹void›*

*Defined in [src/Polymesh.ts:238](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/Polymesh.ts#L238)*

Set the SDK's signing Account to the provided one

**`throws`** if the passed Account is not present in the Signing Manager (or there is no Signing Manager)

**Parameters:**

Name | Type |
------ | ------ |
`signer` | string &#124; [Account](account.md) |

**Returns:** *Promise‹void›*

___

###  setSigningManager

▸ **setSigningManager**(`signingManager`: SigningManager): *Promise‹void›*

*Defined in [src/Polymesh.ts:245](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/Polymesh.ts#L245)*

Set the SDK's Signing Manager to the provided one

**Parameters:**

Name | Type |
------ | ------ |
`signingManager` | SigningManager |

**Returns:** *Promise‹void›*

___

### `Static` connect

▸ **connect**(`params`: [ConnectParams](../interfaces/connectparams.md)): *Promise‹[Polymesh](polymesh.md)›*

*Defined in [src/Polymesh.ts:86](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/Polymesh.ts#L86)*

Create an SDK instance and connect to a Polymesh node

**Parameters:**

Name | Type |
------ | ------ |
`params` | [ConnectParams](../interfaces/connectparams.md) |

**Returns:** *Promise‹[Polymesh](polymesh.md)›*
