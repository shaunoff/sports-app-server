import LegacyAPI from './legacyAPI'
import WalletService from './walletService'

export default () => ({
  legacyAPI: new LegacyAPI(),
  walletService: new WalletService(),
})
