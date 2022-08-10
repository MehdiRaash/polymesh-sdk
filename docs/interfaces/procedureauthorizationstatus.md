# Interface: ProcedureAuthorizationStatus

## Hierarchy

* **ProcedureAuthorizationStatus**

## Index

### Properties

* [accountFrozen](procedureauthorizationstatus.md#accountfrozen)
* [agentPermissions](procedureauthorizationstatus.md#agentpermissions)
* [noIdentity](procedureauthorizationstatus.md#noidentity)
* [roles](procedureauthorizationstatus.md#roles)
* [signerPermissions](procedureauthorizationstatus.md#signerpermissions)

## Properties

###  accountFrozen

• **accountFrozen**: *boolean*

*Defined in [src/types/index.ts:1209](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/types/index.ts#L1209)*

whether the Account is frozen (i.e. can't perform any transactions)

___

###  agentPermissions

• **agentPermissions**: *[CheckPermissionsResult](checkpermissionsresult.md)‹[Identity](../enums/signertype.md#identity)›*

*Defined in [src/types/index.ts:1197](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/types/index.ts#L1197)*

whether the Identity complies with all required Agent permissions

___

###  noIdentity

• **noIdentity**: *boolean*

*Defined in [src/types/index.ts:1214](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/types/index.ts#L1214)*

true only if the Procedure requires an Identity but the signing Account
  doesn't have one associated

___

###  roles

• **roles**: *[CheckRolesResult](checkrolesresult.md)*

*Defined in [src/types/index.ts:1205](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/types/index.ts#L1205)*

whether the Identity complies with all required Roles

___

###  signerPermissions

• **signerPermissions**: *[CheckPermissionsResult](checkpermissionsresult.md)‹[Account](../enums/signertype.md#account)›*

*Defined in [src/types/index.ts:1201](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/types/index.ts#L1201)*

whether the Account complies with all required Signer permissions
