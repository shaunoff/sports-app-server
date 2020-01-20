import { gql } from 'apollo-server'

const Competition = gql`
  type Competitions {
    count: Int
    competitions: [Competition]
  }

  type Competition {
    id: String
    name: String
  }

  extend type Query {
    getCompetitions: Competitions
    getCompetition(competitionId: String): Competition
    getStandings(competitionId: String): Competition
  }
`

export default Competition
