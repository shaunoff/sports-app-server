import { MutationResolvers } from '../../../generated/graphql'
import getParamsForFields from '../../lib/getParamsForFields'

export const addFunds: MutationResolvers = {
  addFunds: (root, { params = {} }, { dataSources }, info) => {
    params = getParamsForFields(info, params)
    return dataSources.walletService.addFunds(params)
  },
}
