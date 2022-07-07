# Enumeration: PermissionGroupType

## Index

### Enumeration members

* [ExceptMeta](permissiongrouptype.md#exceptmeta)
* [Full](permissiongrouptype.md#full)
* [PolymeshV1Caa](permissiongrouptype.md#polymeshv1caa)
* [PolymeshV1Pia](permissiongrouptype.md#polymeshv1pia)

## Enumeration members

###  ExceptMeta

• **ExceptMeta**: = "ExceptMeta"

*Defined in [src/types/index.ts:1012](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/types/index.ts#L1012)*

not authorized:
  - externalAgents

___

###  Full

• **Full**: = "Full"

*Defined in [src/types/index.ts:1007](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/types/index.ts#L1007)*

all transactions authorized

___

###  PolymeshV1Caa

• **PolymeshV1Caa**: = "PolymeshV1Caa"

*Defined in [src/types/index.ts:1019](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/types/index.ts#L1019)*

authorized:
  - corporateAction
  - corporateBallot
  - capitalDistribution

___

###  PolymeshV1Pia

• **PolymeshV1Pia**: = "PolymeshV1Pia"

*Defined in [src/types/index.ts:1027](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/types/index.ts#L1027)*

authorized:
  - asset.issue
  - asset.redeem
  - asset.controllerTransfer
  - sto (except for sto.invest)
