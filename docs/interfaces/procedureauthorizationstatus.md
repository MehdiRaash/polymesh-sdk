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

*Defined in [src/types/index.ts:1218](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/types/index.ts#L1218)*

whether the Account is frozen (i.e. can't perform any transactions)

___

###  agentPermissions

• **agentPermissions**: *[CheckPermissionsResult](checkpermissionsresult.md)‹[Identity](../enums/signertype.md#identity)›*

*Defined in [src/types/index.ts:1206](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/types/index.ts#L1206)*

whether the Identity complies with all required Agent permissions

___

###  noIdentity

• **noIdentity**: *boolean*

*Defined in [src/types/index.ts:1223](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/types/index.ts#L1223)*

true only if the Procedure requires an Identity but the signing Account
  doesn't have one associated

___

###  roles

• **roles**: *[CheckRolesResult](checkrolesresult.md)*

*Defined in [src/types/index.ts:1214](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/types/index.ts#L1214)*

whether the Identity complies with all required Roles

___

###  signerPermissions

• **signerPermissions**: *[CheckPermissionsResult](checkpermissionsresult.md)‹[Account](../enums/signertype.md#account)›*

*Defined in [src/types/index.ts:1210](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/types/index.ts#L1210)*

whether the Account complies with all required Signer permissions
