import RoutingActionCreators from './routing-action-creators'
import TechnicalActionCreators from './technical-action-creators'

export default {
  ...TechnicalActionCreators,
  ...RoutingActionCreators,
}
