import React, {Component} from 'react';

class SearchBar extends Component { //React.Component

/**
functional components do not have state only class based
Class based component states are track as follows

**/
  constructor(props){
    super(props); //call parent class constructor method (Parent class "Component")
    //constructor is the only place where state gets a manual value or assignment
    this.state = {term : ''};//state is a JS object, each compnent has "state"  //create object and store in variable
    // we are going to make the state of this app the value that user type
  }

  render(){
      return (
        <div className="search-bar">
        <input
        value = {this.state.term}
        onChange={event => this.onInputChange(event.target.value) } />
        </div>
      );
  };
  onInputChange(term){
    this.setState({term});//set state
    this.props.onSearchTermChange(term);//call back from index.js
  }
}
export default SearchBar;
