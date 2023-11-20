import React from "react";
import "./App.css";
import Home from "./pages/home/Home";
import {
  HashRouter,
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";


function App() {
  return (
    <HashRouter basename="/">
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home}></Route>
        </Switch>
      </div>
    </HashRouter>
  );
}

export default App;
