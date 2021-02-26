import React from "react";
import logo from "./cra-logo.png";
import "./App.css";
import { Link, BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import { SetCurrentUser } from "./redux/user/user.actions";
// import { selectCurrentUser } from "./redux/user/user.selector";
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
        <Route exact path="/" component={FrameworksPage} />
        <Route exact path="/" component={ModelerPage} />
        <Route exact path="/signin" />
      </Switch>
        <Link to={HomePage}>learn react</Link>
    </Router>}
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
