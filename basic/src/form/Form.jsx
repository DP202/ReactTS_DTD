import React, { useState } from 'react'

function Form() {
  // Khởi tạo state
  const [formData, setFormData] = useState({
    value: '',
    address: '',
    marriage: false,
    player: 'cr7'
  })

  // Dùng 1 handle change
  const handleChange = (event) => {
    const { name, type, value, checked } = event.target
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === 'checkbox' ? checked : value // [name] : là thuộc tính đối tượng
    }))
  }

  const hanldeSubmit = (event) => {
    event.preventDefault()
    console.log(formData)
  }

  return (
    <div>
      <form onSubmit={hanldeSubmit}>
        <label>
          Name
          <input
            type='text'
            name='value'
            value={formData.value}
            onChange={handleChange}
          />
        </label>
        <label>
          <input type='submit' value='Submit' />
        </label>
        <br></br>
        <input
          type='checkbox'
          name='marriage'
          checked={formData.marriage}
          onChange={handleChange}
        />

        <textarea
          name='address'
          value={formData.address}
          onChange={handleChange}
        />

        <select onChange={handleChange} value={formData.player} name='player'>
          <option value='Cr7'>Cristiano Ronaldo</option>
          <option value='M10'>Lionel Messi</option>
          <option value='R4'>Marcus Rashford</option>
          <option value='G8'>Steven Gerrard</option>
        </select>
        <br />
        {/* <input type='file' /> */}
      </form>
    </div>
  )
}

export default Form
