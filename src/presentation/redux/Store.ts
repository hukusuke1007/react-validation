import { 
  createStore as reduxCreateStore, 
  applyMiddleware, 
  combineReducers,
  Store,
  Action,
  CombinedState,
} from 'redux'
import logger from 'redux-logger'
import { StoreState } from './StoreState'
import counterReducer from './modules/Counter'

const createStore = (): Store<CombinedState<StoreState>, Action> => {
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