import React, { Component } from 'react'
import style from './style.css'

export class ClassClick extends Component {
    clickHandler()
    {
        console.log('Clicked Button')
    }
  render() {
    return (
      <div className='one'>
        <button onClick={this.clickHandler}>  Click Me</button>
      </div>
    )
  }
}

export default ClassClick