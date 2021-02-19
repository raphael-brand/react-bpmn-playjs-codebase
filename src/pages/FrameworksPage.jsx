
import React, { Component } from 'react';
import { SearchInput } from '../components/SearchInput.jsx';
import items from './items';


class FrameworksPage extends Component {

 
  render() {
    return (<>
     <h1>Frameworks</h1>
     <SearchInput />
    </>);
  }

}

export default FrameworksPage;