import React from 'react';
import ReactDOM from 'react-dom';
import FirstComponent from "./firstComponent"; //here we have imported first component
import SecondComponent from "./SecondComponent";



ReactDOM.render(
  <React.StrictMode>
    < FirstComponent /> {/* this is how we use a component */}
    < SecondComponent />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

