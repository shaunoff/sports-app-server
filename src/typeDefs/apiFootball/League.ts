import { gql } from 'apollo-server'

const League = gql`
  type League {
    id: String
    name: String
    country: Country
  }

  type Country {
    name: String
    flag: String
  }

  extend type Query {
    getLeague: [League]
  }
`

export default League
