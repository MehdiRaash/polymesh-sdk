# Interface: AddAssetRequirementParams

## Hierarchy

* **AddAssetRequirementParams**

## Index

### Properties

* [conditions](addassetrequirementparams.md#conditions)

## Properties

###  conditions

• **conditions**: *[InputCondition](../globals.md#inputcondition)[]*

*Defined in [src/api/procedures/addAssetRequirement.ts:17](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/procedures/addAssetRequirement.ts#L17)*

array of conditions that form the requirement that must be added.
  Conditions within a requirement are *AND* between them. This means that in order
  for a transfer to comply with this requirement, it must fulfill *ALL* conditions
