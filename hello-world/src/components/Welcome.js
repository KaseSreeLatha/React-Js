import React, {Component} from 'react'

class Welcome extends Component{
    render(){
        return <h1>Hiii....{this.props.name} with age of {this.props.age}</h1>
    }
}

export default Welcome