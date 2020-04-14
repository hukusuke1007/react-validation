import { 
  createStore as reduxCreateStore, 
  applyMiddleware, 
  combineReducers,
  Store,
  Action,
  CombinedState,
} from 'redux'
import logger from 'redux-logger'
import { StoreState } from './presentation/redux/StoreState'
import { Counter } from './presentation/redux/modules'

const createStore = (): Store<CombinedState<StoreState>, Action> => {
  const store = reduxCreateStore(
    combineReducers({
      counter: Counter.default,
    }),
    applyMiddleware(
      logger,
    )
  )
  return store
}

const store = createStore()
export default store