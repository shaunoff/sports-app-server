import ApiFootball from './apiFootball'
import FootballData from './footballData'

export default () => ({
  apiFootball: new ApiFootball(),
  footballData: new FootballData(),
})
