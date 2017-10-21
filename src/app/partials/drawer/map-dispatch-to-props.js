import actions from 'actions'
import { push } from 'react-router-redux'

export default dispatch => ({
  navToDashboard: () => dispatch(push('/')),
  navToBatches: () => dispatch(push('/batches')),
  toggleAppDrawer: () => dispatch(actions.toggleAppDrawer()),
})
