import React from "react";
import "./App.css";
import Home from "./pages/home/Home";
import {
  HashRouter,
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Projects from "./pages/projects/Projects";
import Navbar from "./components/Navbar/Navbar";
import About from "./pages/about/About";
import Contact from "./pages/contact/contact";

function App() {
  return (
    <Router basename="/">
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home}></Route>
          {/* <Route path="/projects" component={Projects}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/contact" component={Contact}></Route> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
