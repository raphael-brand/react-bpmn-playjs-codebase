import React from "react";
import logo from "./cra-logo.png";
import "./App.css";
import { Link, BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import HomePage from './components/HomePage';
import FrameworksPage from './components/FrameworksPage';
import ModelerPage from './components/ModelerPage';

const App = (props) => {

  return (
    <div className="App">
    {<Router location><Header />
      
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/frameworks" component={FrameworksPage} />
        <Route exact path="/modeler" component={ModelerPage} />
      </Switch>
      <Link to={HomePage}>learn react</Link>
    </Router>}
    </div>
  );
};


export default App;
