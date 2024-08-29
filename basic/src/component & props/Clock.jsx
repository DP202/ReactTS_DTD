import React from 'react'

export default class Clock extends React.Component {
  // Dùng state thì khai báo constructor
  constructor(props) {
    super(props)
    this.state = {
      time: new Date().toLocaleTimeString()
    }
    this.date = '1/1/11'
  }

  getTime = () => {
    this.setState({
      time: new Date().toLocaleTimeString()
    })
  }

  componentDidMount() {
    const date = document.getElementById('date')
    console.log(date)
  }

  render() {
    return (
      <div>
        <h1>Hello, world !</h1>
        <h2>It is {this.state.time}</h2>
        <h3 id='date'>It is {this.date}</h3>
        <button onClick={this.getTime}>Get Time</button>
      </div>
    )
  }
}
