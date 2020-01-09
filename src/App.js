import React from 'react';
import './App.css';
import ImageUploaderContainer from './components/ImageUploaderContainer';
import IngredientsContainer from './components/IngredientsContainer'

function App() {
  return (
    <div className="App">
      <ImageUploaderContainer />
      <IngredientsContainer />
    </div>
  );
}

export default App;
