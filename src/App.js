/* import React, { Component } from 'react'
import './App.css'
import './index.css'
import Counters from './components/counters'
import TotalCounter from './components/totalCounter'

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  }

  constructor (props) {
    //Constructor is called once to initialize the state in the class
    super(props)
    console.log('App - Constructor', this.props)
  }

  componentDidMount () {
    // componentDidMount method runs after the component output has been rendered to the DOM
    console.log('App - Mounted')
  }

  handleIncrement = counter => {
    const counters = [...this.state.counters]
    const index = counters.indexOf(counter)
    counters[index] = { ...counter }
    counters[index].value++
    this.setState({ counters })
  }
  handleDecrement = counter => {
    const counters = [...this.state.counters]
    const index = counters.indexOf(counter)
    counters[index] = { ...counter }
    counters[index].value--
    this.setState({ counters })
  }

  handleDelete = counterId => {
    this.setState({
      counters: this.state.counters.filter(count => count.id !== counterId)
    })
  }

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0
      return c
    })
    this.setState({ counters })
  }

  render () {
    console.log('App - Rendered')

    return (
      <>
        <TotalCounter
          totalCounters={this.state.counters.filter(c => c.value > 0).length}
        />
        <main className='container'>
          <Counters //Controlled component (controlled by parent)
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
          />
        </main>
      </>
    )
  }
}

export default App
 */

import React, { Component } from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import NavBar from './components/navBar'
import Movies from './components/movies'
import MovieForm from './components/movieForm'
import Customers from './components/customers'
import Rentals from './components/rentals'
import NotFound from './components/notFound'
import LoginForm from './components/loginForm'
import RegisterForm from './components/registerForm'
import './App.css'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

class App extends Component {
  state = {}

  render () {
    const { user } = this.state

    return (
      <React.Fragment>
        <ToastContainer />
        <NavBar />
        <main className='container'>
          <Switch>
            <Route path='/login' component={LoginForm} />
            <Route path='/register' component={RegisterForm} />
            <Route path='/movies/:id' component={MovieForm} />
            <Route path='/movies' component={Movies} />
            <Route path='/customers' component={Customers} />
            <Route path='/rentals' component={Rentals} />
            <Route path='/not-found' component={NotFound} />
            <Redirect from='/' exact to='/movies' />
            <Redirect to='/not-found' />
          </Switch>
        </main>
      </React.Fragment>
    )
  }
}

export default App
