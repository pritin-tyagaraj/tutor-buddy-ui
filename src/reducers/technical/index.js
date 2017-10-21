import ActionTypes from 'actions/action-types/technical'

const initialState = {
  appDrawerOpen: false,
  signOutInProcess: false,
}

const technical = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.TOGGLE_APP_DRAWER:
      return Object.assign({}, state, {
        appDrawerOpen: !state.appDrawerOpen,
      })

    default:
      return state
  }
}

export default technical
