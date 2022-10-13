import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import Counter from './components/counter/Counter';

ReactDOM.render(
  <BrowserRouter>
    <Counter />
  </BrowserRouter>,
  document.getElementById('root')
);
