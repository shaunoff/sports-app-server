import LegacyAPI from './legacyAPI'
import WalletService from './walletService'
import Template from './template'
import ApiFootball from './apiFootball'
//import FootballData from './footballData'

export default () => ({
  legacyAPI: new LegacyAPI(),
  walletService: new WalletService(),
  template: new Template(),
  apiFootball: new ApiFootball(),
  //footballData: new FootballData(),
})
