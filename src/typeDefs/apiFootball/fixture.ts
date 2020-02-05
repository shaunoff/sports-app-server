import { gql } from 'apollo-server'

const Fixture = gql`
  type Fixture {
    fixture: FixtureData!
    status: FixtureStatus
    league: League
    goals: Goals
    teams: FixtureTeams
    lineups: [Lineup]
    statistics: [Statistics]
    events: [Event]
    odds: [Odds]
  }

  type FixtureData {
    id: ID!
    venue: String
    referee: String
    timezone: String
    date: Date
    timestamp: String
    status: FixtureStatus
  }

  type FixtureStatus {
    long: String
    short: String
    elapsed: String
  }

  type Goals {
    home: String
    away: String
  }

  type FixtureTeams {
    home: TeamData
    away: TeamData
  }

  extend type Query {
    getFixture(fixtureId: String!): Fixture
    getFixtures(leagueId: String!, season: String): [Fixture!]
  }
`

export default Fixture
