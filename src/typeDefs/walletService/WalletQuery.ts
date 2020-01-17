import { gql } from 'apollo-server'

const WalletQuery = gql`
  input WalletsParams {
    brand_id: String
  }

  extend type Query {
    getWallets(params: WalletsParams): Wallets
  }
`

export default WalletQuery
