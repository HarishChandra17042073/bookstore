import React from 'react';
import ReactDOM from 'react-dom';
//import FirstComponent from "./firstComponent"; //here we have imported first component
//import SecondComponent from "./SecondComponent";
//import NestedComponents from "./NestedComponents"
import Bookstore from "./Bookstore";



ReactDOM.render(
  <React.StrictMode>
    
    <Bookstore />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

