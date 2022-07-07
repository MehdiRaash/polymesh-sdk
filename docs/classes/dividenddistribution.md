# Class: DividendDistribution

Represents a Corporate Action via which an Asset issuer wishes to distribute dividends
  between a subset of the Asset Holders (targets)

## Hierarchy

  ↳ [CorporateActionBase](corporateactionbase.md)

  ↳ **DividendDistribution**

## Index

### Properties

* [asset](dividenddistribution.md#asset)
* [context](dividenddistribution.md#protected-context)
* [currency](dividenddistribution.md#currency)
* [declarationDate](dividenddistribution.md#declarationdate)
* [defaultTaxWithholding](dividenddistribution.md#defaulttaxwithholding)
* [description](dividenddistribution.md#description)
* [expiryDate](dividenddistribution.md#expirydate)
* [id](dividenddistribution.md#id)
* [kind](dividenddistribution.md#protected-kind)
* [maxAmount](dividenddistribution.md#maxamount)
* [origin](dividenddistribution.md#origin)
* [paymentDate](dividenddistribution.md#paymentdate)
* [perShare](dividenddistribution.md#pershare)
* [targets](dividenddistribution.md#targets)
* [taxWithholdings](dividenddistribution.md#taxwithholdings)
* [uuid](dividenddistribution.md#uuid)

### Methods

* [checkpoint](dividenddistribution.md#checkpoint)
* [claim](dividenddistribution.md#claim)
* [details](dividenddistribution.md#details)
* [exists](dividenddistribution.md#exists)
* [getParticipant](dividenddistribution.md#getparticipant)
* [getParticipants](dividenddistribution.md#getparticipants)
* [getPaymentHistory](dividenddistribution.md#getpaymenthistory)
* [getPaymentHistoryV2](dividenddistribution.md#getpaymenthistoryv2)
* [getWithheldTax](dividenddistribution.md#getwithheldtax)
* [getWithheldTaxV2](dividenddistribution.md#getwithheldtaxv2)
* [isEqual](dividenddistribution.md#isequal)
* [linkDocuments](dividenddistribution.md#linkdocuments)
* [modifyCheckpoint](dividenddistribution.md#modifycheckpoint)
* [pay](dividenddistribution.md#pay)
* [reclaimFunds](dividenddistribution.md#reclaimfunds)
* [toHuman](dividenddistribution.md#tohuman)
* [generateUuid](dividenddistribution.md#static-generateuuid)
* [unserialize](dividenddistribution.md#static-unserialize)

## Properties

###  asset

• **asset**: *[Asset](asset.md)*

*Inherited from [CorporateActionBase](corporateactionbase.md).[asset](corporateactionbase.md#asset)*

*Defined in [src/api/entities/CorporateActionBase/index.ts:77](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/entities/CorporateActionBase/index.ts#L77)*

Asset affected by this Corporate Action

___

### `Protected` context

• **context**: *Context*

*Inherited from [CheckpointSchedule](checkpointschedule.md).[context](checkpointschedule.md#protected-context)*

*Defined in [src/api/entities/Entity.ts:48](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/entities/Entity.ts#L48)*

___

###  currency

• **currency**: *string*

*Defined in [src/api/entities/DividendDistribution/index.ts:109](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/entities/DividendDistribution/index.ts#L109)*

ticker of the currency in which dividends are being distributed

___

###  declarationDate

• **declarationDate**: *Date*

*Inherited from [CorporateActionBase](corporateactionbase.md).[declarationDate](corporateactionbase.md#declarationdate)*

*Defined in [src/api/entities/CorporateActionBase/index.ts:82](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/entities/CorporateActionBase/index.ts#L82)*

date at which the Corporate Action was created

___

###  defaultTaxWithholding

• **defaultTaxWithholding**: *BigNumber*

*Inherited from [CorporateActionBase](corporateactionbase.md).[defaultTaxWithholding](corporateactionbase.md#defaulttaxwithholding)*

*Defined in [src/api/entities/CorporateActionBase/index.ts:98](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/entities/CorporateActionBase/index.ts#L98)*

default percentage (0-100) of tax withholding for this Corporate Action

___

###  description

• **description**: *string*

*Inherited from [CorporateActionBase](corporateactionbase.md).[description](corporateactionbase.md#description)*

*Defined in [src/api/entities/CorporateActionBase/index.ts:87](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/entities/CorporateActionBase/index.ts#L87)*

brief text description of the Corporate Action

___

###  expiryDate

• **expiryDate**: *null | Date*

*Defined in [src/api/entities/DividendDistribution/index.ts:125](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/entities/DividendDistribution/index.ts#L125)*

date after which dividends can no longer be paid/reclaimed. A null value means the distribution never expires

___

###  id

• **id**: *BigNumber*

*Inherited from [CorporateActionBase](corporateactionbase.md).[id](corporateactionbase.md#id)*

*Defined in [src/api/entities/CorporateActionBase/index.ts:72](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/entities/CorporateActionBase/index.ts#L72)*

internal Corporate Action ID

___

### `Protected` kind

• **kind**: *[UnpredictableBenefit](../enums/corporateactionkind.md#unpredictablebenefit) | [PredictableBenefit](../enums/corporateactionkind.md#predictablebenefit)*

*Overrides [CorporateActionBase](corporateactionbase.md).[kind](corporateactionbase.md#protected-kind)*

*Defined in [src/api/entities/DividendDistribution/index.ts:135](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/entities/DividendDistribution/index.ts#L135)*

type of dividend distribution being represented. The chain enforces it to be either PredictableBenefit or UnpredictableBenefit

___

###  maxAmount

• **maxAmount**: *BigNumber*

*Defined in [src/api/entities/DividendDistribution/index.ts:120](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/entities/DividendDistribution/index.ts#L120)*

maximum amount of `currency` to be distributed. Distributions are "first come, first served", so funds can be depleted before
  every Asset Holder receives their corresponding amount

___

###  origin

• **origin**: *[DefaultPortfolio](defaultportfolio.md) | [NumberedPortfolio](numberedportfolio.md)*

*Defined in [src/api/entities/DividendDistribution/index.ts:104](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/entities/DividendDistribution/index.ts#L104)*

Portfolio from which the dividends will be distributed

___

###  paymentDate

• **paymentDate**: *Date*

*Defined in [src/api/entities/DividendDistribution/index.ts:130](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/entities/DividendDistribution/index.ts#L130)*

date starting from which dividends can be paid/reclaimed

___

###  perShare

• **perShare**: *BigNumber*

*Defined in [src/api/entities/DividendDistribution/index.ts:114](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/entities/DividendDistribution/index.ts#L114)*

amount of `currency` to pay for each share held by the Asset Holders

___

###  targets

• **targets**: *[CorporateActionTargets](../interfaces/corporateactiontargets.md)*

*Inherited from [CorporateActionBase](corporateactionbase.md).[targets](corporateactionbase.md#targets)*

*Defined in [src/api/entities/CorporateActionBase/index.ts:93](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/entities/CorporateActionBase/index.ts#L93)*

Asset Holder Identities related to this Corporate action. If the treatment is `Exclude`, the Identities
  in the array will not be targeted by the Action, Identities not in the array will be targeted, and vice versa

___

###  taxWithholdings

• **taxWithholdings**: *[TaxWithholding](../interfaces/taxwithholding.md)[]*

*Inherited from [CorporateActionBase](corporateactionbase.md).[taxWithholdings](corporateactionbase.md#taxwithholdings)*

*Defined in [src/api/entities/CorporateActionBase/index.ts:104](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/entities/CorporateActionBase/index.ts#L104)*

percentage (0-100) of tax withholding per Identity. Any Identity not present
  in this array uses the default tax withholding percentage

___

###  uuid

• **uuid**: *string*

*Inherited from [CheckpointSchedule](checkpointschedule.md).[uuid](checkpointschedule.md#uuid)*

*Defined in [src/api/entities/Entity.ts:46](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/entities/Entity.ts#L46)*

## Methods

###  checkpoint

▸ **checkpoint**(): *Promise‹[Checkpoint](checkpoint.md) | [CheckpointSchedule](checkpointschedule.md)›*

*Overrides [CorporateActionBase](corporateactionbase.md).[checkpoint](corporateactionbase.md#checkpoint)*

*Defined in [src/api/entities/DividendDistribution/index.ts:255](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/entities/DividendDistribution/index.ts#L255)*

Retrieve the Checkpoint associated with this Dividend Distribution. If the Checkpoint is scheduled and has not been created yet,
  the corresponding CheckpointSchedule is returned instead

**Returns:** *Promise‹[Checkpoint](checkpoint.md) | [CheckpointSchedule](checkpointschedule.md)›*

___

###  claim

▸ **claim**(`opts?`: [ProcedureOpts](../interfaces/procedureopts.md)): *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

*Defined in [src/api/entities/DividendDistribution/index.ts:204](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/entities/DividendDistribution/index.ts#L204)*

Claim the Dividends corresponding to the signing Identity

**`note`** if `currency` is indivisible, the Identity's share will be rounded down to the nearest integer (after taxes are withheld)

**`note`** this method is of type [NoArgsProcedureMethod](../interfaces/noargsproceduremethod.md), which means you can call [claim.checkAuthorization](../interfaces/noargsproceduremethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

**Parameters:**

Name | Type |
------ | ------ |
`opts?` | [ProcedureOpts](../interfaces/procedureopts.md) |

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

___

###  details

▸ **details**(): *Promise‹[DividendDistributionDetails](../interfaces/dividenddistributiondetails.md)›*

*Defined in [src/api/entities/DividendDistribution/index.ts:283](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/entities/DividendDistribution/index.ts#L283)*

Retrieve details associated with this Dividend Distribution

**Returns:** *Promise‹[DividendDistributionDetails](../interfaces/dividenddistributiondetails.md)›*

___

###  exists

▸ **exists**(): *Promise‹boolean›*

*Overrides [CorporateActionBase](corporateactionbase.md).[exists](corporateactionbase.md#exists)*

*Defined in [src/api/entities/DividendDistribution/index.ts:274](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/entities/DividendDistribution/index.ts#L274)*

Retrieve whether the Distribution exists

**Returns:** *Promise‹boolean›*

___

###  getParticipant

▸ **getParticipant**(`args?`: undefined | object): *Promise‹[DistributionParticipant](../interfaces/distributionparticipant.md) | null›*

*Defined in [src/api/entities/DividendDistribution/index.ts:364](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/entities/DividendDistribution/index.ts#L364)*

Retrieve an Identity that is entitled to dividends in this Distribution (participant),
  the amount it is entitled to and whether it has been paid or not

**`note`** if the Distribution Checkpoint hasn't been created yet, the result will be null.
  This is because the Distribution participant's corresponding payment cannot be determined without a Checkpoint

**Parameters:**

Name | Type |
------ | ------ |
`args?` | undefined &#124; object |

**Returns:** *Promise‹[DistributionParticipant](../interfaces/distributionparticipant.md) | null›*

___

###  getParticipants

▸ **getParticipants**(): *Promise‹[DistributionParticipant](../interfaces/distributionparticipant.md)[]›*

*Defined in [src/api/entities/DividendDistribution/index.ts:309](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/entities/DividendDistribution/index.ts#L309)*

Retrieve a comprehensive list of all Identities that are entitled to dividends in this Distribution (participants),
  the amount they are entitled to and whether they have been paid or not

**`note`** this request can take a lot of time with large amounts of Asset Holders

**`note`** if the Distribution Checkpoint hasn't been created yet, the result will be an empty array.
  This is because the Distribution participants cannot be determined without a Checkpoint

**Returns:** *Promise‹[DistributionParticipant](../interfaces/distributionparticipant.md)[]›*

___

###  getPaymentHistory

▸ **getPaymentHistory**(`opts`: object): *Promise‹[ResultSet](../interfaces/resultset.md)‹[DistributionPayment](../interfaces/distributionpayment.md)››*

*Defined in [src/api/entities/DividendDistribution/index.ts:538](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/entities/DividendDistribution/index.ts#L538)*

Retrieve the payment history for this Distribution

**`note`** uses the middleware

**`note`** supports pagination

**Parameters:**

▪`Default value`  **opts**: *object*= {}

Name | Type |
------ | ------ |
`size?` | BigNumber |
`start?` | BigNumber |

**Returns:** *Promise‹[ResultSet](../interfaces/resultset.md)‹[DistributionPayment](../interfaces/distributionpayment.md)››*

___

###  getPaymentHistoryV2

▸ **getPaymentHistoryV2**(`opts`: object): *Promise‹[ResultSet](../interfaces/resultset.md)‹[DistributionPayment](../interfaces/distributionpayment.md)››*

*Defined in [src/api/entities/DividendDistribution/index.ts:624](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/entities/DividendDistribution/index.ts#L624)*

Retrieve the payment history for this Distribution

**`note`** uses the middleware V2

**`note`** supports pagination

**Parameters:**

▪`Default value`  **opts**: *object*= {}

Name | Type |
------ | ------ |
`size?` | BigNumber |
`start?` | BigNumber |

**Returns:** *Promise‹[ResultSet](../interfaces/resultset.md)‹[DistributionPayment](../interfaces/distributionpayment.md)››*

___

###  getWithheldTax

▸ **getWithheldTax**(): *Promise‹BigNumber›*

*Defined in [src/api/entities/DividendDistribution/index.ts:466](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/entities/DividendDistribution/index.ts#L466)*

Retrieve the amount of taxes that have been withheld up to this point in this Distribution

**`note`** uses the middleware

**Returns:** *Promise‹BigNumber›*

___

###  getWithheldTaxV2

▸ **getWithheldTaxV2**(): *Promise‹BigNumber›*

*Defined in [src/api/entities/DividendDistribution/index.ts:500](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/entities/DividendDistribution/index.ts#L500)*

Retrieve the amount of taxes that have been withheld up to this point in this Distribution

**`note`** uses the middlewareV2

**Returns:** *Promise‹BigNumber›*

___

###  isEqual

▸ **isEqual**(`entity`: [Entity](entity.md)‹unknown, unknown›): *boolean*

*Inherited from [CheckpointSchedule](checkpointschedule.md).[isEqual](checkpointschedule.md#isequal)*

*Defined in [src/api/entities/Entity.ts:61](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/entities/Entity.ts#L61)*

Determine whether this Entity is the same as another one

**Parameters:**

Name | Type |
------ | ------ |
`entity` | [Entity](entity.md)‹unknown, unknown› |

**Returns:** *boolean*

___

###  linkDocuments

▸ **linkDocuments**(`args`: [LinkCaDocsParams](../interfaces/linkcadocsparams.md), `opts?`: [ProcedureOpts](../interfaces/procedureopts.md)): *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

*Inherited from [CorporateActionBase](corporateactionbase.md).[linkDocuments](corporateactionbase.md#linkdocuments)*

*Defined in [src/api/entities/CorporateActionBase/index.ts:152](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/entities/CorporateActionBase/index.ts#L152)*

Link a list of documents to this corporate action

**`note`** any previous links are removed in favor of the new list

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call [linkDocuments.checkAuthorization](../interfaces/proceduremethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

**Parameters:**

Name | Type |
------ | ------ |
`args` | [LinkCaDocsParams](../interfaces/linkcadocsparams.md) |
`opts?` | [ProcedureOpts](../interfaces/procedureopts.md) |

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

___

###  modifyCheckpoint

▸ **modifyCheckpoint**(`args`: [Modify](../globals.md#modify)‹ModifyCaCheckpointParams, object›, `opts?`: [ProcedureOpts](../interfaces/procedureopts.md)): *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

*Overrides [CorporateActionBase](corporateactionbase.md).[modifyCheckpoint](corporateactionbase.md#abstract-modifycheckpoint)*

*Defined in [src/api/entities/DividendDistribution/index.ts:214](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/entities/DividendDistribution/index.ts#L214)*

Modify the Distribution's Checkpoint

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call [modifyCheckpoint.checkAuthorization](../interfaces/proceduremethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

**Parameters:**

Name | Type |
------ | ------ |
`args` | [Modify](../globals.md#modify)‹ModifyCaCheckpointParams, object› |
`opts?` | [ProcedureOpts](../interfaces/procedureopts.md) |

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

___

###  pay

▸ **pay**(`args`: [PayDividendsParams](../interfaces/paydividendsparams.md), `opts?`: [ProcedureOpts](../interfaces/procedureopts.md)): *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

*Defined in [src/api/entities/DividendDistribution/index.ts:232](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/entities/DividendDistribution/index.ts#L232)*

Transfer the corresponding share of the dividends to a list of Identities

**`note`** due to performance issues, we do not validate that the distribution has enough remaining funds to pay the corresponding amount to the supplied Identities

**`note`** if `currency` is indivisible, the Identity's share will be rounded down to the nearest integer (after taxes are withheld)

**`note`** this method is of type [ProcedureMethod](../interfaces/proceduremethod.md), which means you can call [pay.checkAuthorization](../interfaces/proceduremethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

**Parameters:**

Name | Type |
------ | ------ |
`args` | [PayDividendsParams](../interfaces/paydividendsparams.md) |
`opts?` | [ProcedureOpts](../interfaces/procedureopts.md) |

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

___

###  reclaimFunds

▸ **reclaimFunds**(`opts?`: [ProcedureOpts](../interfaces/procedureopts.md)): *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

*Defined in [src/api/entities/DividendDistribution/index.ts:247](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/entities/DividendDistribution/index.ts#L247)*

Reclaim any remaining funds back to the origin Portfolio. This can only be done after the Distribution has expired

**`note`** withheld taxes are also reclaimed in the same transaction

**`note`** required roles:
  - Origin Portfolio Custodian

**`note`** this method is of type [NoArgsProcedureMethod](../interfaces/noargsproceduremethod.md), which means you can call [reclaimFunds.checkAuthorization](../interfaces/noargsproceduremethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

**Parameters:**

Name | Type |
------ | ------ |
`opts?` | [ProcedureOpts](../interfaces/procedureopts.md) |

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

___

###  toHuman

▸ **toHuman**(): *[HumanReadable](../interfaces/humanreadable.md)*

*Overrides [CorporateActionBase](corporateactionbase.md).[toHuman](corporateactionbase.md#tohuman)*

*Defined in [src/api/entities/DividendDistribution/index.ts:739](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/entities/DividendDistribution/index.ts#L739)*

Return the Dividend Distribution's static data

**Returns:** *[HumanReadable](../interfaces/humanreadable.md)*

___

### `Static` generateUuid

▸ **generateUuid**‹**Identifiers**›(`identifiers`: Identifiers): *string*

*Inherited from [CheckpointSchedule](checkpointschedule.md).[generateUuid](checkpointschedule.md#static-generateuuid)*

*Defined in [src/api/entities/Entity.ts:14](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/entities/Entity.ts#L14)*

Generate the Entity's UUID from its identifying properties

**Type parameters:**

▪ **Identifiers**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`identifiers` | Identifiers |   |

**Returns:** *string*

___

### `Static` unserialize

▸ **unserialize**‹**Identifiers**›(`serialized`: string): *Identifiers*

*Inherited from [CheckpointSchedule](checkpointschedule.md).[unserialize](checkpointschedule.md#static-unserialize)*

*Defined in [src/api/entities/Entity.ts:23](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/entities/Entity.ts#L23)*

Unserialize a UUID into its Unique Identifiers

**Type parameters:**

▪ **Identifiers**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`serialized` | string | UUID to unserialize  |

**Returns:** *Identifiers*
