# Interface: SectionPermissions ‹**T**›

Signer/agent permissions for a specific type

## Type parameters

▪ **T**

type of Permissions (Asset, Transaction, Portfolio, etc)

## Hierarchy

* **SectionPermissions**

  ↳ [TransactionPermissions](transactionpermissions.md)

## Index

### Properties

* [type](sectionpermissions.md#type)
* [values](sectionpermissions.md#values)

## Properties

###  type

• **type**: *[PermissionType](../enums/permissiontype.md)*

*Defined in [src/types/index.ts:892](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/types/index.ts#L892)*

Whether the permissions are inclusive or exclusive

___

###  values

• **values**: *T[]*

*Defined in [src/types/index.ts:888](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/types/index.ts#L888)*

Values to be included/excluded
