import React, { useRef, useState } from 'react'

export default function UnControlledConponent() {
  const inputRef = useRef(null)
  const fileInput = useRef()

  // Tạo 1 state để lưu trữ file mà ngta upload
  const { file, setFile } = useState({
    selectedFile: null // nó là 1 object cho nó giá trị mặc định là null
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // console.log(inputRef.current.value)
    const formData = new FormData()
    formData.append('myFile', setFile.selectedFile, setFile.selectedFile.name)
    console.log(setFile.selectedFile)
    // gọi api
    // axios.post('api/upload',formData)
  }

  const onFileChange = (e) => {
    // để xem thử file này có gì
    // console.log(e.target.files[0]) // => lúc này là lấy được cái file đã truyền , sau đó xét nó vào state
    setFile({
      selectedFile: e.target.files[0]
    })
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name :
          <input type='text' ref={inputRef} defaultValue='abc' />
        </label>
        <br />
        <input
          type='file'
          name='avatar'
          ref={fileInput}
          onChange={onFileChange}
        />
        <input type='submit' value='submit' />
      </form>
    </div>
  )
}
