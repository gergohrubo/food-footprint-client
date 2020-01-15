import request from 'superagent'

const baseUrl = process.env.REACT_APP_BACKEND_URL

export const SAVE_INGREDIENTS = 'SAVE_INGREDIENTS'

export const ADD_INGREDIENT = 'ADD_INGREDIENT'

export const CLEAR_INGREDIENTS = 'CLEAR_INGREDIENTS'

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

export function clearIngredients() {
  return {
    type: CLEAR_INGREDIENTS
  }
}

const filterConcepts = concepts => concepts.filter(concept => concept.value > 0.9)

export const fetchIngredients = (data, jwt) => dispatch => {
  request
    .post(`${baseUrl}/image`)
    .set('Authorization', `Bearer ${jwt}`)
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

export const sendIngredients = (ingredientArray, imageName, jwt, push) => dispatch => {
  const data = { ingredients: ingredientArray, imageName }
  return request
    .post(`${baseUrl}/ingredients`)
    .set('Authorization', `Bearer ${jwt}`)
    .send(data)
    .then(response => {
      dispatch(saveNutrients(response.body[0]))
      dispatch(saveRecipeNames(response.body[2]))
      if (push) {
        push('/')
      }
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
  return request
    .post(`${baseUrl}/login`)
    .send(data)
    .then(response => {
      localStorage.credentials = JSON.stringify({ username, jwt: response.body.jwt });
      dispatch(saveJWT(username, response.body.jwt))
    })
    .catch(console.error)
}

export const signUp = (username, password, email) => dispatch => {
  const data = { username, password, email }
  return request
    .post(`${baseUrl}/signup`)
    .send(data)
    .then(response => {
      dispatch(saveJWT(username, response.body.jwt))
    })
    .catch(console.error)
}

export const REDUCE_RECIPEARRAY = 'REDUCE_RECIPEARRAY'

const reduceRecipeArray = title => ({
  type: REDUCE_RECIPEARRAY,
  payload: title
})


export const sendTitle = (recipeName, imageName, jwt) => dispatch => {
  const data = { recipeName, imageName }
  return request
    .post(`${baseUrl}/title`)
    .set('Authorization', `Bearer ${jwt}`)
    .send(data)
    .then(response => {
      dispatch(reduceRecipeArray(recipeName))
    })
    .catch(console.error)
}