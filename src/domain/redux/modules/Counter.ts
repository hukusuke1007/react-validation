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