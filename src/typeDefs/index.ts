import { gql } from 'apollo-server'

//api-football
import League from './apiFootball/league'
import Team from './apiFootball/team'
import Standing from './apiFootball/standing'
import Fixture from './apiFootball/fixture'
import Statistic from './apiFootball/statistic'
import Lineup from './apiFootball/lineup'
import Event from './apiFootball/event'
import Odds from './apiFootball/odds'

// Internal Types
import User from './internal/user'
import Task from './internal/task'

//Template Import
//import Competition from './footballData/Competition'
//import Team from './footballData/Team'

// Root
const Root = gql`
  scalar Date

  type Query {
    _empty: String
  }

  type Mutation {
    _empty: String
  }
`

export default [
  Root,
  User,
  Task,
  League,
  Team,
  Standing,
  Fixture,
  Statistic,
  Lineup,
  Event,
  Odds,
]
