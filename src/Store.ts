import { 
  createStore as reduxCreateStore, 
  applyMiddleware, 
  combineReducers,
  Store,
  Action,
  CombinedState,
} from 'redux'
import logger from 'redux-logger'
import { StoreState } from './domain/redux/StoreState'
import * as modules from './domain/redux/modules'

const createStore = (): Store<CombinedState<StoreState>, Action> => {
  const store = reduxCreateStore(
    combineReducers({
      counter: modules.Counter.default,
      item: modules.Item.default,
    }),
    applyMiddleware(
      logger,
    )
  )
  return store
}

export default createStore()