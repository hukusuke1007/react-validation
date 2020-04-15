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
import * as modules from '../../../domain/redux/modules'
import { StoreState } from '../../../domain/redux/StoreState'

/**
 * 非同期処理
 */
export const useUpdateCount = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  // presentaion
  const { count } = useSelector<StoreState, modules.Counter.State>(state => state.counter) 
  const dispatch = useDispatch<Dispatch<modules.Counter.Action>>()  
  const updateCount = useCallback(async () => {
    setLoading(true)
    try {
      const nextCount = await updateCountAsync(count)
      dispatch({ type: modules.Counter.ActyonType.INCREMENT, count: nextCount })
    } catch (e) {
      setError(e.message)
    }
    setLoading(false)
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