# Interface: HistoricAgentOperation

Events triggered by transactions performed by an Agent Identity, related to the Token's configuration
  For example: changing compliance requirements, inviting/removing agent Identities, freezing/unfreezing transfers

Token transfers (settlements or movements between Portfolios) do not count as Operations

## Hierarchy

* **HistoricAgentOperation**

## Index

### Properties

* [history](historicagentoperation.md#history)
* [identity](historicagentoperation.md#identity)

## Properties

###  history

• **history**: *[EventIdentifier](eventidentifier.md)[]*

*Defined in [src/types/index.ts:1379](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/types/index.ts#L1379)*

list of Token Operation Events that were triggered by the Agent Identity

___

###  identity

• **identity**: *[Identity](../classes/identity.md)*

*Defined in [src/types/index.ts:1375](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/types/index.ts#L1375)*

Agent Identity that performed the operations
