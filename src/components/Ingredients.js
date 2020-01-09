import React from 'react';

export default function Ingredients(props) {
  return (
    <div>
      {props.ingredients.map(ingredient => <p>{ingredient.name}</p>)}
    </div>
  );
}