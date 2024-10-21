import { useState } from 'react'
import styles from './taskInput.module.scss'
import { Todo } from '../../@types/todo.type'

interface TaskInputProps {
  addTodo: (name: string) => void
  editTodo: (name: string) => void
  finishedTodo: () => void
  currentTodo: Todo | null // kiểu dữ liệu Todo hoặc là null
}

export default function TaskInput(props: TaskInputProps) {
  const { addTodo, currentTodo, editTodo, finishedTodo } = props

  const [name, setName] = useState<string>('')

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (currentTodo) {
      finishedTodo()
      if (name) setName('')
    } else {
      addTodo(name) // cái name này chính là cái value của thèn input -> để lấy được value của nó thì setState cho nó
      setName('') // khi add xong thì xóa kí tự
    }
  }
  // Phải onChange -> nếu ko có thì lỗi -> để change thì chỉ cần set lại cái stsate
  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    console.log(value)
    // setName(value)

    // Gọi cái editTodo trong cái onChangeInput , kiểm tra đang ở chế độ add hay edit
    // Nếu đang trong chế độ edit thì gọi hàm editTodo
    // Còn trong add thì gọi setName
    if (currentTodo) {
      // nếu có thì đang trong chế độ editodo
      editTodo(value)
    } else {
      setName(value)
    }
  }

  return (
    <div>
      <h1 className={styles.title}>Todo List TypeScript</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Caption goes here'
          value={currentTodo ? currentTodo.name : name}
          onChange={onChangeInput}
        />
        <button type='submit'>{currentTodo ? '✔️' : '➕'}</button>
      </form>
    </div>
  )
}
