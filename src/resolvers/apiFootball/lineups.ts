import { QueryResolvers } from '../../../generated/graphql'

export const Query: QueryResolvers = {
  getLineups: (_, { fixtureId }, { dataSources }) => {
    return dataSources.apiFootball.getLineups(fixtureId)
  },
}
