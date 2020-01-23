import { QueryResolvers, TaskResolvers } from '../../../generated/graphql'
import { tasks, users } from '../../constants'

export const Query: QueryResolvers = {
  getTasks: () => {
    return tasks
  },
  getTask: (_, { id }) => {
    const task = tasks.find((task) => task.id === id)
    return task || tasks[0]
  },
}

export const Task: TaskResolvers = {
  user: ({ id }) => {
    const user = users.find((user) => user.id === id)
    return user || users[0]
  },
}
