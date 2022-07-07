# Class: Network

Handles all Network related functionality, including querying for historical events from middleware

## Hierarchy

* **Network**

## Index

### Methods

* [getEventByIndexedArgs](network.md#geteventbyindexedargs)
* [getEventByIndexedArgsV2](network.md#geteventbyindexedargsv2)
* [getEventsByIndexedArgs](network.md#geteventsbyindexedargs)
* [getEventsByIndexedArgsV2](network.md#geteventsbyindexedargsv2)
* [getLatestBlock](network.md#getlatestblock)
* [getNetworkProperties](network.md#getnetworkproperties)
* [getProtocolFees](network.md#getprotocolfees)
* [getSs58Format](network.md#getss58format)
* [getTransactionByHash](network.md#gettransactionbyhash)
* [getTransactionByHashV2](network.md#gettransactionbyhashv2)
* [getTreasuryAccount](network.md#gettreasuryaccount)
* [getTreasuryBalance](network.md#gettreasurybalance)
* [getVersion](network.md#getversion)
* [transferPolyx](network.md#transferpolyx)

## Methods

###  getEventByIndexedArgs

▸ **getEventByIndexedArgs**(`opts`: object): *Promise‹[EventIdentifier](../interfaces/eventidentifier.md) | null›*

*Defined in [src/Network.ts:167](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/Network.ts#L167)*

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

###  getEventByIndexedArgsV2

▸ **getEventByIndexedArgsV2**(`opts`: object): *Promise‹[EventIdentifier](../interfaces/eventidentifier.md) | null›*

*Defined in [src/Network.ts:204](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/Network.ts#L204)*

Retrieve a single event by any of its indexed arguments. Can be filtered using parameters

**`note`** uses the middlewareV2

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

*Defined in [src/Network.ts:250](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/Network.ts#L250)*

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

###  getEventsByIndexedArgsV2

▸ **getEventsByIndexedArgsV2**(`opts`: object): *Promise‹[EventIdentifier](../interfaces/eventidentifier.md)[] | null›*

*Defined in [src/Network.ts:300](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/Network.ts#L300)*

Retrieve a list of events. Can be filtered using parameters

**`note`** uses the middlewareV2

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

*Defined in [src/Network.ts:61](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/Network.ts#L61)*

Retrieve the number of the latest block in the chain

**Returns:** *Promise‹BigNumber›*

___

###  getNetworkProperties

▸ **getNetworkProperties**(): *Promise‹[NetworkProperties](../interfaces/networkproperties.md)›*

*Defined in [src/Network.ts:82](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/Network.ts#L82)*

Retrieve information for the current network

**Returns:** *Promise‹[NetworkProperties](../interfaces/networkproperties.md)›*

___

###  getProtocolFees

▸ **getProtocolFees**(`args`: object): *Promise‹[ProtocolFees](../interfaces/protocolfees.md)[]›*

*Defined in [src/Network.ts:106](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/Network.ts#L106)*

Retrieve the protocol fees associated with running specific transactions

**Parameters:**

▪ **args**: *object*

Name | Type | Description |
------ | ------ | ------ |
`tags` | TxTag[] | list of transaction tags (i.e. [TxTags.asset.CreateAsset, TxTags.asset.RegisterTicker] or ["asset.createAsset", "asset.registerTicker"])  |

**Returns:** *Promise‹[ProtocolFees](../interfaces/protocolfees.md)[]›*

___

###  getSs58Format

▸ **getSs58Format**(): *BigNumber*

*Defined in [src/Network.ts:75](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/Network.ts#L75)*

Retrieve the chain's SS58 format

**Returns:** *BigNumber*

___

###  getTransactionByHash

▸ **getTransactionByHash**(`opts`: object): *Promise‹[ExtrinsicDataWithFees](../interfaces/extrinsicdatawithfees.md) | null›*

*Defined in [src/Network.ts:348](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/Network.ts#L348)*

Retrieve a transaction by hash

**`note`** uses the middleware

**Parameters:**

▪ **opts**: *object*

Name | Type | Description |
------ | ------ | ------ |
`txHash` | string | hash of the transaction  |

**Returns:** *Promise‹[ExtrinsicDataWithFees](../interfaces/extrinsicdatawithfees.md) | null›*

___

###  getTransactionByHashV2

▸ **getTransactionByHashV2**(`opts`: object): *Promise‹[ExtrinsicDataWithFees](../interfaces/extrinsicdatawithfees.md) | null›*

*Defined in [src/Network.ts:435](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/Network.ts#L435)*

Retrieve a transaction by hash

**`note`** uses the middlewareV2

**Parameters:**

▪ **opts**: *object*

Name | Type | Description |
------ | ------ | ------ |
`txHash` | string | hash of the transaction  |

**Returns:** *Promise‹[ExtrinsicDataWithFees](../interfaces/extrinsicdatawithfees.md) | null›*

___

###  getTreasuryAccount

▸ **getTreasuryAccount**(): *[Account](account.md)*

*Defined in [src/Network.ts:113](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/Network.ts#L113)*

Get the treasury wallet address

**Returns:** *[Account](account.md)*

___

###  getTreasuryBalance

▸ **getTreasuryBalance**(): *Promise‹BigNumber›*

*Defined in [src/Network.ts:126](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/Network.ts#L126)*

Get the Treasury POLYX balance

**`note`** can be subscribed to

**Returns:** *Promise‹BigNumber›*

▸ **getTreasuryBalance**(`callback`: [SubCallback](../globals.md#subcallback)‹BigNumber›): *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

*Defined in [src/Network.ts:127](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/Network.ts#L127)*

**Parameters:**

Name | Type |
------ | ------ |
`callback` | [SubCallback](../globals.md#subcallback)‹BigNumber› |

**Returns:** *Promise‹[UnsubCallback](../globals.md#unsubcallback)›*

___

###  getVersion

▸ **getVersion**(): *Promise‹string›*

*Defined in [src/Network.ts:68](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/Network.ts#L68)*

Fetch the current network version (i.e. 3.1.0)

**Returns:** *Promise‹string›*

___

###  transferPolyx

▸ **transferPolyx**(`args`: [TransferPolyxParams](../interfaces/transferpolyxparams.md), `opts?`: [ProcedureOpts](../interfaces/procedureopts.md)): *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

*Defined in [src/Network.ts:152](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/Network.ts#L152)*

Transfer an amount of POLYX to a specified Account

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call [transferPolyx.checkAuthorization](../interfaces/proceduremethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

**Parameters:**

Name | Type |
------ | ------ |
`args` | [TransferPolyxParams](../interfaces/transferpolyxparams.md) |
`opts?` | [ProcedureOpts](../interfaces/procedureopts.md) |

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹void››*
