import React, { Component } from 'react'

function Button({ className = '', children }) {
  const handleClick = (e) => {
    console.log(e.target)
  }
  return (
    <div>
      <button className={`btn ${className}`} onClick={handleClick}>
        {children}Button
      </button>
    </div>
  )
}

class Layout extends Component {
  render() {
    const { left, right } = this.props
    return (
      <div className='layout'>
        <div className='layout-left'>left</div>
        <div className='layout-right'>right</div>
      </div>
    )
  }
}

export default function Composition() {
  return (
    <div>
      Composition
      <Button />
      <Button className='btn-yellow'>Yellow</Button>
      <Layout
        left={<Button className='btn-left'>Left</Button>}
        right={<Button className='btn-right'>right</Button>}
      />
    </div>
  )
}
