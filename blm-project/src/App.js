import React from 'react';
import './App.css';
import { Route } from 'react-router-dom'

import NavBarApp from './components/NavBarApp'
import Homepage from './components/Homepage'
import MentalHealthPage from './components/MentalHealthPage'
import Community from './components/Community'

function App() {
  return (
    <div className="App">
     <NavBarApp />

     <Route exact path="/">
       <Homepage />
     </Route>

     <Route path="/mental-health">
        <MentalHealthPage />
     </Route>

     <Route path="/community">
        <Community />
     </Route>
    </div>
  );
}

export default App;
