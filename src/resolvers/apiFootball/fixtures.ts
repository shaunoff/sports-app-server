import { QueryResolvers, FixtureResolvers } from '../../../generated/graphql'

export const Query: QueryResolvers = {
  getFixture: (_, { fixtureId }, { dataSources }) => {
    return dataSources.apiFootball.getFixture(fixtureId)
  },
  getFixtures: (_, { leagueId, season }, { dataSources }) => {
    return dataSources.apiFootball.getFixtures(leagueId, season)
  },
}

export const Fixture: FixtureResolvers = {
  lineups: ({ fixture }, __, { dataSources }) =>
    dataSources.apiFootball.getLineups(fixture.id),
  odds: ({ fixture }, __, { dataSources }) =>
    dataSources.apiFootball.getOdds(fixture.id),
}
