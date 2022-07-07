# Enumeration: TransferError

Akin to TransferStatus, these are a bit more granular and specific. Every TransferError translates to
  a [TransferStatus](transferstatus.md), but two or more TransferErrors can represent the same TransferStatus, and
  not all Transfer Statuses are represented by a TransferError

## Index

### Enumeration members

* [InsufficientBalance](transfererror.md#insufficientbalance)
* [InsufficientPortfolioBalance](transfererror.md#insufficientportfoliobalance)
* [InvalidGranularity](transfererror.md#invalidgranularity)
* [InvalidReceiverCdd](transfererror.md#invalidreceivercdd)
* [InvalidReceiverPortfolio](transfererror.md#invalidreceiverportfolio)
* [InvalidSenderCdd](transfererror.md#invalidsendercdd)
* [InvalidSenderPortfolio](transfererror.md#invalidsenderportfolio)
* [ScopeClaimMissing](transfererror.md#scopeclaimmissing)
* [SelfTransfer](transfererror.md#selftransfer)
* [TransfersFrozen](transfererror.md#transfersfrozen)

## Enumeration members

###  InsufficientBalance

• **InsufficientBalance**: = "InsufficientBalance"

*Defined in [src/types/index.ts:610](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/types/index.ts#L610)*

translates to TransferStatus.InsufficientBalance

occurs if the sender Identity does not have enough balance to cover the amount

___

###  InsufficientPortfolioBalance

• **InsufficientPortfolioBalance**: = "InsufficientPortfolioBalance"

*Defined in [src/types/index.ts:634](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/types/index.ts#L634)*

translates to TransferStatus.PortfolioFailure

occurs if the sender Portfolio does not have enough balance to cover the amount

___

###  InvalidGranularity

• **InvalidGranularity**: = "InvalidGranularity"

*Defined in [src/types/index.ts:579](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/types/index.ts#L579)*

translates to TransferStatus.InvalidGranularity

occurs if attempting to transfer decimal amounts of a non-divisible token

___

###  InvalidReceiverCdd

• **InvalidReceiverCdd**: = "InvalidReceiverCdd"

*Defined in [src/types/index.ts:591](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/types/index.ts#L591)*

translates to TransferStatus.InvalidReceiverIdentity

occurs if the receiver Identity doesn't have a valid CDD claim

___

###  InvalidReceiverPortfolio

• **InvalidReceiverPortfolio**: = "InvalidReceiverPortfolio"

*Defined in [src/types/index.ts:628](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/types/index.ts#L628)*

translates to TransferStatus.PortfolioFailure

occurs if the receiver Portfolio doesn't exist

___

###  InvalidSenderCdd

• **InvalidSenderCdd**: = "InvalidSenderCdd"

*Defined in [src/types/index.ts:597](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/types/index.ts#L597)*

translates to TransferStatus.InvalidSenderIdentity

occurs if the receiver Identity doesn't have a valid CDD claim

___

###  InvalidSenderPortfolio

• **InvalidSenderPortfolio**: = "InvalidSenderPortfolio"

*Defined in [src/types/index.ts:622](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/types/index.ts#L622)*

translates to TransferStatus.PortfolioFailure

occurs if the sender Portfolio doesn't exist

___

###  ScopeClaimMissing

• **ScopeClaimMissing**: = "ScopeClaimMissing"

*Defined in [src/types/index.ts:604](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/types/index.ts#L604)*

translates to TransferStatus.ScopeClaimMissing

occurs if one of the participants doesn't have a valid Investor Uniqueness Claim for
  the Asset

___

###  SelfTransfer

• **SelfTransfer**: = "SelfTransfer"

*Defined in [src/types/index.ts:585](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/types/index.ts#L585)*

translates to TransferStatus.InvalidReceiverIdentity

occurs if the origin and destination Identities are the same

___

###  TransfersFrozen

• **TransfersFrozen**: = "TransfersFrozen"

*Defined in [src/types/index.ts:616](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/types/index.ts#L616)*

translates to TransferStatus.TransfersHalted

occurs if the Asset's transfers are frozen
