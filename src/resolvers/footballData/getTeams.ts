import { QueryResolvers } from '../../../generated/graphql'

export const getTeams: QueryResolvers = {
  getTeams: (root, { competitionId }, { dataSources }, info) => {
    return dataSources.footballData.getTeams(competitionId)
  },
}
