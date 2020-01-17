import LegacyAPI from './LegacyAPI'
import WalletService from './WalletService'

export default () => ({
  legacyAPI: new LegacyAPI(),
  walletService: new WalletService(),
})
