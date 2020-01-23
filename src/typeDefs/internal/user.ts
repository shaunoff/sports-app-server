import { gql } from 'apollo-server'

const User = gql`
  extend type Query {
    getUsers: [User]
    getUser(id: String): User
  }
  #   extend type Mutation {
  #     signup(input: signupInput): User
  #     login(input: loginInput): Token
  #   }

  #   input loginInput {
  #     email: String!
  #     password: String!
  #   }

  #   type Token {
  #     token: String!
  #   }

  #   input signupInput {
  #     name: String!
  #     email: String!
  #     password: String!
  #   }

  type User {
    id: String!
    name: String!
    email: String!
    tasks: [Task]
    # createdAt: Date!
    # updatedAt: Date!
  }

  #   extend type Subscription {
  #     userCreated: User
  #   }
`
export default User
