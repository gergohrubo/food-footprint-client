import { combineReducers } from "redux";
import ingredientsReducer from './ingredientsReducer'
import nutrientsReducer from './nutrientsReducer'
import recipesReducer from './recipesReducer'

export default combineReducers({
  ingredients: ingredientsReducer,
  nutrients: nutrientsReducer,
  recipes: recipesReducer
});