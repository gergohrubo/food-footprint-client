import { SAVE_SUGGESTIONS } from '../actions'

const initialState = []

export default function (state = initialState, action) {
  switch (action.type) {
    case SAVE_SUGGESTIONS:
      return [...action.payload]
    default:
      return state
  }
}