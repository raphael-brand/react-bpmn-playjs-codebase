import React, { Component, createRef } from 'react';

export class SearchInput extends Component {
  
  constructor(props) {
    super(props);
    this.search = createRef();
    this.status = createRef();
    this.default_text = 'enter search term';
    this.onInputEnd = this.onInputEnd.bind(this);
    this.storeSearchTerm = this.storeSearchTerm.bind(this);
    this.resetSearchInput = this.resetSearchInput.bind(this);
    this.emptyText = this.emptyText.bind(this);
    this.state = {current_search:'', search_term:'', status:''}
  }
  
  componentDidMount() {
    this.search.current.addEventListener('focus', this.resetSearchInput);
   this.search.current.addEventListener('blur', this.storeSearchTerm);
    this.search.current.addEventListener('click', this.emptyText)
  }
 
  onInputEnd(event) {
    if(event.target.value != '' && event.target.value != this.default_text) {

      this.setState({ search_term: event.target.value });
      this.startSearch(event.target.value);
    }
 }
  
  startSearch(value) {
    if(value && value !== this.state.current_search) {
      this.setState({status: `Searching for: ${value}`});
      this.status.current.innerText = `Searching for: ${value}`;
      this.setState({current_search: value});
      return
    }
      
    this.resetSearchInput();
}
  
  resetSearchInput() {
     if(this.state.current_search.length && this.state.status.length) {
        this.setState({search_term: ''});
        this.setState({status: ''})
        this.status.innerText = '';
     }

     if(this.search.current.value != this.default_text){
       this.status.innerText = '';
       this.search.current.value = '';
     }
}
  
  storeSearchTerm(event) {

   if(this.state.current_search !=='') {
     this.search.current.value = this.state.current_search;
     this.startSearch(this.state.search_term);
   }
  
   if(event.target.value === this.default_text || event.target.value == '') {
      this.resetSearchInput();
   }
   
 
  }
  
  emptyText(event) {
    if(this.default_text == event.target.value || this.state.current_search !== '')
      this.search.current.value = '';
  }
  
  render() {     
     return (<>
       <input type="text" ref={this.search} defaultValue={this.default_text} onChange={this.onInputEnd}/>
       <p ref={this.status} />
       </>
     );
  }
};

