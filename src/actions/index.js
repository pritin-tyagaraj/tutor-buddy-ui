import AppActionCreators from './app-action-creators'
import RoutingActionCreators from './routing-action-creators'
import TechnicalActionCreators from './technical-action-creators'

export default {
  ...AppActionCreators,
  ...RoutingActionCreators,
  ...TechnicalActionCreators,
}
