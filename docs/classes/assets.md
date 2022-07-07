# Class: Assets

Handles all Asset related functionality

## Hierarchy

* **Assets**

## Index

### Methods

* [claimClassicTicker](assets.md#claimclassicticker)
* [createAsset](assets.md#createasset)
* [getAsset](assets.md#getasset)
* [getAssets](assets.md#getassets)
* [getTickerReservation](assets.md#gettickerreservation)
* [getTickerReservations](assets.md#gettickerreservations)
* [reserveTicker](assets.md#reserveticker)

## Methods

###  claimClassicTicker

▸ **claimClassicTicker**(`args`: [ClaimClassicTickerParams](../interfaces/claimclassictickerparams.md), `opts?`: [ProcedureOpts](../interfaces/procedureopts.md)): *Promise‹[TransactionQueue](transactionqueue.md)‹[TickerReservation](tickerreservation.md)››*

*Defined in [src/Assets.ts:73](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/Assets.ts#L73)*

Claim a ticker symbol that was reserved in Polymath Classic (Ethereum). The Ethereum Account
  that owns the ticker must sign a special message that contains the DID of the Identity that will own the ticker
  in Polymesh, and provide the signed data to this call

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call [claimClassicTicker.checkAuthorization](../interfaces/proceduremethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

**Parameters:**

Name | Type |
------ | ------ |
`args` | [ClaimClassicTickerParams](../interfaces/claimclassictickerparams.md) |
`opts?` | [ProcedureOpts](../interfaces/procedureopts.md) |

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹[TickerReservation](tickerreservation.md)››*

___

###  createAsset

▸ **createAsset**(`args`: [CreateAssetWithTickerParams](../interfaces/createassetwithtickerparams.md), `opts?`: [ProcedureOpts](../interfaces/procedureopts.md)): *Promise‹[TransactionQueue](transactionqueue.md)‹[Asset](asset.md)››*

*Defined in [src/Assets.ts:86](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/Assets.ts#L86)*

Create an Asset

**`note`** if ticker is already reserved, then required role:
  - Ticker Owner

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call [createAsset.checkAuthorization](../interfaces/proceduremethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

**Parameters:**

Name | Type |
------ | ------ |
`args` | [CreateAssetWithTickerParams](../interfaces/createassetwithtickerparams.md) |
`opts?` | [ProcedureOpts](../interfaces/procedureopts.md) |

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹[Asset](asset.md)››*

___

###  getAsset

▸ **getAsset**(`args`: object): *Promise‹[Asset](asset.md)›*

*Defined in [src/Assets.ts:178](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/Assets.ts#L178)*

Retrieve an Asset

**Parameters:**

▪ **args**: *object*

Name | Type | Description |
------ | ------ | ------ |
`ticker` | string | Asset ticker  |

**Returns:** *Promise‹[Asset](asset.md)›*

___

###  getAssets

▸ **getAssets**(`args?`: undefined | object): *Promise‹[Asset](asset.md)[]›*

*Defined in [src/Assets.ts:146](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/Assets.ts#L146)*

Retrieve all of the Assets owned by an Identity

**`note`** Assets with unreadable characters in their tickers will be left out

**Parameters:**

Name | Type |
------ | ------ |
`args?` | undefined &#124; object |

**Returns:** *Promise‹[Asset](asset.md)[]›*

___

###  getTickerReservation

▸ **getTickerReservation**(`args`: object): *[TickerReservation](tickerreservation.md)*

*Defined in [src/Assets.ts:132](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/Assets.ts#L132)*

Retrieve a Ticker Reservation

**Parameters:**

▪ **args**: *object*

Name | Type | Description |
------ | ------ | ------ |
`ticker` | string | Asset ticker  |

**Returns:** *[TickerReservation](tickerreservation.md)*

___

###  getTickerReservations

▸ **getTickerReservations**(`args?`: undefined | object): *Promise‹[TickerReservation](tickerreservation.md)[]›*

*Defined in [src/Assets.ts:98](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/Assets.ts#L98)*

Retrieve all the ticker reservations currently owned by an Identity. This doesn't include Assets that
  have already been launched

**`note`** reservations with unreadable characters in their tickers will be left out

**Parameters:**

Name | Type |
------ | ------ |
`args?` | undefined &#124; object |

**Returns:** *Promise‹[TickerReservation](tickerreservation.md)[]›*

___

###  reserveTicker

▸ **reserveTicker**(`args`: [ReserveTickerParams](../interfaces/reservetickerparams.md), `opts?`: [ProcedureOpts](../interfaces/procedureopts.md)): *Promise‹[TransactionQueue](transactionqueue.md)‹[TickerReservation](tickerreservation.md)››*

*Defined in [src/Assets.ts:61](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/Assets.ts#L61)*

Reserve a ticker symbol under the ownership of the signing Identity to later use in the creation of an Asset.
  The ticker will expire after a set amount of time, after which other users can reserve it

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call [reserveTicker.checkAuthorization](../interfaces/proceduremethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

**Parameters:**

Name | Type |
------ | ------ |
`args` | [ReserveTickerParams](../interfaces/reservetickerparams.md) |
`opts?` | [ProcedureOpts](../interfaces/procedureopts.md) |

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹[TickerReservation](tickerreservation.md)››*
