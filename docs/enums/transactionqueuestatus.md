# Enumeration: TransactionQueueStatus

## Index

### Enumeration members

* [Failed](transactionqueuestatus.md#failed)
* [Idle](transactionqueuestatus.md#idle)
* [Running](transactionqueuestatus.md#running)
* [Succeeded](transactionqueuestatus.md#succeeded)

## Enumeration members

###  Failed

• **Failed**: = "Failed"

*Defined in [src/types/index.ts:79](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/types/index.ts#L79)*

a critical transaction's execution failed.
This might mean the transaction was rejected,
failed due to a revert or never entered a block

___

###  Idle

• **Idle**: = "Idle"

*Defined in [src/types/index.ts:69](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/types/index.ts#L69)*

the queue is prepped to run

___

###  Running

• **Running**: = "Running"

*Defined in [src/types/index.ts:73](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/types/index.ts#L73)*

transactions in the queue are being executed

___

###  Succeeded

• **Succeeded**: = "Succeeded"

*Defined in [src/types/index.ts:84](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/types/index.ts#L84)*

the queue finished running all of its transactions. Non-critical transactions
might still have failed
