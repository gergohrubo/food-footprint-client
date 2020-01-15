import { SAVE_RECIPE_NAMES, REDUCE_RECIPEARRAY } from '../actions'

const initialState = []

export default function (state = initialState, action) {
  switch (action.type) {
    case SAVE_RECIPE_NAMES:
      return [...action.payload]
    case REDUCE_RECIPEARRAY:
      return state.filter(recipe => recipe.title === action.payload)
    default:
      return state
  }
}