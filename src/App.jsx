import React from "react";
// import route stuff

import {
 Route,
  Switch,
 useParams
} from 'react-router-dom'

// import Navigation component

import Navigation from './pages/Navigation.jsx';
// import Homepage component
import HomePage from 'home';
import FrameworksPage  from 'frameworks';
// import Modeler page component
import ModelerPage from 'modeler';

export default () => {
  return (<>
    {/* render a navigation component */}
   <Navigation />
   <hr />
    {/* render routing logic of react-router-dom */}
   <Switch>
    <Route exact path="/">
      <HomePage />
    </Route> 
    <Route path="/frameworks">
      <FrameworksPage />
    </Route> 
    <Route path="/modeler">
      <ModelerPage />
    </Route> 
   </Switch>
  
  </>)
}
