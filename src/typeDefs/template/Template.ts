import { gql } from 'apollo-server'

const WalletQuery = gql`
  type Template {
    id: String
    setup: String
    punchline: String
  }

  extend type Query {
    getTemplates: [Template]
  }
`

export default WalletQuery
