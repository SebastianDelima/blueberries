import React from 'react';
import Home from './home'
import History from './history'
import Nutrients from './nutrients'
import Health from './health'
import Recipes from './recipes'
import References     from './references'
import './App.css';
import { Switch, Route }    from 'react-router-dom';


function App() {
  return (
    <Switch>
      <Route exact path='/'><Home/></Route>
      <Route exact path="/history"><History/></Route>
      <Route exact path="/nutrients"><Nutrients/></Route>
      <Route exact path="/health"><Health/></Route>
      <Route exact path="/recipes"><Recipes/></Route>
      <Route exact path="/references"><References/></Route>
    </Switch>
   
  );
}

export default App;
