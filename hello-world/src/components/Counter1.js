import React, { Component } from 'react'

export class Counter1 extends Component {
    constructor() {
      super()
    
      this.state = {
        count:0
      }
    //   this.handleDec=this.handleDec.bind(this)
    //   this.handleInc=this.handleInc.bind(this)
    }

    handleDec()
    {
        this.setState(
        (prevState) =>({
            count:prevState.count-1
        })
        )
    }

    handleInc()
    {
        this.setState((prevState) =>({
            count:prevState.count+1
        })
        )
    }

  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <div><button onClick={()=>this.handleDec()}>Dec</button><span>Play</span> <button onClick={()=>this.handleInc()}>Inc</button></div>
      </div>
    )
  }
}

export default Counter1