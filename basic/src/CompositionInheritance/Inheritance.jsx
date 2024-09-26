import React from 'react'

function Button() {
  const handleClick = (e) => {
    console.log(e.target)
  }
  return (
    <div>
      <button className='btn' onClick={handleClick}>
        Button
      </button>
    </div>
  )
}

function ButtonYellow() {}
// Chỉ có class Component nó mới truyền được theo kiểu Inheritance => ButtonYellow extend Button

export default function Inheritance() {
  return (
    <div>
      Inheritance
      <Button />
    </div>
  )
}
