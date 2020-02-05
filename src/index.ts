import 'reflect-metadata'
import { createConnection } from 'typeorm'
import { ApolloServer } from 'apollo-server'
import typeDefs from './typeDefs'
import resolvers from './resolvers'
import dataSources from './dataSources'

const startServer = async () => {
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

  await createConnection()
  console.log('🗄  successful database connection')

  const ready = await server.listen()
  console.log(`🚀  Server ready at ${ready.url}`)
}

startServer()
