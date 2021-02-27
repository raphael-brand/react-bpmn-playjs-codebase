
import React, { Component } from 'react';
import { SearchInput } from '../components/SearchInput.jsx';
import ResultList from '../components/ResultList.jsx'
import items from './items';


class FrameworksPage extends Component {

 
  render() {
    return (<>
     <h1>Frameworks</h1>
     <SearchInput />
     <ResultList items={items} />
    </>);
  }

}

export default FrameworksPage;