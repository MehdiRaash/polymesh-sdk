# Interface: DistributionParticipant

## Hierarchy

* **DistributionParticipant**

## Index

### Properties

* [amount](distributionparticipant.md#amount)
* [amountAfterTax](distributionparticipant.md#amountaftertax)
* [identity](distributionparticipant.md#identity)
* [paid](distributionparticipant.md#paid)
* [taxWithholdingPercentage](distributionparticipant.md#taxwithholdingpercentage)

## Properties

###  amount

• **amount**: *BigNumber*

*Defined in [src/api/entities/DividendDistribution/types.ts:15](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/entities/DividendDistribution/types.ts#L15)*

___

###  amountAfterTax

• **amountAfterTax**: *BigNumber*

*Defined in [src/api/entities/DividendDistribution/types.ts:23](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/entities/DividendDistribution/types.ts#L23)*

amount to be paid to the participant after tax deductions

___

###  identity

• **identity**: *[Identity](../classes/identity.md)*

*Defined in [src/api/entities/DividendDistribution/types.ts:14](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/entities/DividendDistribution/types.ts#L14)*

___

###  paid

• **paid**: *boolean*

*Defined in [src/api/entities/DividendDistribution/types.ts:24](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/entities/DividendDistribution/types.ts#L24)*

___

###  taxWithholdingPercentage

• **taxWithholdingPercentage**: *BigNumber*

*Defined in [src/api/entities/DividendDistribution/types.ts:19](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/entities/DividendDistribution/types.ts#L19)*

percentage (0-100) of tax withholding for this participant
