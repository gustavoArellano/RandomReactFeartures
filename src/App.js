import React, { Component } from 'react';
import './App.css';
import MyComponent from './components/MyComponent';
import PlayWithData from './components/PlayWithData';
import TestData from './components/TestData'



class App extends Component {
  constructor() {
    super()
    this.state = {
      isLoggedIn: false,
      count: 0
    }

    this.handleClickAdd = this.handleClickAdd.bind(this)
    this.handleClickSubtract = this.handleClickSubtract.bind(this)
  }

  handleClickAdd() {
    this.setState((stateToAdd) => {
      return {
        count: stateToAdd.count + 1
      }
    })
  }

  handleClickSubtract() {
    this.setState((stateToSubtract) => {
      return {
        count: stateToSubtract.count - 1
      }
    })
  }

  render() {
    
    let loggedIn

      if (this.state.isLoggedIn === true) {
        loggedIn = "in"
      } else {
        loggedIn = "out"
      }

    const testData = TestData.map((item) => {
      return (
        <PlayWithData key={item.id} data={item} />
      )
    })

    return (
      <div>
        <h1>You are curretnly logged {loggedIn}</h1>
        <hr/>

        <MyComponent />

        <hr/>

        <h2>{this.state.count}</h2>
        <button onClick={this.handleClickAdd}>ADD</button>
        <button onClick={this.handleClickSubtract}>SUBTRACT</button>

        <hr/>
        <h2>Play with Data Here!</h2>
        <p>Data: </p>
        {testData}
      </div>
    )
  }
}


export default App;
