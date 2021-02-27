import React from "react";
import logo from "./cra-logo.png";
import "./App.css";
import { Route, Switch } from "react-router-dom";

import HomePage from './components/HomePage';
import FrameworksPage from './components/FrameworksPage';
import ModelerPage from './components/ModelerPage';

import Header from "./components/Header";
const App = (props) => {
  //these variables are used for firebase signin(good examples of using redux to pass the user as a prop to the app.jsx)
  // const { setCurrentUser } = props;
  // const unsubscribeFromAuth = null;
  
  
  return (
      <div className="App">
      {<><Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/frameworks" component={FrameworksPage} />
        <Route exact path="/modeler" component={ModelerPage} />
        <Route exact path="/signin" />
      </Switch>
      </>}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <br />
        <p>
          Welcome to my <code>CRA-Template</code>
        </p>
      </header>
    </div>
  );
};

export default App;
