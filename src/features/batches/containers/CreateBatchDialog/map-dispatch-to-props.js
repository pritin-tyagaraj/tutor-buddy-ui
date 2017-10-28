// trigger close of dialog
import actions from 'actions'

export default dispatch => ({
  onCancelClick: () => dispatch(actions.closeCreateBatchDialog()),
  createBatch: () => dispatch(actions.createBatch()),
})
