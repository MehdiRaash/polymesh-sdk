# Interface: SetAssetRequirementsParams

## Hierarchy

* **SetAssetRequirementsParams**

## Index

### Properties

* [requirements](setassetrequirementsparams.md#requirements)

## Properties

###  requirements

• **requirements**: *[InputCondition](../globals.md#inputcondition)[][]*

*Defined in [src/api/procedures/setAssetRequirements.ts:16](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/procedures/setAssetRequirements.ts#L16)*

array of array of conditions. For a transfer to be successful, it must comply with all the conditions of at least one of the arrays.
  In other words, higher level arrays are *OR* between them, while conditions inside each array are *AND* between them
