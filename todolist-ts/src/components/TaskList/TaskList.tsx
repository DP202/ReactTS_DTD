import { Todo } from '../../@types/todo.type'
import styles from './taskList.module.scss'
// phải định nghĩa kiểu dữ liệu của props
interface TaskListProps {
  doneTaskList?: boolean // thêm ? là có cũng được mà không có cũng được
  // Trong TS khi sài Props cần khai báo kdl
  todos: Todo[]
  handleDoneTodo: (id: string, done: boolean) => void
  startEditTodo: (id: string) => void
  deleteTodo: (id: string) => void
}

export default function TaskList(props: TaskListProps) {
  const { doneTaskList, todos, handleDoneTodo, startEditTodo, deleteTodo } = props

  const onChangeCheckbox = (id: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.checked
    handleDoneTodo(id, value)
  }

  return (
    <div>
      <h2 className={styles.title}>{doneTaskList ? 'Hoàn thành' : 'Chưa hoàn thành'}</h2>

      <div className={styles.tasks}>
        {todos.map((item) => (
          <div className={styles.taskItem} key={item.id}>
            <input
              type='checkbox'
              className={styles.taskCheckbox}
              checked={item.done}
              onChange={onChangeCheckbox(item.id)}
            />
            <span className={`${styles.taskName} ${item.done ? styles.taskNameDone : ''}`}> {item.name}</span>
            <div className={styles.taskActions}>
              <button className={styles.taskBtn} onClick={() => startEditTodo(item.id)}>
                🖋
              </button>
              <button className={styles.taskBtn} onClick={() => deleteTodo(item.id)}>
                🗑
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
