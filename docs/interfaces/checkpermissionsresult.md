# Interface: CheckPermissionsResult ‹**Type**›

Result of a `checkPermissions` call. If `Type` is `Account`, represents whether the Account
  has all the necessary secondary key Permissions. If `Type` is `Identity`, represents whether the
  Identity has all the necessary external agent Permissions

## Type parameters

▪ **Type**: *[SignerType](../enums/signertype.md)*

## Hierarchy

* **CheckPermissionsResult**

## Index

### Properties

* [message](checkpermissionsresult.md#optional-message)
* [missingPermissions](checkpermissionsresult.md#optional-missingpermissions)
* [result](checkpermissionsresult.md#result)

## Properties

### `Optional` message

• **message**? : *undefined | string*

*Defined in [src/types/index.ts:1000](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/types/index.ts#L1000)*

optional message explaining the reason for failure in special cases

___

### `Optional` missingPermissions

• **missingPermissions**? : *Type extends Account ? SimplePermissions : TxTag[] | null*

*Defined in [src/types/index.ts:992](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/types/index.ts#L992)*

required permissions which the signer *DOESN'T* have. Only present if `result` is `false`

___

###  result

• **result**: *boolean*

*Defined in [src/types/index.ts:996](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/types/index.ts#L996)*

whether the signer complies with the required permissions or not
