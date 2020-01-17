import { getCampaignSearch } from './legacyAPI/getCampaignSearch'
import { getCampaigns } from './legacyAPI/getCampaigns'
import { getWallets } from './walletService/getWallets'
import { addFunds } from './walletService/addFunds'

const Query: any = {
  ...getCampaignSearch,
  ...getCampaigns,
  ...getWallets,
}

const Mutation: any = {
  ...addFunds,
}

const resolvers = {
  Query,
  Mutation,
}

export default resolvers
