import { QueryResolvers } from '../../../generated/graphql'

export const getLeague: QueryResolvers = {
  getLeague: (root, {}, { dataSources }, info) => {
    return dataSources.apiFootball.getLeague()
  },
}
