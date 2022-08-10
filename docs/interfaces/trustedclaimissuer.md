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

*Defined in [src/types/index.ts:343](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/types/index.ts#L343)*

___

###  trustedFor

• **trustedFor**: *[ClaimType](../enums/claimtype.md)[] | null*

*Defined in [src/types/index.ts:347](https://github.com/PolymeshAssociation/polymesh-sdk/blob/46845947/src/types/index.ts#L347)*

a null value means that the issuer is trusted for all claim types
