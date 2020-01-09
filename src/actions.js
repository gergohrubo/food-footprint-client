import request from 'superagent'

const baseUrl = process.env.REACT_APP_BACKEND_URL

export const SAVE_INGREDIENTS = 'SAVE_INGREDIENTS'

function saveIngredients(ingredientsArray) {
  return {
    type: SAVE_INGREDIENTS,
    payload: ingredientsArray
  }
}

export const fetchIngredients = (data) => dispatch => {
  request
    .post(`${baseUrl}/image`)
    .send(data)
    .then(response => {
      console.log(response.body.concepts)
      dispatch(saveIngredients(response.body.concepts))
    })
    .catch(console.error)
}