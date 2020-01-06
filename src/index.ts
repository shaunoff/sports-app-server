import { ApolloServer } from 'apollo-server'
import typeDefs from './schema'
import resolvers from './resolvers'
import dataSources from './dataSources'

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources,
  tracing: true,
  debug: true,
})

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`)
})
