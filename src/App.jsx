import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import HomePage from './components/HomePage';
import FrameworksPage from './components/FrameworksPage';
import ModelerPage from './components/ModelerPage';

const App = () => {

  return (
    <div className="App">
    {<Router location><Header />
      
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/frameworks" component={FrameworksPage} />
        <Route exact path="/modeler" component={ModelerPage} />
      </Switch>
    </Router>}
    </div>
  );
};


export default App;
