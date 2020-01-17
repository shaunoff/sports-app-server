import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest'
import {
  CampaignSearchParams,
  CampaignsParams,
} from '../../../generated/graphql'
import formatQueryParams from '../../lib/formatQueryParams'

//Campaigns
class LegacyAPI extends RESTDataSource {
  constructor() {
    super()
    this.baseURL = 'https://api.dev.pbxx.io'
  }

  willSendRequest(request: RequestOptions) {
    if (this.context.token) {
      request.headers.set('Authorization', this.context.token)
    }
  }

  async getCampaignSearch(
    resourceType: String,
    resourceId: String,
    params: CampaignSearchParams,
  ) {
    return this.get(
      `/v2/${resourceType}/${resourceId}/campaigns/search${formatQueryParams(
        params,
      )}`,
    )
  }

  async getCampaigns(
    resourceType: String,
    resourceId: String,
    params: CampaignsParams,
  ) {
    return this.get(
      `/v2/${resourceType}/${resourceId}/campaigns${formatQueryParams(params)}`,
    )
  }
}

export default LegacyAPI
