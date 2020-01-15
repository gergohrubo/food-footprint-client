import { SAVE_INGREDIENTS, ADD_INGREDIENT, CLEAR_INGREDIENTS } from '../actions'

const initialState = []

export default function (state = initialState, action) {
  switch (action.type) {
    case SAVE_INGREDIENTS:
      return [...action.payload]
    case ADD_INGREDIENT:
      return [action.payload, ...state]
    case CLEAR_INGREDIENTS:
      return initialState
    default:
      return state
  }
}