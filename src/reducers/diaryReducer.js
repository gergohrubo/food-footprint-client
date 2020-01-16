import { SAVE_DIARY } from '../actions'

const initialState = {}

export default function (state = initialState, action) {
  switch (action.type) {
    case SAVE_DIARY:
      const newState = { ...action.payload }
      newState.meals = newState.meals.filter(meal => meal.hasOwnProperty('ingredients'))
      return { ...newState }
    default:
      return state
  }
}