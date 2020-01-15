import React from 'react';
import './App.css';
import { Switch, Route } from "react-router-dom";
import Homepage from './components/Homepage'
import UploadPage from './components/Uploadpage'
import { appStyle } from './theme'

function App() {
  return (
    <div style={appStyle}>
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/upload" exact component={UploadPage} />
      </Switch>
    </div>
  );
}

export default App;
