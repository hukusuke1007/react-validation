
import { 
  Counter,
  Item,
} from './modules'

export type StoreState = {
  counter: Counter.State,
  item: Item.State,
}