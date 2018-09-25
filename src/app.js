import React, { Component } from 'react'
import logo from './logo.svg'
import './app.css'
import { Block } from './components'
import { generate } from './generator'
//import mapData from './example-structure.json'

class App extends Component {
  constructor(props) {
    super(props)

    this.reGen = this.reGen.bind(this)
    this.state = {
      blocks: this.genBlocks(5)
    }
  }

  /**
    Generates the map blocks

    @returns {DOM} - the array of generated blocks
  */
  genBlocks(amount) {
    let blocks = []
    const gendBlocks = generate(5)

    for (let i=0; i<amount; i++) {
      blocks.push(<Block pos={gendBlocks[i].pos} doors={
        gendBlocks[i].doors} key={Math.random()*1*1000} />
      )
    }
    return blocks
  }

  reGen() {
    this.setState({
      blocks: this.genBlocks(5)
    })
  }

  render() {
    const { blocks } = this.state

    return (
      <div className="app">
        <header className="app-header">
          <img src={logo} className="app-logo" alt="logo" />
          <h1 className="app-title">Welcome to React</h1>
          <button onClick={this.reGen}>reGen</button>
        </header>
        <p className="app-intro">
          To get started, edit <code>src/app.js</code> and save to reload.
        </p>
        {blocks}
      </div>
    );
  }
}

export default App;
