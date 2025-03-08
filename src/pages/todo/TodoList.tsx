import { useEffect, useState } from 'react'
import type { Todo } from '@/types'

const TodoList: React.FC = () => {
  const [todoItems, setTodoItems] = useState<Todo[]>([])
  const [newTodo, setNewTodo] = useState('')
  const fetchTodos = async () => {
    const res = await fetch('/api/todo')
    const data = await res.json()
    setTodoItems(data.todos)
  }
  useEffect(() => {
    fetchTodos()
  }, [])

  return (
    <>
      <ul>
        {todoItems.map((todoItem, index) => (
          // biome-ignore lint:
          <li key={index}>{todoItem.text}</li>
        ))}
      </ul>
      <div>
        <form
          onSubmit={async ev => {
            ev.preventDefault()
            try {
              const response = await fetch('/api/todo/create', {
                method: 'POST',
                body: JSON.stringify({ text: newTodo }),
                headers: {
                  'Content-Type': 'application/json',
                },
              })
              await response.blob()
              setNewTodo('')
              fetchTodos()
            } catch (e) {
              console.error(e)
            }
          }}
        >
          <input type='text' onChange={ev => setNewTodo(ev.target.value)} value={newTodo} />
          <button type='submit'>Add to-do</button>
        </form>
      </div>
    </>
  )
}

export default TodoList
