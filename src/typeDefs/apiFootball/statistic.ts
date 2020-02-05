import { gql } from 'apollo-server'

const Statistic = gql`
  type Statistics {
    team: TeamData
    statistics: [Stat]
  }

  type Stat {
    type: String
    value: String
  }

  extend type Query {
    getStatistics(fixtureId: String!): [Statistics]
  }
`

export default Statistic
