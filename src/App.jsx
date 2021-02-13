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
// import Modeler page component


export default () => {
  return (<>
   {/* render a navigation component */}
    <Link to="/">Home</Link>
    <Link to="/frameworks">Frameworks</Link>
    <Link to="/modeler">Modeler</Link>
   <hr />
   <Route>
    {/* render routing logic of react-router-dom */}
     <HomePage />
    </Route>
  </>)
}
