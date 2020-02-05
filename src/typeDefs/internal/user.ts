import { gql } from 'apollo-server'

const User = gql`
  extend type Query {
    getUsers: [User]
    getUser(id: ID!): User!
  }

  extend type Mutation {
    addUser(input: signupInput): User
    # login(input: loginInput): Token
  }

  #   input loginInput {
  #     email: String!
  #     password: String!
  #   }

  #   type Token {
  #     token: String!
  #   }

  input signupInput {
    name: String!
    email: String!
  }

  type User {
    id: ID!
    name: String!
    email: String!
    tasks: [Task]
  }

  #   extend type Subscription {
  #     userCreated: User
  #   }
`
export default User
