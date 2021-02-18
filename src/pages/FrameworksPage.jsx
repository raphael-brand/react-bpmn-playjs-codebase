
import React, { Component, createRef } from 'react';
import items from './items';


class SearchInput extends Component {
  
  constructor(props) {
    super(props);
    this.search = createRef();
    this.default_text = 'enter search term';
    this.onInputEnd = this.onInputEnd.bind(this);
    this.storeSearchTerm = this.storeSearchTerm.bind(this);
    this.state = {current_search:'', search_term:''}
  }
  
  componentDidMount() {
    this.search.current.addEventListener('focus', x => x.target.value = '');
    this.search.current.focus();
    this.search.current.addEventListener('blur', this.storeSearchTerm);
  }
 
  onInputEnd(event) {
    this.setState({ search_term: event.target.value });
  }
  
  startSearch() {
  //  window.location.hash = '#'+this.state.current_search;
  }
  
  resetSearchInput() {
      
      this.setState({search_term: ''});
//      alert(this.state.current_search);

  }
  
  storeSearchTerm(event) {

   if(this.state.current_search ==='') {
     
      event.target.value = 'test---'+this.state.search_term+'---test';
      this.setState({current_search: this.state.search_term});
  
   }
   else {
     this.startSearch();
   }
   
   if(event.target.value === this.default_text || event.target.value == '') {

      this.resetSearchInput();

  }
   
  }
  
  render() {     
     return (
       <input type="text" ref={this.search} defaultValue={this.default_text} onChange={this.onInputEnd}/>
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