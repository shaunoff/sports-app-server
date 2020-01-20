import { gql } from 'apollo-server'

const Team = gql`
  type Teams {
    count: String
    teams: [Team]
  }

  type Team {
    id: String
    name: String
  }

  extend type Query {
    getTeams(competitionId: String): Teams
  }
`

export default Team
