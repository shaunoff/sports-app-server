import { QueryResolvers, UserResolvers } from '../../../generated/graphql'
import { users, tasks } from '../../constants'

export const Query: QueryResolvers = {
  getUsers: () => {
    return users
  },
  getUser: (_, { id }) => {
    const user = users.find((user) => user.id === id)
    return user || users[0]
  },
}

export const User: UserResolvers = {
  tasks: ({ id }) => tasks.filter((task) => task.userId === id),
}
