import { gql } from 'apollo-server'

const CampaignQuery = gql`
  input CampaignsParams {
    per_page: Int
    offset: Int
    fields: [String]
  }

  input CampaignSearchParams {
    per_page: Int
    offset: Int
    search: String
  }

  extend type Query {
    getCampaignSearch(
      resourceType: String!
      resourceId: String!
      params: CampaignSearchParams
    ): [Campaign]
    getCampaigns(
      resourceType: String!
      resourceId: String!
      params: CampaignsParams
    ): [Campaign]
  }
`

export default CampaignQuery
