import React from 'react';
import './App.css';
import { Switch, Route } from "react-router-dom";
import Homepage from './components/Homepage'
import Uploadpage from './components/Uploadpage'
import NutrientsPage from './components/NutrientsPage'
import Diarypage from './components/Diarypage'
import { appStyle } from './theme'

function App() {
  return (
    <div style={appStyle}>
      <Switch>
        <Route path="/upload" component={Uploadpage} />
        <Route path="/nutrient" component={NutrientsPage} />
        <Route path="/diary" component={Diarypage} />
        <Route component={Homepage} />
      </Switch>
    </div>
  );
}

export default App;
