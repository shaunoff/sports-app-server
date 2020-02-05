import { QueryResolvers } from '../../../generated/graphql'

export const Query: QueryResolvers = {
  getStandings: (_, { id, season }, { dataSources }) => {
    return dataSources.apiFootball.getStandings(id, season)
  },
}
