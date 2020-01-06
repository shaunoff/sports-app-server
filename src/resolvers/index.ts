import { getCampaignSearch } from './getCampaignSearch'
import { getCampaigns } from './getCampaigns'

const Query: any = {
  ...getCampaignSearch,
  ...getCampaigns,
}

const resolvers = {
  Query,
}

export default resolvers
