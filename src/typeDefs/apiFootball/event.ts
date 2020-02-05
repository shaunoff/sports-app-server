import { gql } from 'apollo-server'

const Event = gql`
  type Event {
    elapsed: String
    team: TeamData
    player: PlayerData
    assist: PlayerData
    type: String
    detail: String
  }

  extend type Query {
    getEvents(fixtureId: String!): [Event]
  }
`

export default Event
