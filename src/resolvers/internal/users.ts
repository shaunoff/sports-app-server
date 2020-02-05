import {
  QueryResolvers,
  MutationResolvers,
  UserResolvers,
} from '../../../generated/graphql'
import { users, tasks } from '../../constants'

export const Query: QueryResolvers = {
  getUsers: (_, __, { dataSources }) => {
    return dataSources.internal.getUsers()
  },
  getUser: (_, { id }, { dataSources }) => {
    return dataSources.internal.getUser(id)
  },
}

export const Mutation: MutationResolvers = {
  addUser: (_, { input }, { dataSources }) => {
    return dataSources.internal.addUser(input)
  },
}

export const User: UserResolvers = {
  tasks: ({ id }) => tasks.filter((task) => task.userId === id),
}
