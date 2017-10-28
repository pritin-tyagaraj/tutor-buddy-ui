import batches from './batches'
import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import technical from './technical'

const App = combineReducers({
  batches,
  technical,
  routing: routerReducer,
})

export default App
