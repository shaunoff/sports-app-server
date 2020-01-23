import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest'

class ApiFootball extends RESTDataSource {
  constructor() {
    super()
    this.baseURL = 'https://api-football-beta.p.rapidapi.com'
  }

  willSendRequest(request: RequestOptions) {
    request.headers.set('X-RapidAPI-Host', 'api-football-beta.p.rapidapi.com')
    request.headers.set(
      'X-RapidAPI-Key',
      '8a017e8d38msh65a761b2d05f4dbp14997djsn2202fd576cb2',
    )
  }

  async getLeague() {
    const data = await this.get(`/leagues?id=524`)
    const mappedData = data.response.map((leagueData: any) => {
      const { league } = leagueData
      Object.keys(league).map((key) => (leagueData[key] = league[key]))
      return leagueData
    })
    return mappedData
  }
}

export default ApiFootball
