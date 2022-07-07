# Interface: CheckRolesResult

Result of a `checkRoles` call

## Hierarchy

* **CheckRolesResult**

## Index

### Properties

* [message](checkrolesresult.md#optional-message)
* [missingRoles](checkrolesresult.md#optional-missingroles)
* [result](checkrolesresult.md#result)

## Properties

### `Optional` message

• **message**? : *undefined | string*

*Defined in [src/types/index.ts:980](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/types/index.ts#L980)*

optional message explaining the reason for failure in special cases

___

### `Optional` missingRoles

• **missingRoles**? : *[Role](../globals.md#role)[]*

*Defined in [src/types/index.ts:972](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/types/index.ts#L972)*

required roles which the Identity *DOESN'T* have. Only present if `result` is `false`

___

###  result

• **result**: *boolean*

*Defined in [src/types/index.ts:976](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/types/index.ts#L976)*

whether the signer possesses all the required roles or not
