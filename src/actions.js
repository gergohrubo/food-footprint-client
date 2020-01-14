import request from 'superagent'

const baseUrl = process.env.REACT_APP_BACKEND_URL

export const SAVE_INGREDIENTS = 'SAVE_INGREDIENTS'

export const ADD_INGREDIENT = 'ADD_INGREDIENT'

export function saveIngredients(ingredientsArray) {
  return {
    type: SAVE_INGREDIENTS,
    payload: ingredientsArray
  }
}

export function addIngredient(ingredient) {
  return {
    type: ADD_INGREDIENT,
    payload: ingredient
  }
}

const filterConcepts = concepts => concepts.filter(concept => concept.value > 0.9)

export const fetchIngredients = data => dispatch => {
  request
    .post(`${baseUrl}/image`)
    .send(data)
    .then(response => {
      const filteredConcepts = filterConcepts(response.body.concepts)
      dispatch(saveIngredients(filteredConcepts))
    })
    .catch(console.error)
}

export const SAVE_RECIPE_NAMES = 'SAVE_RECIPE_NAMES'

export const SAVE_NUTRIENTS = 'SAVE_NUTRIENTS'

const saveRecipeNames = recipeArray => ({
  type: SAVE_RECIPE_NAMES,
  payload: recipeArray
})

const saveNutrients = nutrientObject => ({
  type: SAVE_NUTRIENTS,
  payload: nutrientObject
})

export const sendIngredients = ingredientArray => dispatch => {
  const data = { ingredients: ingredientArray }
  request
    .post(`${baseUrl}/ingredients`)
    .send(data)
    .then(response => {
      dispatch(saveNutrients(response.body[0]))
      dispatch(saveRecipeNames(response.body[2]))
    })
    .catch(console.error)
}


export function makeId(length) {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

export const LOG_OUT = 'LOG_OUT'

export const logOut = () => ({
  type: LOG_OUT
})

export const LOGGED_IN = 'LOGGED_IN'

function saveJWT(username, jwt) {
  return {
    type: LOGGED_IN,
    payload: { username, jwt }
  }
}

export const sendLogin = (username, password) => dispatch => {
  const data = { username, password }
  request
    .post(`${baseUrl}/login`)
    .send(data)
    .then(response => {
      dispatch(saveJWT(username, response.body.jwt))
    })
    .catch(console.error)
}

export const signUp = (username, password, email) => dispatch => {
  const data = { username, password, email }
  request
    .post(`${baseUrl}/signup`)
    .send(data)
    .then(response => {
      dispatch(saveJWT(username, response.body.jwt))
    })
    .catch(console.error)
}