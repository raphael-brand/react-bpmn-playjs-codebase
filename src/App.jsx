import React from "react";
// import route stuff

import {
 Route,
  Switch,
  Link,
  useParams
} from 'react-router-dom'

// import Navigation component
// import Homepage component
import HomePage from './pages/HomePage';
import FrameworksPage  from './pages/FrameworksPage';
// import Modeler page component
import ModelerPage from './pages/ModelerPage';

export default () => {
  return (<>
   {/* render a navigation component */}
    <Link to="/">Home</Link>
    <Link to="/frameworks">Frameworks</Link>
    <Link to="/modeler">Modeler</Link>
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
