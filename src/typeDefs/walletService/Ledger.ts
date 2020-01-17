import { gql } from 'apollo-server'

const Ledger = gql`
  type Restriction {
    key: String
    value: String
  }

  type Ledger {
    id: String
    wallet_id: String
    balance: String
    restrictions: [Restriction]
  }
`

export default Ledger
