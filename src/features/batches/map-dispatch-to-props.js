import actions from 'actions'
import { CREATE_BATCH_URL } from './endpoints'

export default dispatch => ({
  openCreateBatchDialog: () => {
    dispatch(actions.setCreateBatchDialogErrors(null))
    dispatch(actions.setCreateBatchDialogVisibility(true))
  },
  closeCreateBatchDialog: () => dispatch(actions.setCreateBatchDialogVisibility(false)),
  setCreateBatchDialogErrors: errors => dispatch(actions.setCreateBatchDialogErrors(errors)),
  createBatch: payload => {
    return fetch(CREATE_BATCH_URL, {
      method: 'POST',
      body: JSON.stringify(payload),
    }).then(
      () => {
        // Success
        dispatch(actions.setCreateBatchDialogVisibility(false))
      },
      error => {
        // Error
        dispatch(actions.setCreateBatchDialogErrors([error.message]))
      }
    )
  },
})
