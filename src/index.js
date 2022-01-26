import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css'
import 'font-awesome/css/font-awesome.css'
// import App from './App'
import Movies from './components/movies'

ReactDOM.render(
  <React.StrictMode>
    <Movies />
  </React.StrictMode>,
  document.getElementById('root')
)
