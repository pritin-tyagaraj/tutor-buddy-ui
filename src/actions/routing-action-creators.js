import RoutingActionTypes from './action-types/routing'

export default {
  navToDashboard: () => ({ type: RoutingActionTypes.NAV_TO_DASHBOARD }),
  navToBatches: () => ({ type: RoutingActionTypes.NAV_TO_BATCHES }),
}
