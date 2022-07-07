# Class: Portfolios

Handles all Portfolio related functionality on the Identity side

## Hierarchy

* Namespace‹[Identity](identity.md)›

  ↳ **Portfolios**

## Index

### Properties

* [context](portfolios.md#protected-context)
* [parent](portfolios.md#protected-parent)

### Methods

* [delete](portfolios.md#delete)
* [getCustodiedPortfolios](portfolios.md#getcustodiedportfolios)
* [getPortfolio](portfolios.md#getportfolio)
* [getPortfolios](portfolios.md#getportfolios)

## Properties

### `Protected` context

• **context**: *Context*

*Inherited from void*

*Defined in [src/api/entities/Namespace.ts:11](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/entities/Namespace.ts#L11)*

___

### `Protected` parent

• **parent**: *[Identity](identity.md)*

*Inherited from void*

*Defined in [src/api/entities/Namespace.ts:9](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/entities/Namespace.ts#L9)*

## Methods

###  delete

▸ **delete**(`args`: object, `opts?`: [ProcedureOpts](../interfaces/procedureopts.md)): *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

*Defined in [src/api/entities/Identity/Portfolios.ts:164](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/entities/Identity/Portfolios.ts#L164)*

Delete a Portfolio by ID

**`note`** required role:
  - Portfolio Custodian

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call [delete.checkAuthorization](../interfaces/proceduremethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

**Parameters:**

▪ **args**: *object*

Name | Type |
------ | ------ |
`portfolio` | BigNumber &#124; [NumberedPortfolio](numberedportfolio.md) |

▪`Optional`  **opts**: *[ProcedureOpts](../interfaces/procedureopts.md)*

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

___

###  getCustodiedPortfolios

▸ **getCustodiedPortfolios**(`paginationOpts?`: [PaginationOptions](../interfaces/paginationoptions.md)): *Promise‹[ResultSet](../interfaces/resultset.md)‹[DefaultPortfolio](defaultportfolio.md) | [NumberedPortfolio](numberedportfolio.md)››*

*Defined in [src/api/entities/Identity/Portfolios.ts:77](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/entities/Identity/Portfolios.ts#L77)*

Retrieve all Portfolios custodied by this Identity.
  This only includes portfolios owned by a different Identity but custodied by this one.
  To fetch Portfolios owned by this Identity, use [getPortfolios](portfolios.md#getportfolios)

**`note`** supports pagination

**Parameters:**

Name | Type |
------ | ------ |
`paginationOpts?` | [PaginationOptions](../interfaces/paginationoptions.md) |

**Returns:** *Promise‹[ResultSet](../interfaces/resultset.md)‹[DefaultPortfolio](defaultportfolio.md) | [NumberedPortfolio](numberedportfolio.md)››*

___

###  getPortfolio

▸ **getPortfolio**(): *Promise‹[DefaultPortfolio](defaultportfolio.md)›*

*Defined in [src/api/entities/Identity/Portfolios.ts:124](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/entities/Identity/Portfolios.ts#L124)*

Retrieve a Numbered Portfolio or the Default Portfolio if Portfolio ID is not passed

**Returns:** *Promise‹[DefaultPortfolio](defaultportfolio.md)›*

▸ **getPortfolio**(`args`: object): *Promise‹[NumberedPortfolio](numberedportfolio.md)›*

*Defined in [src/api/entities/Identity/Portfolios.ts:125](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/entities/Identity/Portfolios.ts#L125)*

**Parameters:**

▪ **args**: *object*

Name | Type |
------ | ------ |
`portfolioId` | BigNumber |

**Returns:** *Promise‹[NumberedPortfolio](numberedportfolio.md)›*

___

###  getPortfolios

▸ **getPortfolios**(): *Promise‹[]›*

*Defined in [src/api/entities/Identity/Portfolios.ts:46](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/entities/Identity/Portfolios.ts#L46)*

Retrieve all the Portfolios owned by this Identity

**Returns:** *Promise‹[]›*
