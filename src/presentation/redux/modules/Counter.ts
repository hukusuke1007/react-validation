// action type
export const INCREMENT = 'COUNTER_INCREMENT'
export const DECREMENT = 'COUNTER_DECREMENT'

export type State = {
  count: number
}

export type Action = {
  type: string
}

const initialState: State = {
  count: 0,
}

// reducer
export default function reducer(state: State = initialState, action: Action) {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1
      }

    case DECREMENT:
      return {
        ...state,
        count: state.count - 1
      }
    default:
      return state
  }
}

// action-creator
export const increment = (): Action => {
  return { type: INCREMENT }
}

export const decrement = (): Action => {
  return { type: DECREMENT }
}