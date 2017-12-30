import React, {Component} from 'react';

// functional component
// Other is Class based component
// const SearchBar = () => {
//   return <input />;
// };


//similar to
// const Component = React.Component
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

  //need to return JSX
  //render method
  render(){
    //return JSX;
    //every class must have a render functional
    //return <input onChange={this.onInputChange} />;
  //  return <input onChange={(event) => {console.log(event.target.value);} } />;
  //  return <input onChange={event => console.log(event.target.value); } />;

      return (
        <div>
        <input
        value = {this.state.term}
        onChange={event => this.setState({term : event.target.value}) } />

        </div>
      );
      /**
        Controlled Component value is set by the state
        input field value is set to state.
        so can't change:
      **/
      //setState to change states
  };

// when input change run this code
//pass the funcion to element that need to moniter this event
  onInputChange(event){
    console.log(event.target.value);
  }
}
// instances by new SearchBar()

export default SearchBar;
