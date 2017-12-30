/**
 * Created by chaminn on 12/30/2017.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar'; //fileName = search_bar : give file references: actual relative path
//Create new component
//Produce some HTML
// const App = function(){
//   return <div>Hi CK !!!
//   <ol>
//     <li>Mango</li>
//     <li>Watermalon</li>
//     <li>Grapes</li>
//   </ol>
//   </div>;
// }

const API_KEY = 'AIzaSyA_QiWareUZzMMqGnYkUzxiwI8rQhJbZ2E';

const App = () => {
  return <div>
<SearchBar/>


  </div>;
}

// once write component, put into DOM //
//take this component 's generated HTML' and put on DOM
// to make an instance we have to wrap it inside JSX components
// When putting add a target location, 2nd argument
ReactDOM.render(<App/>, document.querySelector('.container'));
