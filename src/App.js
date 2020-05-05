import React, {Component} from 'react';
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

import 'bootstrap/dist/css/bootstrap.min.css';
import uuid from"uuid";
import shortid from "shortid"

class App extends Component {
  render(){
  return (
   <div className="container">
     <div className="row">
       <div className="col-10 mx-auto col-md-8 mt-4">
         <h3 className="text-capitalize text-center">Todo Input</h3>     

<TodoList/>
   </div>
   </div>
   </div>
  );
}
}

export default App;
