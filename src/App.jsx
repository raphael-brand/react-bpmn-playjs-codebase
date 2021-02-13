import React from "react";
// import route stuff

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

// import Navigation component
// import Homepage component
import HomePage from './pages/HomePage';
// import Modeler page component


export default () => {
  return (<div>
    {/* render a navigation component */}
    <hr />
   <HomePage />
    {/* render routing logic of react-router-dom */}
  </div>)
}
