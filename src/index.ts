import { ApolloServer } from 'apollo-server'
import typeDefs from './typeDefs'
import resolvers from './resolvers'
import dataSources from './dataSources'

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources,
  context: ({ req }) => {
    // On each request, read the 'Authorization' header and store it in context
    // to be used by all resolvers.
    if (req?.headers?.authorization) {
      return {
        token: req.headers.authorization,
      }
    } else {
      return {}
    }
  },
  tracing: true,
  debug: true,
})

server.listen().then(({ url }: { url: String }) => {
  console.log(`🚀  Server ready at ${url}`)
})
