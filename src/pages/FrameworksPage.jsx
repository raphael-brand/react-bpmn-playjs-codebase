
import React, { Component, createRef } from 'react';
import items from './items';


class SearchInput extends Component {
  
  constructor(props) {
    super(props);
    this.search = createRef();
  } 
  
  componentDidMount() {
    this.search.current.addEventListener('focus', x => x.target.value = '');
    this.search.current.addEventListener('blur', x => x.target.value = 'enter search term');
    
  }
  
  render() {     
     return (
       <input type="text" ref={this.search} defaultValue="enter search term"/>
     );
  }
  
  
};


class FrameworksPage extends Component {

 
  render() {
    return (<>
     <h1>Frameworks</h1>
     <SearchInput />
    </>);
  }

}

export default FrameworksPage;