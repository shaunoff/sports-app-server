import { QueryResolvers } from '../../../generated/graphql'

export const getCompetitions: QueryResolvers = {
  getCompetitions: (root, org, { dataSources }, info) => {
    return dataSources.footballData.getCompetitions()
  },
}
