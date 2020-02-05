import { gql } from 'apollo-server'

const Odds = gql`
  type Odds {
    league: League
    bookmakers: [Bookmaker]
  }
  type Bookmaker {
    id: ID
    name: String
    bets: [Bet]
  }

  type Bet {
    id: ID
    name: String
    values: [BetValue]
  }

  type BetValue {
    value: String
    odd: String
  }

  extend type Query {
    getOdds(fixtureId: String!): [Odds]
  }
`

export default Odds
