import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest'
import { WalletsParams, AddFundsParams } from '../../../generated/graphql'
import formatQueryParams from '../../lib/formatQueryParams'

//Template
class Template extends RESTDataSource {
  constructor() {
    super()
    this.baseURL = 'https://official-joke-api.appspot.com'
  }

  getTemplates() {
    return this.get(`/random_ten`)
  }
}

export default Template
