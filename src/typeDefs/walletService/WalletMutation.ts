import { gql } from 'apollo-server'

const WalletQuery = gql`
  type AddFundsResponse {
    deposit_id: String
    transaction_id: String
  }

  input AddFundsParams {
    brand_id: String!
    source: String!
    source_id: String!
    amount_cents: String!
  }

  extend type Mutation {
    addFunds(params: AddFundsParams): AddFundsResponse
  }
`

export default WalletQuery
