import { QueryResolvers } from '../../../generated/graphql'

export const getTemplates: QueryResolvers = {
  getTemplates: (root, org, { dataSources }, info) => {
    return dataSources.template.getTemplates()
  },
}
