import React, { Component } from 'react'

class Counter extends Component {
    constructor(){
        super()
        this.state={
            count:0
        }
    }
    increment()
    {
        //case:1
        // this.state.count=this.state.count+1
        // console.log(this.state.count)


        this.setState(

            //case:2
            // {
            //     count:this.state.count+1
            // },
            // () => { console.log('Callback:',this.state.count)}

            //case:3
            (prevState,props) =>({
                count:prevState.count+1
            })
        )
    }

    incrementFive()
    {
        this.increment();
        this.increment();
        this.increment();
        this.increment();
        this.increment();
    }
  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={() => this.incrementFive()}>Increment</button>
      </div>
    )
  }
}

export default Counter