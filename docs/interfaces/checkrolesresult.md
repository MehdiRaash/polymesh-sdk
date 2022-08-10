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

*Defined in [src/types/index.ts:971](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/types/index.ts#L971)*

optional message explaining the reason for failure in special cases

___

### `Optional` missingRoles

• **missingRoles**? : *[Role](../globals.md#role)[]*

*Defined in [src/types/index.ts:963](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/types/index.ts#L963)*

required roles which the Identity *DOESN'T* have. Only present if `result` is `false`

___

###  result

• **result**: *boolean*

*Defined in [src/types/index.ts:967](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/types/index.ts#L967)*

whether the signer possesses all the required roles or not
