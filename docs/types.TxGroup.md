# Enumeration: TxGroup

[types](../wiki/types).TxGroup

Transaction Groups (for permissions purposes)

## Table of contents

### Enumeration Members

- [AdvancedAssetManagement](../wiki/types.TxGroup#advancedassetmanagement)
- [AssetManagement](../wiki/types.TxGroup#assetmanagement)
- [ClaimsManagement](../wiki/types.TxGroup#claimsmanagement)
- [ComplianceRequirementsManagement](../wiki/types.TxGroup#compliancerequirementsmanagement)
- [CorporateActionsManagement](../wiki/types.TxGroup#corporateactionsmanagement)
- [Distribution](../wiki/types.TxGroup#distribution)
- [Issuance](../wiki/types.TxGroup#issuance)
- [PortfolioManagement](../wiki/types.TxGroup#portfoliomanagement)
- [StoManagement](../wiki/types.TxGroup#stomanagement)
- [TrustedClaimIssuersManagement](../wiki/types.TxGroup#trustedclaimissuersmanagement)

## Enumeration Members

### AdvancedAssetManagement

• **AdvancedAssetManagement** = ``"AdvancedAssetManagement"``

- TxTags.asset.Freeze
- TxTags.asset.Unfreeze
- TxTags.identity.AddAuthorization
- TxTags.identity.RemoveAuthorization

#### Defined in

[types/index.ts:863](https://github.com/PolymeshAssociation/polymesh-sdk/blob/3d14e829/src/types/index.ts#L863)

___

### AssetManagement

• **AssetManagement** = ``"AssetManagement"``

- TxTags.asset.MakeDivisible
- TxTags.asset.RenameAsset
- TxTags.asset.SetFundingRound
- TxTags.asset.AddDocuments
- TxTags.asset.RemoveDocuments

#### Defined in

[types/index.ts:856](https://github.com/PolymeshAssociation/polymesh-sdk/blob/3d14e829/src/types/index.ts#L856)

___

### ClaimsManagement

• **ClaimsManagement** = ``"ClaimsManagement"``

- TxTags.identity.AddClaim
- TxTags.identity.RevokeClaim

#### Defined in

[types/index.ts:884](https://github.com/PolymeshAssociation/polymesh-sdk/blob/3d14e829/src/types/index.ts#L884)

___

### ComplianceRequirementsManagement

• **ComplianceRequirementsManagement** = ``"ComplianceRequirementsManagement"``

- TxTags.complianceManager.AddComplianceRequirement
- TxTags.complianceManager.RemoveComplianceRequirement
- TxTags.complianceManager.PauseAssetCompliance
- TxTags.complianceManager.ResumeAssetCompliance
- TxTags.complianceManager.ResetAssetCompliance

#### Defined in

[types/index.ts:892](https://github.com/PolymeshAssociation/polymesh-sdk/blob/3d14e829/src/types/index.ts#L892)

___

### CorporateActionsManagement

• **CorporateActionsManagement** = ``"CorporateActionsManagement"``

- TxTags.checkpoint.CreateSchedule,
- TxTags.checkpoint.RemoveSchedule,
- TxTags.checkpoint.CreateCheckpoint,
- TxTags.corporateAction.InitiateCorporateAction,
- TxTags.capitalDistribution.Distribute,
- TxTags.capitalDistribution.Claim,
- TxTags.identity.AddInvestorUniquenessClaim,

#### Defined in

[types/index.ts:902](https://github.com/PolymeshAssociation/polymesh-sdk/blob/3d14e829/src/types/index.ts#L902)

___

### Distribution

• **Distribution** = ``"Distribution"``

- TxTags.identity.AddInvestorUniquenessClaim
- TxTags.settlement.CreateVenue
- TxTags.settlement.AddInstruction
- TxTags.settlement.AddAndAffirmInstruction

#### Defined in

[types/index.ts:870](https://github.com/PolymeshAssociation/polymesh-sdk/blob/3d14e829/src/types/index.ts#L870)

___

### Issuance

• **Issuance** = ``"Issuance"``

- TxTags.asset.Issue

#### Defined in

[types/index.ts:874](https://github.com/PolymeshAssociation/polymesh-sdk/blob/3d14e829/src/types/index.ts#L874)

___

### PortfolioManagement

• **PortfolioManagement** = ``"PortfolioManagement"``

- TxTags.identity.AddInvestorUniquenessClaim
- TxTags.portfolio.MovePortfolioFunds
- TxTags.settlement.AddInstruction
- TxTags.settlement.AddAndAffirmInstruction
- TxTags.settlement.AffirmInstruction
- TxTags.settlement.RejectInstruction
- TxTags.settlement.CreateVenue

#### Defined in

[types/index.ts:848](https://github.com/PolymeshAssociation/polymesh-sdk/blob/3d14e829/src/types/index.ts#L848)

___

### StoManagement

• **StoManagement** = ``"StoManagement"``

- TxTags.sto.CreateFundraiser,
- TxTags.sto.FreezeFundraiser,
- TxTags.sto.Invest,
- TxTags.sto.ModifyFundraiserWindow,
- TxTags.sto.Stop,
- TxTags.sto.UnfreezeFundraiser,
- TxTags.identity.AddInvestorUniquenessClaim,
- TxTags.asset.Issue,
- TxTags.settlement.CreateVenue

#### Defined in

[types/index.ts:914](https://github.com/PolymeshAssociation/polymesh-sdk/blob/3d14e829/src/types/index.ts#L914)

___

### TrustedClaimIssuersManagement

• **TrustedClaimIssuersManagement** = ``"TrustedClaimIssuersManagement"``

- TxTags.complianceManager.AddDefaultTrustedClaimIssuer
- TxTags.complianceManager.RemoveDefaultTrustedClaimIssuer

#### Defined in

[types/index.ts:879](https://github.com/PolymeshAssociation/polymesh-sdk/blob/3d14e829/src/types/index.ts#L879)
