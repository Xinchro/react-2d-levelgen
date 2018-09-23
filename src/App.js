import React, { Component } from 'react'
import logo from './logo.svg'
import './app.css'
import Block from './components/map/block.js'
//import mapData from './example-structure.json'

class App extends Component {
  constructor(props) {
    super(props)
    console.log("hello!")
  }

  render() {
    return (
      <div className="app">
        <header className="app-header">
          <img src={logo} className="app-logo" alt="logo" />
          <h1 className="app-title">Welcome to React</h1>
        </header>
        <p className="app-intro">
          To get started, edit <code>src/app.js</code> and save to reload.
        </p>
        <Block />
      </div>
    );
  }
}

export default App;
