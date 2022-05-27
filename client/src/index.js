import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// The ReactDOM.render method is used to render a react element into the actual DOM
// The first argument is the component we want to render, and the second is the container element on the page
// Injecting whatever is in <App /> into the id of root
ReactDOM.render(<App />, document.getElementById('root'));

// React library handles grabbing the scripts

// how to run:
// 1. `npm i`
// 2. `npm start`