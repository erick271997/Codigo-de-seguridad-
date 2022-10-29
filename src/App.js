
import React from "react";
import  UseState  from './UseState.js';
import  ClassState  from './ClassState.js';
import UseReducer from "./UseReducer.js";

import './App.css';

function App() {
  return (
    <div className="App">
   <UseState name="Usereducer" />,
   <ClassState name="ClassState"/>,
   <UseReducer name="Use Reducer"/>,
    </div>
  );
}

export default App;
