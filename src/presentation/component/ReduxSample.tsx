import React from 'react'
import { 
  useStore,
  useSelector,
  useDispatch,
} from 'react-redux'
import { Dispatch } from 'redux'
import { 
  State, 
  Action,
  INCREMENT,
  DECREMENT,
} from '../redux/modules/Counter'
import { ReducerState } from '../redux/ReducerState'

// https://react-redux.js.org/api/hooks
export const ReduxSample = () => {
  const selector = useSelector<ReducerState, State>(state => state.counter)
  const dispatch = useDispatch<Dispatch<Action>>()
  return (
    <div style={{
      display: 'inline',
    }}>
      <div style={{
        display: 'inline',
        justifyContent: 'center',
        margin: '8px',
      }}>
        <p>Counter: {selector.count}</p>
        <button onClick={() => {
          console.log('Increment')
          dispatch({ type: INCREMENT })
        }}>
          Increment
        </button>
        <button onClick={() => {
          console.log('Decrement')
          dispatch({ type: DECREMENT })
        }}>
          Decrement
        </button>
      </div>
    </div>
  )
}
