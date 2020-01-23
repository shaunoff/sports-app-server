import { QueryResolvers } from '../../../generated/graphql'

export const getCompetition: QueryResolvers = {
  getCompetition: (root, { competitionId }, { dataSources }, info) => {
    return dataSources.footballData.getCompetition(competitionId)
  },
}
