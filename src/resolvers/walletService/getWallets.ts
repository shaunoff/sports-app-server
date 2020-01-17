import { QueryResolvers } from '../../../generated/graphql'
import getParamsForFields from '../../lib/getParamsForFields'

export const getWallets: QueryResolvers = {
  getWallets: (root, { params = {} }, { dataSources }, info) => {
    params = getParamsForFields(info, params)
    return dataSources.walletService.getWallets(params)
  },
}
