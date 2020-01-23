//Template
import { Resolvers } from '../../generated/graphql'

import { Query as UserQuery, User } from './internal/users'
import { Query as TaskQuery, Task } from './internal/tasks'

const Query = {
  ...UserQuery,
  ...TaskQuery,
}

const Mutation: any = {
  //...addFunds,
}

const resolvers: Resolvers = {
  Query,
  Mutation,
  User,
  Task,
}

export default resolvers
