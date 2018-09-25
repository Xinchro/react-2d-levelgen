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
    let classes = []

    let status = open ? "open" : "closed"

    status = wall ? "wall" : status

    const direction = side === 0 || side === 2 ? "horizontal" : "vertical"

    let position = "top"

    switch(side) {
      case 0:
        position = "top"
        break
      case 1:
        position = "right"
        break
      case 2:
        position = "bottom"
        break
      case 3:
        position = "left"
        break
      default:
        console.error("door placement error")
        position = "top"
    }

    classes.push("door")
    classes.push(status)
    classes.push(direction)
    classes.push(position)

    return (
      <span className={classes.join(" ")} key={Math.random()*(side+1)*1000}></span>
    )
  }

  render() {
    const { doors } = this.state
    const { number } = this.props

    return (
      <section className="sub-block">
        {doors}
        <span></span>
      </section>
    );
  }
}

export { SubBlock };
