import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css'
// import 'font-awesome/css/font-awesome.css'
import './index.css'
// import App from './App'
import Movies from './components/movies'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from 'react-router-dom'
import { Customers } from './components/customers'
import { Rentals } from './components/rentals'
import { NotFound } from './components/notFound'

ReactDOM.render(
  <Router>
    <Routes>
      <Route path='/' element={<Navigate replace to='/movies' />} />
      <Route path='/movies' element={<Movies />} />
      <Route path='/customers' element={<Customers />} />
      <Route path='/rentals' element={<Rentals />} />
      <Route path='/not-found' element={<NotFound />} />
      <Route path='*' element={<NotFound />} />
      {/* <Redirect to='/not-found' /> */}
    </Routes>
  </Router>,
  document.getElementById('root')
)
