import { gql } from 'apollo-server'

const Task = gql`
  extend type Query {
    getTasks: [Task]
    getTask(id: String!): Task!
  }
  #   type TaskFeed {
  #     taskFeed: [Task!]
  #     pageInfo: PageInfo!
  #   }

  #   type PageInfo {
  #     nextPageCursor: String
  #     hasNextPage: Boolean
  #   }

  #   input createTaskInput {
  #     name: String!
  #     completed: Boolean!
  #   }

  #   extend type Mutation {
  #     createTask(input: createTaskInput!): Task
  #     updateTask(id: ID!, input: updateTaskInput!): Task
  #     deleteTask(id: ID!): Task
  #   }

  #   input updateTaskInput {
  #     name: String
  #     completed: Boolean
  #   }

  type Task {
    id: String
    name: String
    completed: Boolean
    user: User
    # createdAt: Date!
    # updatedAt: Date!
  }
`

export default Task
