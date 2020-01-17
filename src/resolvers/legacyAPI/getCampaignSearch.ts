import { QueryResolvers } from '../../../generated/graphql'

export const getCampaignSearch: QueryResolvers = {
  getCampaignSearch: (
    root,
    { resourceType, resourceId, params = {} },
    { dataSources },
    info,
  ) => {
    return dataSources.legacyAPI.getCampaignSearch(
      resourceType,
      resourceId,
      params,
    )
  },
}
