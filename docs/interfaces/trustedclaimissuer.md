# Interface: TrustedClaimIssuer ‹**IsDefault**›

## Type parameters

▪ **IsDefault**: *boolean*

whether the Identity is a default trusted claim issuer for an asset or just
  for a specific compliance condition. Defaults to false

## Hierarchy

* **TrustedClaimIssuer**

## Index

### Properties

* [identity](trustedclaimissuer.md#identity)
* [trustedFor](trustedclaimissuer.md#trustedfor)

## Properties

###  identity

• **identity**: *IsDefault extends true ? DefaultTrustedClaimIssuer : Identity*

*Defined in [src/types/index.ts:352](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/types/index.ts#L352)*

___

###  trustedFor

• **trustedFor**: *[ClaimType](../enums/claimtype.md)[] | null*

*Defined in [src/types/index.ts:356](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/types/index.ts#L356)*

a null value means that the issuer is trusted for all claim types
