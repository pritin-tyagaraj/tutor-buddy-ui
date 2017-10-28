import ActionTypes from 'actions/action-types/app'

const initialState = {
  createBatchDialogVisible: false,
  createBatchDialogErrors: [],
}

const batches = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.CREATE_BATCH_DIALOG_VISIBILITY:
      return Object.assign({}, state, {
        createBatchDialogVisible: action.payload,
      })

    case ActionTypes.CREATE_BATCH_DIALOG_ERRORS:
      return Object.assign({}, state, {
        createBatchDialogErrors: action.payload,
      })

    default:
      return state
  }
}

export default batches
