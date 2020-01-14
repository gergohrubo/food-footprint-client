import { SAVE_RECIPE_NAMES } from '../actions'

const initialState = []

export default function (state = initialState, action) {
  switch (action.type) {
    case SAVE_RECIPE_NAMES:
      return [...action.payload]
    default:
      return state
  }
}