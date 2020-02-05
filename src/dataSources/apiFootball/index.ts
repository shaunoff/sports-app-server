import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest'

// interface ApiResponse {
//   get: string
//   parameters: {
//     season: string
//     id: string
//   }
//   errors: string[]
//   results: number
//   response: [
//     {
//       league: {
//         id: 39
//         name: 'Premier League'
//         type: 'League'
//         logo: 'https://media.api-football.com/leagues/2.png'
//         is_current: true
//       }
//       country: {
//         name: 'England'
//         code: 'GB'
//         flag: 'https://media.api-football.com/flags/gb.svg'
//       }
//       season: {
//         year: 2019
//         start: '2019-08-09'
//         end: '2020-05-17'
//       }
//       coverage: {
//         fixtures: {
//           events: true
//           lineups: true
//           statistics: true
//           players_statistics: true
//         }
//         standings: true
//         players: true
//         topScorers: true
//         predictions: true
//         odds: true
//       }
//     },
//   ]
// }

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

  async getLeague(id: string) {
    const data = await this.get(`/leagues?id=${id}`)
    const mappedData = data.response.map((leagueData: any) => {
      const { league } = leagueData
      Object.keys(league).map((key) => (leagueData[key] = league[key]))
      return leagueData
    })
    return mappedData[0]
  }
  async getLeagues() {
    const data = await this.get(
      `/leagues?current=true&country=england&type=league`,
    )
    const mappedData = data.response.map((leagueData: any) => {
      const { league } = leagueData
      Object.keys(league).map((key) => (leagueData[key] = league[key]))
      return leagueData
    })
    return mappedData.sort((a: any, b: any) => a.id - b.id)
  }
  async getTeamsFromLeague(id: string, season: string) {
    const data = await this.get(`/teams?league=${id}&season=${season}`)
    console.log(data.response[0].team)
    return data.response.sort((a: any, b: any) =>
      a.team.name.localeCompare(b.team.name),
    )
  }
  async getStandings(id: string, season: string) {
    const data = await this.get(`/standings?league=${id}&season=${season}`)
    console.log(data.response[0][1])
    return data.response[0]
    // return data.response.sort((a: any, b: any) =>
    //   a.team.name.localeCompare(b.team.name),
    // )
  }
  async getFixtures(leagueId: string, season: string) {
    const data = await this.get(
      `/fixtures?league=${leagueId}&season=${season}&round=regular season - 10`,
    )
    return data.response
  }
  async getFixture(fixtureId: string) {
    const data = await this.get(`/fixtures?id=${fixtureId}`)
    console.log('fixture')
    return data.response[0]
  }

  async getStatistics(fixtureId: string) {
    const data = await this.get(`/statistics?fixture=${fixtureId}`)
    return data.response
  }

  async getLineups(fixtureId: string) {
    const data = await this.get(`/lineups?fixture=${fixtureId}`)
    return data.response
  }

  async getOdds(fixtureId: string) {
    const data = await this.get(`/odds?fixture=${fixtureId}`)
    console.log(data)
    return data.response
  }
}

export default ApiFootball
