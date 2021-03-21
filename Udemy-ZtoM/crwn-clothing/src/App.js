import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom'; // switch doesn't render anything after it matches the path.

import HomePage from './pages/homepage/homepage.component'

function App() {
  return (
    <div>
      <Switch >
        <Route exact path='/' component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
