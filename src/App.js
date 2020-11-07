import React from 'react';
import './App.css';
import About from './pages/about/About'
import { HashRouter, BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <HashRouter basename="/">
    <div className="App">
     <Switch>
          <Route exact path='/' component={About}></Route>
     </Switch>
     
    </div>
    </HashRouter>
  );
}

export default App;
