# Class: AssetHolders

Handles all Asset Holders related functionality

## Hierarchy

* Namespace‹[Asset](asset.md)›

  ↳ **AssetHolders**

## Index

### Properties

* [context](assetholders.md#protected-context)
* [parent](assetholders.md#protected-parent)

### Methods

* [get](assetholders.md#get)

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

###  get

▸ **get**(`paginationOpts?`: [PaginationOptions](../interfaces/paginationoptions.md)): *Promise‹[ResultSet](../interfaces/resultset.md)‹[IdentityBalance](../interfaces/identitybalance.md)››*

*Defined in [src/api/entities/Asset/AssetHolders.ts:17](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/entities/Asset/AssetHolders.ts#L17)*

Retrieve all the Asset Holders with their respective balance

**`note`** supports pagination

**Parameters:**

Name | Type |
------ | ------ |
`paginationOpts?` | [PaginationOptions](../interfaces/paginationoptions.md) |

**Returns:** *Promise‹[ResultSet](../interfaces/resultset.md)‹[IdentityBalance](../interfaces/identitybalance.md)››*
