import { gql } from 'apollo-server'

const Standing = gql`
  type TeamInfo {
    id: String
    name: String
    logo: String
  }

  type LeagueGoals {
    for: String
    away: String
  }

  type Stats {
    played: String
    win: String
    draw: String
    lose: String
    goals: LeagueGoals
  }

  type TeamStanding {
    rank: String
    team: TeamInfo
    points: String
    goalsDiff: String
    form: String
    all: Stats
    home: Stats
    away: Stats
    update: Date
  }

  extend type Query {
    getStandings(id: String!, season: String): [TeamStanding]
  }
`

export default Standing
