# Interface: ModifyCorporateActionsAgentParams

## Hierarchy

* **ModifyCorporateActionsAgentParams**

## Index

### Properties

* [requestExpiry](modifycorporateactionsagentparams.md#optional-requestexpiry)
* [target](modifycorporateactionsagentparams.md#target)

## Properties

### `Optional` requestExpiry

• **requestExpiry**? : *[Date](../enums/transactionargumenttype.md#date)*

*Defined in [src/api/procedures/modifyCorporateActionsAgent.ts:19](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/procedures/modifyCorporateActionsAgent.ts#L19)*

date at which the authorization request to modify the Corporate Actions Agent expires (optional, never expires if a date is not provided)

___

###  target

• **target**: *string | [Identity](../classes/identity.md)*

*Defined in [src/api/procedures/modifyCorporateActionsAgent.ts:15](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/procedures/modifyCorporateActionsAgent.ts#L15)*

Identity to be set as Corporate Actions Agent
