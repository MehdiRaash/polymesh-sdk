# Enumeration: TxGroup

Transaction Groups (for permissions purposes)

## Index

### Enumeration members

* [AdvancedAssetManagement](txgroup.md#advancedassetmanagement)
* [AssetManagement](txgroup.md#assetmanagement)
* [ClaimsManagement](txgroup.md#claimsmanagement)
* [ComplianceRequirementsManagement](txgroup.md#compliancerequirementsmanagement)
* [CorporateActionsManagement](txgroup.md#corporateactionsmanagement)
* [Distribution](txgroup.md#distribution)
* [Issuance](txgroup.md#issuance)
* [PortfolioManagement](txgroup.md#portfoliomanagement)
* [StoManagement](txgroup.md#stomanagement)
* [TrustedClaimIssuersManagement](txgroup.md#trustedclaimissuersmanagement)

## Enumeration members

###  AdvancedAssetManagement

• **AdvancedAssetManagement**: = "AdvancedAssetManagement"

*Defined in [src/types/index.ts:820](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/types/index.ts#L820)*

- TxTags.asset.Freeze
- TxTags.asset.Unfreeze
- TxTags.identity.AddAuthorization
- TxTags.identity.RemoveAuthorization

___

###  AssetManagement

• **AssetManagement**: = "AssetManagement"

*Defined in [src/types/index.ts:813](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/types/index.ts#L813)*

- TxTags.asset.MakeDivisible
- TxTags.asset.RenameAsset
- TxTags.asset.SetFundingRound
- TxTags.asset.AddDocuments
- TxTags.asset.RemoveDocuments

___

###  ClaimsManagement

• **ClaimsManagement**: = "ClaimsManagement"

*Defined in [src/types/index.ts:841](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/types/index.ts#L841)*

- TxTags.identity.AddClaim
- TxTags.identity.RevokeClaim

___

###  ComplianceRequirementsManagement

• **ComplianceRequirementsManagement**: = "ComplianceRequirementsManagement"

*Defined in [src/types/index.ts:849](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/types/index.ts#L849)*

- TxTags.complianceManager.AddComplianceRequirement
- TxTags.complianceManager.RemoveComplianceRequirement
- TxTags.complianceManager.PauseAssetCompliance
- TxTags.complianceManager.ResumeAssetCompliance
- TxTags.complianceManager.ResetAssetCompliance

___

###  CorporateActionsManagement

• **CorporateActionsManagement**: = "CorporateActionsManagement"

*Defined in [src/types/index.ts:859](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/types/index.ts#L859)*

- TxTags.checkpoint.CreateSchedule,
- TxTags.checkpoint.RemoveSchedule,
- TxTags.checkpoint.CreateCheckpoint,
- TxTags.corporateAction.InitiateCorporateAction,
- TxTags.capitalDistribution.Distribute,
- TxTags.capitalDistribution.Claim,
- TxTags.identity.AddInvestorUniquenessClaim,

___

###  Distribution

• **Distribution**: = "Distribution"

*Defined in [src/types/index.ts:827](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/types/index.ts#L827)*

- TxTags.identity.AddInvestorUniquenessClaim
- TxTags.settlement.CreateVenue
- TxTags.settlement.AddInstruction
- TxTags.settlement.AddAndAffirmInstruction

___

###  Issuance

• **Issuance**: = "Issuance"

*Defined in [src/types/index.ts:831](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/types/index.ts#L831)*

- TxTags.asset.Issue

___

###  PortfolioManagement

• **PortfolioManagement**: = "PortfolioManagement"

*Defined in [src/types/index.ts:805](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/types/index.ts#L805)*

- TxTags.identity.AddInvestorUniquenessClaim
- TxTags.portfolio.MovePortfolioFunds
- TxTags.settlement.AddInstruction
- TxTags.settlement.AddAndAffirmInstruction
- TxTags.settlement.AffirmInstruction
- TxTags.settlement.RejectInstruction
- TxTags.settlement.CreateVenue

___

###  StoManagement

• **StoManagement**: = "StoManagement"

*Defined in [src/types/index.ts:871](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/types/index.ts#L871)*

- TxTags.sto.CreateFundraiser,
- TxTags.sto.FreezeFundraiser,
- TxTags.sto.Invest,
- TxTags.sto.ModifyFundraiserWindow,
- TxTags.sto.Stop,
- TxTags.sto.UnfreezeFundraiser,
- TxTags.identity.AddInvestorUniquenessClaim,
- TxTags.asset.Issue,
- TxTags.settlement.CreateVenue

___

###  TrustedClaimIssuersManagement

• **TrustedClaimIssuersManagement**: = "TrustedClaimIssuersManagement"

*Defined in [src/types/index.ts:836](https://github.com/PolymathNetwork/polymesh-sdk/blob/31a16a34/src/types/index.ts#L836)*

- TxTags.complianceManager.AddDefaultTrustedClaimIssuer
- TxTags.complianceManager.RemoveDefaultTrustedClaimIssuer
