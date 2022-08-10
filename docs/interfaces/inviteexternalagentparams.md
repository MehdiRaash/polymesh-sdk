# Interface: InviteExternalAgentParams

## Hierarchy

* **InviteExternalAgentParams**

## Index

### Properties

* [expiry](inviteexternalagentparams.md#optional-expiry)
* [permissions](inviteexternalagentparams.md#permissions)
* [target](inviteexternalagentparams.md#target)

## Properties

### `Optional` expiry

• **expiry**? : *[Date](../enums/transactionargumenttype.md#date)*

*Defined in [src/api/procedures/inviteExternalAgent.ts:47](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/api/procedures/inviteExternalAgent.ts#L47)*

date at which the authorization request for invitation expires (optional)

**`note`** if expiry date is not set, the invitation will never expire

___

###  permissions

• **permissions**: *[KnownPermissionGroup](../classes/knownpermissiongroup.md) | [CustomPermissionGroup](../classes/custompermissiongroup.md) | object | object*

*Defined in [src/api/procedures/inviteExternalAgent.ts:33](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/api/procedures/inviteExternalAgent.ts#L33)*

___

###  target

• **target**: *string | [Identity](../classes/identity.md)*

*Defined in [src/api/procedures/inviteExternalAgent.ts:32](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/api/procedures/inviteExternalAgent.ts#L32)*
