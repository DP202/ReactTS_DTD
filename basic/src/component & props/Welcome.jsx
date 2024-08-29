import React from 'react'

// Funcion Component

// function Welcome(props) {
//   return <h1>Hello, {props.name}</h1>;
// }

// Class Component
class Welcome extends React.Component {
  render() {
    console.log(this.props)
    return <h1>Hello, {this.props.name}</h1>
  }
}

export default Welcome
