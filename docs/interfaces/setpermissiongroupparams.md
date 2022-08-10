# Interface: SetPermissionGroupParams

This procedure can be called with:
  - An Asset's existing Custom Permission Group. The Identity will be assigned as an Agent of that Group for that Asset
  - A Known Permission Group and an Asset. The Identity will be assigned as an Agent of that Group for that Asset
  - A set of Transaction Permissions and an Asset. A Custom Permission Group will be created for that Asset with those permissions, and
    the Identity will be assigned as an Agent of that Group for that Asset
  - An array of [Transaction Groups](../enums/txgroup.md) that represent a set of permissions. A Custom Permission Group will be created with those permissions, and
    the Identity will be assigned as an Agent of that Group for that Asset

## Hierarchy

* **SetPermissionGroupParams**

## Index

### Properties

* [group](setpermissiongroupparams.md#group)

## Properties

###  group

• **group**: *[KnownPermissionGroup](../classes/knownpermissiongroup.md) | [CustomPermissionGroup](../classes/custompermissiongroup.md) | [TransactionsParams](transactionsparams.md) | [TxGroupParams](txgroupparams.md)*

*Defined in [src/api/procedures/setPermissionGroup.ts:49](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/api/procedures/setPermissionGroup.ts#L49)*
