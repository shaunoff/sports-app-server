import { QueryResolvers } from '../../../generated/graphql'

export const Query: QueryResolvers = {
  getLeague: (_, { id }, { dataSources }) => {
    return dataSources.apiFootball.getLeague(id)
  },
  getLeagues: (_, __, { dataSources }) => {
    return dataSources.apiFootball.getLeagues()
  },
}
