import { Link } from 'react-router-dom';
import HomePage from '../pages/HomePage.jsx';
import ModelerPage from '../pages/ModelerPage.jsx';
import FrameworksPage from '../pages/FrameworksPage.jsx';

export default () => {
  return (
    <>
     <Link to="/" component={HomePage}>Home</Link>
     <Link to="/modeler" component={ModelerPage}>Modeler</Link>
     <Link to="/frameworks" component={FrameworksPage}>Frameworks</Link>
    </>
  );  
} 
