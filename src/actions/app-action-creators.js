import AppActionTypes from './action-types/app'

export default {
  setCreateBatchDialogVisibility: visible => ({
    type: AppActionTypes.CREATE_BATCH_DIALOG_VISIBILITY,
    payload: visible,
  }),
  setCreateBatchDialogErrors: errors => ({
    type: AppActionTypes.CREATE_BATCH_DIALOG_ERRORS,
    payload: errors,
  }),
}
