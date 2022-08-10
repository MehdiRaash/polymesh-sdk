# Interface: TransferBreakdown

Object containing every reason why a specific Asset transfer would fail

## Hierarchy

* **TransferBreakdown**

## Index

### Properties

* [compliance](transferbreakdown.md#compliance)
* [general](transferbreakdown.md#general)
* [restrictions](transferbreakdown.md#restrictions)
* [result](transferbreakdown.md#result)

## Properties

###  compliance

• **compliance**: *[Compliance](../classes/compliance.md)*

*Defined in [src/api/entities/Asset/types.ts:44](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/api/entities/Asset/types.ts#L44)*

how the transfer adheres to the asset's compliance rules

___

###  general

• **general**: *[TransferError](../enums/transfererror.md)[]*

*Defined in [src/api/entities/Asset/types.ts:40](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/api/entities/Asset/types.ts#L40)*

list of general transfer errors

___

###  restrictions

• **restrictions**: *[TransferRestrictionResult](transferrestrictionresult.md)[]*

*Defined in [src/api/entities/Asset/types.ts:48](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/api/entities/Asset/types.ts#L48)*

list of transfer restrictions and whether the transfer satisfies each one

___

###  result

• **result**: *boolean*

*Defined in [src/api/entities/Asset/types.ts:52](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/api/entities/Asset/types.ts#L52)*

true if the transfer is possible
