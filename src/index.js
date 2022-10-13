import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import './index.css';
// import App from './App'
// import Movies from './components/movies';
import Counter from './components/counter/Counter';

ReactDOM.render(
  <React.StrictMode>
    {/* <Movies /> */}
    <Counter />
  </React.StrictMode>,
  document.getElementById('root')
);
