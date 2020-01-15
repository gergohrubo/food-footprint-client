import { SAVE_DIARY } from '../actions'

const initialState = {}

export default function (state = initialState, action) {
  switch (action.type) {
    case SAVE_DIARY:
      return { ...action.payload }
    default:
      return state
  }
}