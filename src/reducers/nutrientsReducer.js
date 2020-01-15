import { SAVE_NUTRIENTS } from '../actions'

const initialState = {}

export default function (state = initialState, action) {
  switch (action.type) {
    case SAVE_NUTRIENTS:
      return { ...action.payload }
    default:
      return state
  }
}