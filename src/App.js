// import logo from './logo.svg';
import React from 'react';
import './App.css';

function App() {
  console.log(process.env);
  return (
    <div style={{padding:`50px`}}>
      <h1>Environment Variables Example</h1>
      <p>My name is {process.env.REACT_APP_MY_NAME}</p>
    </div>
  );
}

export default App;
