import { gql } from 'apollo-server'

const Team = gql`
  type TeamData {
    id: String
    name: String
    country: String
    founded: String
    is_national: Boolean
    logo: String
  }

  type Team {
    team: TeamData
  }

  extend type Query {
    getTeamsFromLeague(id: String!, season: String): [Team]
  }
`

export default Team
