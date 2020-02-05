import { gql } from 'apollo-server'

const Lineup = gql`
  type Lineup {
    team: TeamData
    formation: String
    startXI: [Player]
  }

  type Player {
    player: PlayerData
  }

  type PlayerData {
    id: ID
    name: String
    number: String
    pos: String
  }

  extend type Query {
    getLineups(fixtureId: String!): [Lineup]
  }
`

export default Lineup
