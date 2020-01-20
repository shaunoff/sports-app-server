//Template
import { getTemplates } from './template/getTemplates'
// import { getCompetitions } from './footballData/getCompetitions'
// import { getCompetition } from './footballData/getCompetition'
//import { getTeams } from './footballData/getTeams'
import { getCampaignSearch } from './legacyAPI/getCampaignSearch'
import { getCampaigns } from './legacyAPI/getCampaigns'
import { getWallets } from './walletService/getWallets'
import { addFunds } from './walletService/addFunds'
import { getLeague } from './apiFootball/getLeague'

const Query: any = {
  ...getLeague,
  ...getTemplates,
  //...getCompetition,
  //...getCompetitions,
  //...getTeams,
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
