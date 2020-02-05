import { gql } from 'apollo-server'

const League = gql`
  type League {
    id: String
    name: String
    country: Country
    type: String
    logo: String
  }
  type Country {
    name: String
    flag: String
  }
  extend type Query {
    getLeague(id: String!): League!
    getLeagues: [League]
  }
`

export default League
