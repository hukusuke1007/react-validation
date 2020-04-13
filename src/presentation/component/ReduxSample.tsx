import React from 'react'
import { 
  useSelector,
  useDispatch,
} from 'react-redux'
import { Dispatch } from 'redux'
import { 
  Action,
  ActyonType,
  useUpdateCount,
} from '../redux/modules/Counter'
import { StoreState } from '../redux/StoreState'

// https://react-redux.js.org/api/hooks
export const ReduxSample = () => {
  /** 同期 */
  // const selector = useSelector<StoreState, State>(state => state.counter)
  const dispatch = useDispatch<Dispatch<Action>>()

  /** 非同期 */
  const { count, updateCount, loading, error } = useUpdateCount()
  if (loading) {
    console.log('loading...')
  }
  if (error) {
    console.error(error)
  }
  return (
    <div style={{
      display: 'inline',
    }}>
      <div style={{
        display: 'inline',
        justifyContent: 'center',
        margin: '8px',
      }}>
        <p>Counter: {count}</p>
        <button onClick={() => {
          console.log('Increment')
          dispatch({ type: ActyonType.INCREMENT })
        }}>
          Increment
        </button>
        <button onClick={() => {
          console.log('Super Increment')
          updateCount()
        }}>
          Super increment
        </button>
        <button onClick={() => {
          console.log('Decrement')
          dispatch({ type: ActyonType.DECREMENT })
        }}>
          Decrement
        </button>
      </div>
    </div>
  )
}
