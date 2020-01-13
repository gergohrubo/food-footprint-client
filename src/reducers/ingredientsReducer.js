import { SAVE_INGREDIENTS, ADD_INGREDIENT } from '../actions'

const initialState = []

export default function (state = initialState, action) {
  switch (action.type) {
    case SAVE_INGREDIENTS:
      return [...action.payload]
    case ADD_INGREDIENT:
      return [action.payload, ...state]
    default:
      return state
  }
}