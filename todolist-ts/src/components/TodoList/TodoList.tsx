import { useEffect, useState } from 'react'
import TaskInput from '../TaskInput'
import TaskList from '../TaskList'
import styles from './todoList.module.scss'
import { Todo } from '../../@types/todo.type'

export default function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([])
  const [currentTodo, setCurrentTodo] = useState<Todo | null>(null) // ban đầu là add -> null
  const doneTodos = todos.filter((item) => item.done)
  const notdoneTodos = todos.filter((item) => !item.done)

  useEffect(() => {
    const todoString = localStorage.getItem('todos') // lấy itm là todo
    const todoObj: Todo[] = JSON.parse(todoString || '[]')
    setTodos(todoObj)
  }, [])

  const addTodo = (name: string) => {
    const todo: Todo = {
      name,
      done: false, // mới add thì chưa hoàn thành nên là false
      id: new Date().toISOString()
    }
    // Khi ấn vào nút thì cần set lại todo
    setTodos((prevTodos) => [...prevTodos, todo]) // copy todo cũ rồi thêm cuối todo vào mảng mới

    const todoString = localStorage.getItem('todos') // lấy itm là todo
    const todoObj: Todo[] = JSON.parse(todoString || '[]') // parse JSON thành obj
    const newTodoObj = [...todoObj, todo]
    localStorage.setItem('todos', JSON.stringify(newTodoObj))
  }

  const handleDoneTodo = (id: string, done: boolean) => {
    setTodos((prev) => {
      return prev.map((todo) => {
        if (todo.id === id) {
          // nghĩa là phần tử hiện tại là công việc muốn thay đổi
          return { ...todo, done }
        }
        return todo
      })
    })
  }

  // Edit -> mún edit todo nào thì set currenttodo đó -> nên cần dùng id
  const startEditTodo = (id: string) => {
    const findTodo = todos.find((item) => item.id === id)
    if (findTodo) {
      setCurrentTodo(findTodo)
    }
  }

  // edit : thì change mỗi cái name
  const editTodo = (name: string) => {
    setCurrentTodo((prev) => {
      if (prev) {
        return { ...prev, name } // sap chép tất cả trong prev , nếu prev đã có thuộc tính name thì nó sẽ cập nhật
        // với giá trị mới truyền vào
      }
      return null
    })

    setCurrentTodo(null)
  }

  //
  const finishedTodo = () => {
    setTodos((prev) => {
      return prev.map((todo) => {
        if (todo.id === (currentTodo as Todo).id) {
          // ?. trong trường hợp currentTodo là null thì nó không lỗi
          return currentTodo as Todo
        }
        return todo
      })
    })
    setCurrentTodo(null)
    const todoString = localStorage.getItem('todos') // lấy itm là todo
    const todoObj: Todo[] = JSON.parse(todoString || '[]')

    const newTodoObj = todoObj.map((todo) => {
      if (todo.id === (currentTodo as Todo).id) {
        // ?. trong trường hợp currentTodo là null thì nó không lỗi
        return currentTodo as Todo
      }
      return todo
    })
    localStorage.setItem('todos', JSON.stringify(newTodoObj))
  }

  // Delete -> muốn xóa thì cần id
  const deleteTodo = (id: string) => {
    if (currentTodo) {
      setCurrentTodo(null)
    }
    setTodos((prev) => {
      const findIndexTodo = prev.findIndex((todo) => todo.id === id)
      if (findIndexTodo > -1) {
        const result = [...prev]
        result.splice(findIndexTodo, 1)
        return result
      }
      return prev
    })
  }

  return (
    <div className={styles.todoList}>
      <div className={styles.todoListContainer}>
        {/* Truyền cái addTodo vào cái TaskInput để khi nhấn submit thì gọi addTodo truyền cái name  */}
        <TaskInput addTodo={addTodo} currentTodo={currentTodo} editTodo={editTodo} finishedTodo={finishedTodo} />
        <TaskList
          todos={notdoneTodos}
          handleDoneTodo={handleDoneTodo}
          doneTaskList={false}
          startEditTodo={startEditTodo}
          deleteTodo={deleteTodo}
        />
        <TaskList
          todos={doneTodos}
          handleDoneTodo={handleDoneTodo}
          doneTaskList={true}
          startEditTodo={startEditTodo}
          deleteTodo={deleteTodo}
        />
      </div>
    </div>
  )
}
