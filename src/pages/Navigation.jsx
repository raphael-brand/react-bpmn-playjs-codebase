import React from 'react';
import { Link } from 'react-router-dom'; 

class Navigation extends React.Component {
  render() {
    return (<>
     <Link to="/">Home</Link>
     <Link to="/frameworks">Frameworks</Link>
     <Link to="/modeler">Modeler</Link>
    </>);   
  }
}

export default Navigation;