import { QueryResolvers } from '../../../generated/graphql'

export const Query: QueryResolvers = {
  getOdds: (_, { fixtureId }, { dataSources }) => {
    return dataSources.apiFootball.getOdds(fixtureId)
  },
}
