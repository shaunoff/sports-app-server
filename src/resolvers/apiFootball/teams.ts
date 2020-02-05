import { QueryResolvers } from '../../../generated/graphql'

export const Query: QueryResolvers = {
  getTeamsFromLeague: (_, { id, season }, { dataSources }) => {
    return dataSources.apiFootball.getTeamsFromLeague(id, season)
  },
}
