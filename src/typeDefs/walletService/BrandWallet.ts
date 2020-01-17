import { gql } from 'apollo-server'

const BrandWallet = gql`
  type BrandWallet {
    id: String
    payment_methods: [PaymentMethod]
  }

  type PaymentMethod {
    id: String
    type: String
    balance_cents: String
  }
`

export default BrandWallet
