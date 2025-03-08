import type { Todo } from './+data'
import { useData } from 'vike-react/useData'
import { TodoList } from './TodoList'

export default function Page() {
  const data = useData<{ todos: Todo[] }>()
  return (
    <>
      <h1>To-do List</h1>
      <TodoList initialTodoItems={data.todos} />
    </>
  )
}
