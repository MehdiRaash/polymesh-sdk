# Class: Documents

Handles all Asset Document related functionality

## Hierarchy

* Namespace‹[Asset](asset.md)›

  ↳ **Documents**

## Index

### Properties

* [context](documents.md#protected-context)
* [parent](documents.md#protected-parent)

### Methods

* [get](documents.md#get)
* [set](documents.md#set)

## Properties

### `Protected` context

• **context**: *Context*

*Inherited from void*

*Defined in [src/api/entities/Namespace.ts:11](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/api/entities/Namespace.ts#L11)*

___

### `Protected` parent

• **parent**: *[Asset](asset.md)*

*Inherited from void*

*Defined in [src/api/entities/Namespace.ts:9](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/api/entities/Namespace.ts#L9)*

## Methods

###  get

▸ **get**(`paginationOpts?`: [PaginationOptions](../interfaces/paginationoptions.md)): *Promise‹[ResultSet](../interfaces/resultset.md)‹[AssetDocument](../interfaces/assetdocument.md)››*

*Defined in [src/api/entities/Asset/Documents.ts:43](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/api/entities/Asset/Documents.ts#L43)*

Retrieve all documents linked to the Asset

**`note`** supports pagination

**Parameters:**

Name | Type |
------ | ------ |
`paginationOpts?` | [PaginationOptions](../interfaces/paginationoptions.md) |

**Returns:** *Promise‹[ResultSet](../interfaces/resultset.md)‹[AssetDocument](../interfaces/assetdocument.md)››*

___

###  set

▸ **set**(`args`: [SetAssetDocumentsParams](../interfaces/setassetdocumentsparams.md), `opts?`: [ProcedureOpts](../interfaces/procedureopts.md)): *Promise‹[TransactionQueue](transactionqueue.md)‹[Asset](asset.md)››*

*Defined in [src/api/entities/Asset/Documents.ts:34](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/api/entities/Asset/Documents.ts#L34)*

Assign a new list of documents to the Asset by replacing the existing list of documents with the ones passed in the parameters

This requires two transactions

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call [set.checkAuthorization](../interfaces/proceduremethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

**Parameters:**

Name | Type |
------ | ------ |
`args` | [SetAssetDocumentsParams](../interfaces/setassetdocumentsparams.md) |
`opts?` | [ProcedureOpts](../interfaces/procedureopts.md) |

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹[Asset](asset.md)››*
