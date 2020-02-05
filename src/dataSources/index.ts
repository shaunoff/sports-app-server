import ApiFootball from './apiFootball'
import FootballData from './footballData'
import Internal from './internal'

export default () => ({
  apiFootball: new ApiFootball(),
  footballData: new FootballData(),
  internal: new Internal(),
})
