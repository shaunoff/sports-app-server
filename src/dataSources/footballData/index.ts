import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest'

class FootballData extends RESTDataSource {
  constructor() {
    super()
    this.baseURL = 'http://api.football-data.org/v2'
  }

  willSendRequest(request: RequestOptions) {
    request.headers.set('X-Auth-Token', '1b14fdf35b9a4e0fb2996702105b0c83')
  }

  async getCompetitions() {
    return this.get(`/competitions`)
  }

  async getCompetition(id: string) {
    return this.get(`/competitions/${id}`)
  }

  async getTeams(competitionId: string) {
    return this.get(`/competitions/${competitionId}/teams`)
  }
}

export default FootballData
