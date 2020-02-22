import React from 'react';
import logo from './logo.svg';
import './App.css';
import About from './pages/about/About'
import Work from './pages/work/Work'
import Resume from './pages/resume/Resume'
import Contact from './pages/contact/Contact'
import { HashRouter, BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
  return (
    <HashRouter basename="/">
    <div className="App">
     <Switch>
          <Route exact path='/' component={About}></Route>
          <Route exact path='/projects' component={Work}></Route>
          <Route exact path='/resume' component={Resume}></Route>
          <Route exact path='/contact' component={Contact}></Route>
     </Switch>
     
    </div>
    </HashRouter>
  );
}

export default App;
