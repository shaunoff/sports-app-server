import { gql } from 'apollo-server'

const Wallet = gql`
  type Wallet {
    id: String
    brand_id: String
    business_id: String
    balance: String
    ledgers: [Ledger]
  }

  type Wallets {
    wallets: [Wallet]
  }
`

export default Wallet
