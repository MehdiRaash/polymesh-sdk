# Interface: ModifyPrimaryIssuanceAgentParams

## Hierarchy

* **ModifyPrimaryIssuanceAgentParams**

## Index

### Properties

* [requestExpiry](modifyprimaryissuanceagentparams.md#optional-requestexpiry)
* [target](modifyprimaryissuanceagentparams.md#target)

## Properties

### `Optional` requestExpiry

• **requestExpiry**? : *[Date](../enums/transactionargumenttype.md#date)*

*Defined in [src/api/procedures/modifyPrimaryIssuanceAgent.ts:19](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/procedures/modifyPrimaryIssuanceAgent.ts#L19)*

date at which the authorization request to modify the primary issuance agent expires (optional, never expires if a date is not provided)

___

###  target

• **target**: *string | [Identity](../classes/identity.md)*

*Defined in [src/api/procedures/modifyPrimaryIssuanceAgent.ts:15](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/procedures/modifyPrimaryIssuanceAgent.ts#L15)*

Identity to be set as primary issuance agent
