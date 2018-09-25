import React, { Component } from 'react';
import { SubBlock } from './subblock.js';

class Block extends Component {
  constructor(props) {
    super(props)

    this.state = {
      pos: props.pos,
      doors: props.doors ? props.doors : [
        [ 1, 1 ],
        [ 0, 0 ],
        [ 1, 0 ],
        [ 1, 0 ],
        [ 0, 0 ],
        [ 1, 1 ],
        [ 1, 0 ],
        [ 0, 0 ],
        [ 1, 1 ],
        [ 1, 1 ],
        [ 0, 0 ],
        [ 1, 0 ]
      ]
    }
  }

  render() {
    let { doors, pos } = this.state
    return (
      <section className="block">
        <SubBlock doors={[ doors[11], null, null, doors[0] ]} number="1" />
        <SubBlock doors={[ doors[1], null, null, null ]} number="2" />
        <SubBlock doors={[ doors[2], doors[3], null, null ]} number="3" />

        <SubBlock doors={[ null, null, null, doors[4] ]} number="4" />
        <SubBlock doors={[ null, null, null, null ]} number="5" />
        <SubBlock doors={[ null, doors[5], null, null ]} number="6" />

        <SubBlock doors={[ null, null, doors[6], doors[7] ]} number="7" />
        <SubBlock doors={[ null, null, doors[8], null ]} number="8" />
        <SubBlock doors={[ null, doors[9], doors[10], null ]} number="9" />
        <span className="location">{pos[0]},{pos[1]}</span>
      </section>
    );
  }
}

export { Block };
