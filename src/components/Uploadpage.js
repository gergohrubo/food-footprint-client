import React from 'react';
import ImageUploaderContainer from './ImageUploaderContainer';
import IngredientsContainer from './IngredientsContainer'
import AddIngredientContainer from './AddIngredientContainer'

const Uploadpage = () => {
  return (
    <div>
      <div className="flex">
        <ImageUploaderContainer />
        <IngredientsContainer />
      </div>
      <AddIngredientContainer />
    </div>
  );
};

export default Uploadpage;