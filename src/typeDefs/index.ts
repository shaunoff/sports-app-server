import { gql } from 'apollo-server'

//api-football
//import League from './apiFootball/League'

// Internal Types
import User from './internal/user'
import Task from './internal/task'

//Template Import
//import Competition from './footballData/Competition'
//import Team from './footballData/Team'

// Root
const Root = gql`
  type Query {
    _empty: String
  }

  type Mutation {
    _empty: String
  }
`

export default [Root, User, Task]
