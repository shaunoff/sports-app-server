//Template
import { Resolvers } from '../../generated/graphql'
import { GraphQLDateTime } from 'graphql-iso-date'

import {
  Query as UserQuery,
  Mutation as UserMutation,
  User,
} from './internal/users'

import { Query as TaskQuery, Task } from './internal/tasks'

import { Query as LeagueQuery } from './apiFootball/leagues'
import { Query as TeamQuery } from './apiFootball/teams'
import { Query as StandingQuery } from './apiFootball/standings'
import { Query as FixtureQuery, Fixture } from './apiFootball/fixtures'
import { Query as StatisticsQuery } from './apiFootball/statistics'
import { Query as LineupsQuery } from './apiFootball/lineups'
// stats need to be added
// events need to be added
import { Query as OddsQuery } from './apiFootball/odds'

const Query = {
  ...UserQuery,
  ...TaskQuery,
  ...LeagueQuery,
  ...TeamQuery,
  ...StandingQuery,
  ...FixtureQuery,
  ...StatisticsQuery,
  ...LineupsQuery,
  ...OddsQuery,
}

const Mutation: any = {
  ...UserMutation,
}

const resolvers: Resolvers = {
  Date: GraphQLDateTime,
  Query,
  Mutation,
  User,
  Task,
  Fixture,
}

export default resolvers
