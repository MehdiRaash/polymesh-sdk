# Class: Network

Handles all Network related functionality, including querying for historical events from middleware

## Hierarchy

* **Network**

## Index

### Methods

* [getEventByIndexedArgs](network.md#geteventbyindexedargs)
* [getEventsByIndexedArgs](network.md#geteventsbyindexedargs)
* [getLatestBlock](network.md#getlatestblock)
* [getNetworkProperties](network.md#getnetworkproperties)
* [getProtocolFees](network.md#getprotocolfees)
* [getSs58Format](network.md#getss58format)
* [getTransactionByHash](network.md#gettransactionbyhash)
* [getTreasuryAccount](network.md#gettreasuryaccount)
* [getTreasuryBalance](network.md#gettreasurybalance)
* [getVersion](network.md#getversion)
* [transferPolyx](network.md#transferpolyx)

## Methods

###  getEventByIndexedArgs

▸ **getEventByIndexedArgs**(`opts`: object): *Promise‹[EventIdentifier](../interfaces/eventidentifier.md) | null›*

*Defined in [src/Network.ts:155](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/Network.ts#L155)*

Retrieve a single event by any of its indexed arguments. Can be filtered using parameters

**`note`** uses the middleware

**Parameters:**

▪ **opts**: *object*

Name | Type | Description |
------ | ------ | ------ |
`eventArg0?` | undefined &#124; string | event parameter value to filter by in position 0 |
`eventArg1?` | undefined &#124; string | event parameter value to filter by in position 1 |
`eventArg2?` | undefined &#124; string | event parameter value to filter by in position 2  |
`eventId` | EventId | type of the event to fetch |
`moduleId` | ModuleId | type of the module to fetch |

**Returns:** *Promise‹[EventIdentifier](../interfaces/eventidentifier.md) | null›*

___

###  getEventsByIndexedArgs

▸ **getEventsByIndexedArgs**(`opts`: object): *Promise‹[EventIdentifier](../interfaces/eventidentifier.md)[] | null›*

*Defined in [src/Network.ts:194](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/Network.ts#L194)*

Retrieve a list of events. Can be filtered using parameters

**`note`** uses the middleware

**Parameters:**

▪ **opts**: *object*

Name | Type | Description |
------ | ------ | ------ |
`eventArg0?` | undefined &#124; string | event parameter value to filter by in position 0 |
`eventArg1?` | undefined &#124; string | event parameter value to filter by in position 1 |
`eventArg2?` | undefined &#124; string | event parameter value to filter by in position 2 |
`eventId` | EventId | type of the event to fetch |
`moduleId` | ModuleId | type of the module to fetch |
`size?` | BigNumber | page size |
`start?` | BigNumber | page offset  |

**Returns:** *Promise‹[EventIdentifier](../interfaces/eventidentifier.md)[] | null›*

___

###  getLatestBlock

▸ **getLatestBlock**(): *Promise‹BigNumber›*

*Defined in [src/Network.ts:49](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/Network.ts#L49)*

Retrieve the number of the latest block in the chain

**Returns:** *Promise‹BigNumber›*

___

###  getNetworkProperties

▸ **getNetworkProperties**(): *Promise‹[NetworkProperties](../interfaces/networkproperties.md)›*

*Defined in [src/Network.ts:70](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/Network.ts#L70)*

Retrieve information for the current network

**Returns:** *Promise‹[NetworkProperties](../interfaces/networkproperties.md)›*

___

###  getProtocolFees

▸ **getProtocolFees**(`args`: object): *Promise‹BigNumber›*

*Defined in [src/Network.ts:94](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/Network.ts#L94)*

Retrieve the protocol fees associated with running a specific transaction

**Parameters:**

▪ **args**: *object*

Name | Type | Description |
------ | ------ | ------ |
`tag` | TxTag | transaction tag (i.e. TxTags.asset.CreateAsset or "asset.createAsset")  |

**Returns:** *Promise‹BigNumber›*

___

###  getSs58Format

▸ **getSs58Format**(): *BigNumber*

*Defined in [src/Network.ts:63](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/Network.ts#L63)*

Retrieve the chain's SS58 format

**Returns:** *BigNumber*

___

###  getTransactionByHash

▸ **getTransactionByHash**(`opts`: object): *Promise‹[ExtrinsicData](../interfaces/extrinsicdata.md) | null›*

*Defined in [src/Network.ts:238](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/Network.ts#L238)*

Retrieve a transaction by hash

**`note`** uses the middleware

**Parameters:**

▪ **opts**: *object*

Name | Type | Description |
------ | ------ | ------ |
`txHash` | string | hash of the transaction  |

**Returns:** *Promise‹[ExtrinsicData](../interfaces/extrinsicdata.md) | null›*

___

###  getTreasuryAccount

▸ **getTreasuryAccount**(): *[Account](account.md)*

*Defined in [src/Network.ts:101](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/Network.ts#L101)*

Get the treasury wallet address

**Returns:** *[Account](account.md)*

___

###  getTreasuryBalance

▸ **getTreasuryBalance**(): *Promise‹BigNumber›*

*Defined in [src/Network.ts:114](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/Network.ts#L114)*

Get the Treasury POLYX balance

**`note`** can be subscribed to

**Returns:** *Promise‹BigNumber›*

▸ **getTreasuryBalance**(`callback`: [SubCallback](../globals.md#subcallback)‹BigNumber›): *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

*Defined in [src/Network.ts:115](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/Network.ts#L115)*

**Parameters:**

Name | Type |
------ | ------ |
`callback` | [SubCallback](../globals.md#subcallback)‹BigNumber› |

**Returns:** *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

___

###  getVersion

▸ **getVersion**(): *Promise‹string›*

*Defined in [src/Network.ts:56](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/Network.ts#L56)*

Fetch the current network version (i.e. 3.1.0)

**Returns:** *Promise‹string›*

___

###  transferPolyx

▸ **transferPolyx**(`args`: [TransferPolyxParams](../interfaces/transferpolyxparams.md), `opts?`: [ProcedureOpts](../interfaces/procedureopts.md)): *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

*Defined in [src/Network.ts:140](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/Network.ts#L140)*

Transfer an amount of POLYX to a specified Account

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call [transferPolyx.checkAuthorization](../interfaces/proceduremethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

**Parameters:**

Name | Type |
------ | ------ |
`args` | [TransferPolyxParams](../interfaces/transferpolyxparams.md) |
`opts?` | [ProcedureOpts](../interfaces/procedureopts.md) |

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹void››*
