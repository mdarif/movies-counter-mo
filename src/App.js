import React, { Component } from 'react'
import './App.css'
import NavBar from './components/navbar'
import './index.css'
import Counters from './components/counters'

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
    // this.state = {
    //   posts: [],
    //   comments: []
    // }
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
        <NavBar
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
