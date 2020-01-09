import { SAVE_INGREDIENTS } from '../actions'

const initialState = []

export default function (state = initialState, action) {
  switch (action.type) {
    case SAVE_INGREDIENTS:
      return [...action.payload]
    default:
      return state
  }
}