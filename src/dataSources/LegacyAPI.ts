import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest'
import { CampaignSearchParams, CampaignsParams } from '../../generated/graphql'
import formatQueryParams from '../lib/formatQueryParams'

//Campaigns
class LegacyAPI extends RESTDataSource {
  constructor() {
    super()
    this.baseURL = 'https://api.dev.pbxx.io'
  }

  willSendRequest(request: RequestOptions) {
    // console.log(request)
  }

  async getCampaignSearch(
    resourceType: String,
    resourceId: String,
    params: CampaignSearchParams,
  ) {
    return await this.get(
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
    const response = await this.get(
      `/v2/${resourceType}/${resourceId}/campaigns${formatQueryParams(params)}`,
    )
    return response
  }
}

export default LegacyAPI
