import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css'
import 'font-awesome/css/font-awesome.css'
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
import { NavBar } from './components/navBar'
import MovieForm from './components/movieForm'
import LoginForm from './components/loginForm'
import RegisterForm from './components/registerForm'

ReactDOM.render(
  <>
    <Router>
      <NavBar />
      <main className='container'>
        <Routes>
          <Route path='/login' element={<LoginForm />} />
          <Route path='/register' element={<RegisterForm />} />
          <Route path='/movies/:id' element={<MovieForm />} />
          <Route path='/' element={<Navigate replace to='/movies' />} />
          <Route path='/movies' element={<Movies />} />
          <Route path='/customers' element={<Customers />} />
          <Route path='/rentals' element={<Rentals />} />
          <Route path='/not-found' element={<NotFound />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </main>
    </Router>
  </>,
  document.getElementById('root')
)
