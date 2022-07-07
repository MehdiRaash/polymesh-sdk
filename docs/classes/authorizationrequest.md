# Class: AuthorizationRequest

Represents a request made by an Identity to another Identity (or Account) for some sort of authorization. This has multiple uses. For example, if Alice
  wants to transfer ownership of one of her Assets to Bob, this method emits an authorization request for Bob,
  who then has to accept it in order to complete the ownership transfer

## Hierarchy

* [Entity](entity.md)‹UniqueIdentifiers, [HumanReadable](../interfaces/humanreadable.md)›

  ↳ **AuthorizationRequest**

## Index

### Properties

* [authId](authorizationrequest.md#authid)
* [context](authorizationrequest.md#protected-context)
* [data](authorizationrequest.md#data)
* [expiry](authorizationrequest.md#expiry)
* [issuer](authorizationrequest.md#issuer)
* [target](authorizationrequest.md#target)
* [uuid](authorizationrequest.md#uuid)

### Methods

* [accept](authorizationrequest.md#accept)
* [exists](authorizationrequest.md#exists)
* [isEqual](authorizationrequest.md#isequal)
* [isExpired](authorizationrequest.md#isexpired)
* [remove](authorizationrequest.md#remove)
* [toHuman](authorizationrequest.md#tohuman)
* [generateUuid](authorizationrequest.md#static-generateuuid)
* [unserialize](authorizationrequest.md#static-unserialize)

## Properties

###  authId

• **authId**: *BigNumber*

*Defined in [src/api/entities/AuthorizationRequest.ts:99](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/entities/AuthorizationRequest.ts#L99)*

internal identifier for the Request (used to accept/reject/cancel)

___

### `Protected` context

• **context**: *Context*

*Inherited from [CheckpointSchedule](checkpointschedule.md).[context](checkpointschedule.md#protected-context)*

*Defined in [src/api/entities/Entity.ts:48](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/entities/Entity.ts#L48)*

___

###  data

• **data**: *[Authorization](../globals.md#authorization)*

*Defined in [src/api/entities/AuthorizationRequest.ts:88](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/entities/AuthorizationRequest.ts#L88)*

Authorization Request data corresponding to type of Authorization

| Type                            | Data                            |
|---------------------------------|---------------------------------|
| Add Relayer Paying Key          | Beneficiary, Relayer, Allowance |
| Become Agent                    | Permission Group                |
| Attest Primary Key Rotation     | DID                             |
| Rotate Primary Key              | N/A                             |
| Rotate Primary Key to Secondary | Permissions                     |
| Transfer Ticker                 | Ticker                          |
| Add MultiSig Signer             | Account                         |
| Transfer Asset Ownership        | Ticker                          |
| Join Identity                   | Permissions                     |
| Portfolio Custody               | Portfolio                       |

___

###  expiry

• **expiry**: *Date | null*

*Defined in [src/api/entities/AuthorizationRequest.ts:94](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/entities/AuthorizationRequest.ts#L94)*

date at which the Authorization Request expires and can no longer be accepted.
  At this point, a new Authorization Request must be emitted. Null if the Request never expires

___

###  issuer

• **issuer**: *[Identity](identity.md)*

*Defined in [src/api/entities/AuthorizationRequest.ts:70](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/entities/AuthorizationRequest.ts#L70)*

Identity that emitted the request

___

###  target

• **target**: *[Signer](../globals.md#signer)*

*Defined in [src/api/entities/AuthorizationRequest.ts:65](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/entities/AuthorizationRequest.ts#L65)*

Identity or Account to which the request was emitted

___

###  uuid

• **uuid**: *string*

*Inherited from [CheckpointSchedule](checkpointschedule.md).[uuid](checkpointschedule.md#uuid)*

*Defined in [src/api/entities/Entity.ts:46](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/entities/Entity.ts#L46)*

## Methods

###  accept

▸ **accept**(`opts?`: [ProcedureOpts](../interfaces/procedureopts.md)): *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

*Defined in [src/api/entities/AuthorizationRequest.ts:183](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/entities/AuthorizationRequest.ts#L183)*

Accept the Authorization Request. You must be the target of the Request to be able to accept it

**`note`** this method is of type [NoArgsProcedureMethod](../interfaces/noargsproceduremethod.md), which means you can call [accept.checkAuthorization](../interfaces/noargsproceduremethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

**Parameters:**

Name | Type |
------ | ------ |
`opts?` | [ProcedureOpts](../interfaces/procedureopts.md) |

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

___

###  exists

▸ **exists**(): *Promise‹boolean›*

*Overrides [Entity](entity.md).[exists](entity.md#abstract-exists)*

*Defined in [src/api/entities/AuthorizationRequest.ts:212](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/entities/AuthorizationRequest.ts#L212)*

Determine whether this Authorization Request exists on chain

**Returns:** *Promise‹boolean›*

___

###  isEqual

▸ **isEqual**(`entity`: [Entity](entity.md)‹unknown, unknown›): *boolean*

*Inherited from [CheckpointSchedule](checkpointschedule.md).[isEqual](checkpointschedule.md#isequal)*

*Defined in [src/api/entities/Entity.ts:61](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/entities/Entity.ts#L61)*

Determine whether this Entity is the same as another one

**Parameters:**

Name | Type |
------ | ------ |
`entity` | [Entity](entity.md)‹unknown, unknown› |

**Returns:** *boolean*

___

###  isExpired

▸ **isExpired**(): *boolean*

*Defined in [src/api/entities/AuthorizationRequest.ts:203](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/entities/AuthorizationRequest.ts#L203)*

Returns whether the Authorization Request has expired

**Returns:** *boolean*

___

###  remove

▸ **remove**(`opts?`: [ProcedureOpts](../interfaces/procedureopts.md)): *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

*Defined in [src/api/entities/AuthorizationRequest.ts:196](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/entities/AuthorizationRequest.ts#L196)*

Remove the Authorization Request

- If you are the Request issuer, this will cancel the Authorization
- If you are the Request target, this will reject the Authorization

**`note`** this method is of type [NoArgsProcedureMethod](../interfaces/noargsproceduremethod.md), which means you can call [remove.checkAuthorization](../interfaces/noargsproceduremethod.md#checkauthorization)
  on it to see whether the signing Account and Identity have the required roles and permissions to run it

**Parameters:**

Name | Type |
------ | ------ |
`opts?` | [ProcedureOpts](../interfaces/procedureopts.md) |

**Returns:** *Promise‹[TransactionQueue](transactionqueue.md)‹void››*

___

###  toHuman

▸ **toHuman**(): *[HumanReadable](../interfaces/humanreadable.md)*

*Overrides [Entity](entity.md).[toHuman](entity.md#abstract-tohuman)*

*Defined in [src/api/entities/AuthorizationRequest.ts:226](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/entities/AuthorizationRequest.ts#L226)*

Return the Authorization's static data

**Returns:** *[HumanReadable](../interfaces/humanreadable.md)*

___

### `Static` generateUuid

▸ **generateUuid**‹**Identifiers**›(`identifiers`: Identifiers): *string*

*Inherited from [CheckpointSchedule](checkpointschedule.md).[generateUuid](checkpointschedule.md#static-generateuuid)*

*Defined in [src/api/entities/Entity.ts:14](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/entities/Entity.ts#L14)*

Generate the Entity's UUID from its identifying properties

**Type parameters:**

▪ **Identifiers**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`identifiers` | Identifiers |   |

**Returns:** *string*

___

### `Static` unserialize

▸ **unserialize**‹**Identifiers**›(`serialized`: string): *Identifiers*

*Inherited from [CheckpointSchedule](checkpointschedule.md).[unserialize](checkpointschedule.md#static-unserialize)*

*Defined in [src/api/entities/Entity.ts:23](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/api/entities/Entity.ts#L23)*

Unserialize a UUID into its Unique Identifiers

**Type parameters:**

▪ **Identifiers**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`serialized` | string | UUID to unserialize  |

**Returns:** *Identifiers*
