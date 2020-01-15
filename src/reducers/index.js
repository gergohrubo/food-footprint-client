import { combineReducers } from "redux";
import ingredientsReducer from './ingredientsReducer'
import nutrientsReducer from './nutrientsReducer'
import recipesReducer from './recipesReducer'
import loginReducer from './loginReducer'
import diaryReducer from './diaryReducer'

export default combineReducers({
  currentUser: loginReducer,
  ingredients: ingredientsReducer,
  nutrients: nutrientsReducer,
  recipes: recipesReducer,
  diaryEntries: diaryReducer
});