import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom'; // switch doesn't render anything after it matches the path.

import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component.jsx'

function App() {
  return (
    <div>
      <Switch >
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
