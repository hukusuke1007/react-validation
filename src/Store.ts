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
import { 
  Counter,
  Item
} from './domain/redux/modules'

const createStore = (): Store<CombinedState<StoreState>, Action> => {
  const store = reduxCreateStore(
    combineReducers({
      counter: Counter.default,
      item: Item.default,
    }),
    applyMiddleware(
      logger,
    )
  )
  return store
}

const store = createStore()
export default store