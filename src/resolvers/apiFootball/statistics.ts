import { QueryResolvers } from '../../../generated/graphql'

export const Query: QueryResolvers = {
  getStatistics: (_, { fixtureId }, { dataSources }) => {
    return dataSources.apiFootball.getStatistics(fixtureId)
  },
}
