import { QueryResolvers } from '../../../generated/graphql'
import getParamsForFields from '../../lib/getParamsForFields'

export const getCampaigns: QueryResolvers = {
  getCampaigns: (
    root,
    { resourceType, resourceId, params = {} },
    { dataSources },
    info,
  ) => {
    params = getParamsForFields(info, params)
    return dataSources.legacyAPI.getCampaigns(resourceType, resourceId, params)
  },
}
