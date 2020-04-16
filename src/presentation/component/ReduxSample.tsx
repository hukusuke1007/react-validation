import React from 'react'
import { 
  useSelector,
  useDispatch,
} from 'react-redux'
import { Dispatch } from 'redux'
import * as modules from '../../domain/redux/modules'
import container from '../../di_container/tsyringe.config'
import { SampleUseCase } from '../../domain/use_case/SampleUseCase'
import * as hooks from '../common/hooks'

// https://react-redux.js.org/api/hooks
export const ReduxSample = () => {
  /** 同期 */
  // const selector = useSelector<StoreState, modules.Counter.State>(state => state.counter)
  const dispatch = useDispatch<Dispatch<modules.Counter.Action>>()

  /** 非同期 */
  const { count, updateCount, loading, error } = hooks.Counter.useUpdateCount()
  if (loading) {
    console.log('loading...')
  }
  if (error) {
    console.error(error)
  }
  console.log('ReduxSample')
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
          const useCase = container.resolve<SampleUseCase>('SampleUseCase')
          useCase.increment(dispatch)
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
          dispatch({ type: modules.Counter.ActyonType.DECREMENT })
        }}>
          Decrement
        </button>
      </div>
    </div>
  )
}
