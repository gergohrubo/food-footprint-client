import React from 'react';
import './App.css';
import { Switch, Route } from "react-router-dom";
import Homepage from './components/Homepage'
import UploadPage from './components/Uploadpage'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/upload" component={UploadPage} />
        <Route component={Homepage} />
      </Switch>
    </div>
  );
}

export default App;
