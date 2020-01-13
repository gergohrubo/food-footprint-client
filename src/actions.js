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

export const fetchIngredients = (data) => dispatch => {
  request
    .post(`${baseUrl}/image`)
    .send(data)
    .then(response => {
      console.log(response.body.concepts)
      const filteredConcepts = filterConcepts(response.body.concepts)
      dispatch(saveIngredients(filteredConcepts))
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