import { gql } from 'apollo-server'

// Legacy API Types
import Campaign from './legacyAPI/Campaign'
import DigitalAsset from './legacyAPI/DigitalAsset'
import Asset from './legacyAPI/Asset'
import Brand from './legacyAPI/Brand'
import ShareSetting from './legacyAPI/ShareSetting'
import CampaignQuery from './legacyAPI/CampaignQuery'

// Wallet Service Types
import Wallet from './walletService/Wallet'
import Ledger from './walletService/Ledger'
import WalletQuery from './walletService/WalletQuery'
import WalletMutation from './walletService/WalletMutation'

// Root
const Root = gql`
  type Query {
    _empty: String
  }

  type Mutation {
    _empty: String
  }
`

export default [
  Root,
  Campaign,
  DigitalAsset,
  Asset,
  Brand,
  ShareSetting,
  CampaignQuery,
  Wallet,
  Ledger,
  WalletQuery,
  WalletMutation,
]
