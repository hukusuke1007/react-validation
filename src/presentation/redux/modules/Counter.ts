import { 
  useState,
  useCallback,
} from 'react'
import { 
  Dispatch,
} from 'redux'
import { 
  useSelector,
  useDispatch,
} from 'react-redux'
import {
  StoreState
} from '../StoreState'

// action type
export const ActyonType = {
  INCREMENT: 'COUNTER_INCREMENT',
  DECREMENT: 'COUNTER_DECREMENT',
}

export type State = {
  count: number
}

export type Action = {
  type: string
  count?: number
}

const initialState: State = {
  count: 0,
}

// reducer
export default function reducer(state: State = initialState, action: Action) {
  switch (action.type) {
    case ActyonType.INCREMENT:
      return {
        ...state,
        count: action.count !== undefined ? action.count : state.count + 1,
        isLoading: false,
      }
    case ActyonType.DECREMENT:
      return {
        ...state,
        count: state.count - 1,
        isLoading: false,
      }
    default:
      return state
  }
}

/**
 * 非同期処理
 */
export const useUpdateCount = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  
  const dispatch = useDispatch<Dispatch<Action>>()
  const { count } = useSelector<StoreState, State>(state => state.counter)

  const updateCount = useCallback(async () => {
    setLoading(true)
    try {
      const nextCount = await updateCountAsync(count)
      dispatch({ type: ActyonType.INCREMENT, count: nextCount })
    } catch (e) {
      setLoading(false)
      setError(e.message)
    }
  }, [loading, error, count])

  return {
    count,
    updateCount,
    loading,
    error,
  }
}

const updateCountAsync = (currentCount: number): Promise<number> => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(currentCount + 100)
    }, 1000)
  })
}