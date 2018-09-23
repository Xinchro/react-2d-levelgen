import React, { Component } from 'react';

class SubBlock extends Component {
  constructor(props) {
    super(props)

    this.state = {
      doors: this.createAndOpenDoors(props.doors, props.placement)
    }
  }

  /**
    Decides where to place and open doors

    @params {array} doors - the doors prop array
    @returns {array} - ret
  }
  */
  createAndOpenDoors(doors) {
    const size = 5
    let open = false
    let doorsDOM = []

    for(let i=0; i<4; i++) {
      // door possible
      if(doors[i]) {
        // has door
        if(doors[i][0] === 1) {
          // door is open
          if(doors[i][1] === 1) {
            doorsDOM.push(this.makeDoor(i, true))
          } else {
            // door is closed
            doorsDOM.push(this.makeDoor(i, false))
          }
        } else {
          doorsDOM.push(this.makeDoor(i, false, true))
        }
      }
    }
    return doorsDOM
  }

  /**
    Make a door and open it(or not)

    @params {array} states - the state of the 4 sides
    @returns {DOM} - the dom of the door
  */
  makeDoor(side, open, wall) {
    const { number } = this.props
    let size = "3px"
    let color = open ? "green" : "red"
    color = wall ? "black" : color

    let styling = {
      height: side === 0 || side === 2 ? size : "100%",
      width: side === 1 || side === 3 ? size : "100%",
      top: side === 0 ? "0" : "initial",
      right: side === 1 ? "0" : "initial",
      bottom: side === 2 ? "0" : "initial",
      left: side === 3 ? "0" : "initial",
      background: color,
      display: "block",
      position: "absolute"
    }

    return (
      <span style={styling} key={Math.random()*(side+1)*1000}>

      </span>
    )
  }

  render() {
    const { doors } = this.state
    const { number } = this.props
    let r = Math.floor((Math.random()*150))
    let g = Math.floor((Math.random()*150))
    let b = Math.floor((Math.random()*255)+150)
    let randomColor = `rgb(${r},${g},${b})`

    let subBlockStyle = {
      background: "#aaaaff"
    }

    return (
      <section className="sub-block" style={subBlockStyle}>
        {doors}
        <span>{number}</span>
      </section>
    );
  }
}

export default SubBlock;
