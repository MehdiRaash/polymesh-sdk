# Class: Settlements

Handles all Asset Settlements related functionality
Handles all Settlement related functionality

## Hierarchy

* Namespace‹[Asset](asset.md)›

  ↳ **Settlements**

## Index

### Properties

* [context](settlements.md#protected-context)
* [parent](settlements.md#protected-parent)

### Methods

* [addInstruction](settlements.md#addinstruction)
* [affirmInstruction](settlements.md#affirminstruction)
* [canSettle](settlements.md#cansettle)
* [canTransfer](settlements.md#cantransfer)
* [createVenue](settlements.md#createvenue)
* [getInstruction](settlements.md#getinstruction)
* [getVenue](settlements.md#getvenue)

## Properties

### `Protected` context

• **context**: *Context*

*Inherited from void*

*Defined in [src/api/entities/Namespace.ts:11](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/api/entities/Namespace.ts#L11)*

*Defined in [src/Settlements.ts:25](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/Settlements.ts#L25)*

___

### `Protected` parent

• **parent**: *[Asset](asset.md)*

*Inherited from void*

*Defined in [src/api/entities/Namespace.ts:9](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/api/entities/Namespace.ts#L9)*

## Methods

###  addInstruction

▸ **addInstruction**(`args`: [AddInstructionWithVenueIdParams](../interfaces/addinstructionwithvenueidparams.md), `opts?`: [ProcedureOpts](../interfaces/procedureopts.md)): *Promise‹[TransactionQueue](transactionqueue.md)‹[Instruction](instruction.md)[], [Instruction](instruction.md)››*

*Defined in [src/Settlements.ts:118](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/Settlements.ts#L118)*

Create an Instruction to exchange Assets

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call [addInstruction.checkAuthorization](../interfaces/proceduremethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

**Parameters:**

Name | Type |
------ | ------ |
`args` | [AddInstructionWithVenueIdParams](../interfaces/addinstructionwithvenueidparams.md) |
`opts?` | [ProcedureOpts](../interfaces/procedureopts.md) |

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹[Instruction](instruction.md)[], [Instruction](instruction.md)››*

___

###  affirmInstruction

▸ **affirmInstruction**(`args`: [AffirmInstructionParams](../interfaces/affirminstructionparams.md), `opts?`: [ProcedureOpts](../interfaces/procedureopts.md)): *Promise‹[TransactionQueue](transactionqueue.md)‹[Instruction](instruction.md)››*

*Defined in [src/Settlements.ts:128](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/Settlements.ts#L128)*

Affirm an Instruction (authorize)

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call [affirmInstruction.checkAuthorization](../interfaces/proceduremethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

**Parameters:**

Name | Type |
------ | ------ |
`args` | [AffirmInstructionParams](../interfaces/affirminstructionparams.md) |
`opts?` | [ProcedureOpts](../interfaces/procedureopts.md) |

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹[Instruction](instruction.md)››*

___

###  canSettle

▸ **canSettle**(`args`: object): *Promise‹[TransferStatus](../enums/transferstatus.md)›*

*Defined in [src/api/entities/Asset/Settlements.ts:38](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/api/entities/Asset/Settlements.ts#L38)*

Check whether it is possible to create a settlement Instruction to transfer a certain amount of this Asset's tokens between two Portfolios.

**`note`** this takes locked tokens into account. For example, if portfolio A has 1000 tokens and this function is called to check if 700 of them can be
  transferred to portfolio B (assuming everything else checks out) the result will be success. If an instruction is created and authorized to transfer those 700 tokens,
  they would become locked. From that point, further calls to this function would yield failed results because of the funds being locked, even though they haven't been
  transferred yet

**`deprecated`** in favor of [canTransfer](settlements.md#cantransfer)

**Parameters:**

▪ **args**: *object*

Name | Type | Description |
------ | ------ | ------ |
`amount` | BigNumber | amount of tokens to transfer  |
`from?` | [PortfolioLike](../globals.md#portfoliolike) | sender Portfolio (optional, defaults to the signing Identity's Default Portfolio) |
`to` | [PortfolioLike](../globals.md#portfoliolike) | receiver Portfolio |

**Returns:** *Promise‹[TransferStatus](../enums/transferstatus.md)›*

___

###  canTransfer

▸ **canTransfer**(`args`: object): *Promise‹[TransferBreakdown](../interfaces/transferbreakdown.md)›*

*Defined in [src/api/entities/Asset/Settlements.ts:107](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/api/entities/Asset/Settlements.ts#L107)*

Check whether it is possible to create a settlement instruction to transfer a certain amount of this asset between two Portfolios. Returns a breakdown of
  the transaction containing general errors (such as insufficient balance or invalid receiver), any broken transfer restrictions, and any compliance
  failures

**`note`** this takes locked tokens into account. For example, if portfolio A has 1000 tokens and this function is called to check if 700 of them can be
  transferred to portfolio B (assuming everything else checks out) the result will be success. If an instruction is created and authorized to transfer those 700 tokens,
  they would become locked. From that point, further calls to this function would yield failed results because of the funds being locked, even though they haven't been
  transferred yet

**Parameters:**

▪ **args**: *object*

Name | Type | Description |
------ | ------ | ------ |
`amount` | BigNumber | amount of tokens to transfer   |
`from?` | [PortfolioLike](../globals.md#portfoliolike) | sender Portfolio (optional, defaults to the signing Identity's Default Portfolio) |
`to` | [PortfolioLike](../globals.md#portfoliolike) | receiver Portfolio |

**Returns:** *Promise‹[TransferBreakdown](../interfaces/transferbreakdown.md)›*

___

###  createVenue

▸ **createVenue**(`args`: [CreateVenueParams](../interfaces/createvenueparams.md), `opts?`: [ProcedureOpts](../interfaces/procedureopts.md)): *Promise‹[TransactionQueue](transactionqueue.md)‹[Venue](venue.md)››*

*Defined in [src/Settlements.ts:108](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/Settlements.ts#L108)*

Create a Venue under the ownership of the signing Identity

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call [createVenue.checkAuthorization](../interfaces/proceduremethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

**Parameters:**

Name | Type |
------ | ------ |
`args` | [CreateVenueParams](../interfaces/createvenueparams.md) |
`opts?` | [ProcedureOpts](../interfaces/procedureopts.md) |

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹[Venue](venue.md)››*

___

###  getInstruction

▸ **getInstruction**(`args`: object): *Promise‹[Instruction](instruction.md)›*

*Defined in [src/Settlements.ts:86](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/Settlements.ts#L86)*

Retrieve an Instruction by its ID

**Parameters:**

▪ **args**: *object*

Name | Type |
------ | ------ |
`id` | BigNumber |

**Returns:** *Promise‹[Instruction](instruction.md)›*

___

###  getVenue

▸ **getVenue**(`args`: object): *Promise‹[Venue](venue.md)›*

*Defined in [src/Settlements.ts:65](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/Settlements.ts#L65)*

Retrieve a Venue by its ID

**Parameters:**

▪ **args**: *object*

Name | Type |
------ | ------ |
`id` | BigNumber |

**Returns:** *Promise‹[Venue](venue.md)›*
