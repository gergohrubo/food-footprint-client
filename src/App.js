import React from 'react';
import './App.css';
import ImageUploaderContainer from './components/ImageUploaderContainer';
import IngredientsContainer from './components/IngredientsContainer'
import AddIngredientContainer from './components/AddIngredientContainer'

function App() {
  return (
    <div className="App">
      <div className="flex">
        <ImageUploaderContainer />
        <IngredientsContainer />
      </div>
      <AddIngredientContainer />
    </div>
  );
}

export default App;
