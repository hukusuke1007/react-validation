import { 
  createStore as reduxCreateStore, 
  applyMiddleware, 
  combineReducers,
  Store,
  Action,
  CombinedState,
} from 'redux'
import logger from 'redux-logger'
import { ReducerState } from './ReducerState'
import counterReducer from './modules/Counter'

const createStore = (): Store<CombinedState<ReducerState>, Action> => {
  const store = reduxCreateStore(
    combineReducers({
      counter: counterReducer,
    }),
    applyMiddleware(
      logger,
    )
  )
  return store
}

const store = createStore()
export default store