import { Item } from '../../model'

// action type
export const ActyonType = {
  SAVE: 'ITEM_SAVE',
}

export type State = {
  item?: Item
}

export type Action = {
  type: string
  item?: Item
}

const initialState: State = {
  item: undefined,
}

// reducer
export default function reducer(state: State = initialState, action: Action) {
  switch (action.type) {
    case ActyonType.SAVE:
      return {
        ...state,
        item: action.item
      }
    default:
      return state
  }
}