# Class: Offerings

Handles all Asset Offering related functionality

## Hierarchy

* Namespace‹[Asset](asset.md)›

  ↳ **Offerings**

## Index

### Properties

* [context](offerings.md#protected-context)
* [parent](offerings.md#protected-parent)

### Methods

* [get](offerings.md#get)
* [getOne](offerings.md#getone)
* [launch](offerings.md#launch)

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

▸ **get**(`opts`: object): *Promise‹[OfferingWithDetails](../interfaces/offeringwithdetails.md)[]›*

*Defined in [src/api/entities/Asset/Offerings.ts:81](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/entities/Asset/Offerings.ts#L81)*

Retrieve all of the Asset's Offerings and their details. Can be filtered using parameters

**Parameters:**

▪`Default value`  **opts**: *object*= {}

Name | Type | Description |
------ | ------ | ------ |
`status?` | Partial‹[OfferingStatus](../interfaces/offeringstatus.md)› | status of the Offerings to fetch. If defined, only Offerings that have all passed statuses will be returned  |

**Returns:** *Promise‹[OfferingWithDetails](../interfaces/offeringwithdetails.md)[]›*

___

###  getOne

▸ **getOne**(`args`: object): *Promise‹[Offering](offering.md)›*

*Defined in [src/api/entities/Asset/Offerings.ts:56](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/entities/Asset/Offerings.ts#L56)*

Retrieve a single Offering associated to this Asset by its ID

**`throws`** if there is no Offering with the passed ID

**Parameters:**

▪ **args**: *object*

Name | Type |
------ | ------ |
`id` | BigNumber |

**Returns:** *Promise‹[Offering](offering.md)›*

___

###  launch

▸ **launch**(`args`: LaunchOfferingParams, `opts?`: [ProcedureOpts](../interfaces/procedureopts.md)): *Promise‹[TransactionQueue](transactionqueue.md)‹[Offering](offering.md)››*

*Defined in [src/api/entities/Asset/Offerings.ts:47](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/entities/Asset/Offerings.ts#L47)*

Launch an Asset Offering

**`note`** required roles:
  - Offering Portfolio Custodian
  - Raising Portfolio Custodian

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call [launch.checkAuthorization](../interfaces/proceduremethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

**Parameters:**

Name | Type |
------ | ------ |
`args` | LaunchOfferingParams |
`opts?` | [ProcedureOpts](../interfaces/procedureopts.md) |

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹[Offering](offering.md)››*
