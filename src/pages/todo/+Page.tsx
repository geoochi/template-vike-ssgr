import { useData } from 'vike-react/useData'
import type { Todo } from '@/types'
import TodoList from './TodoList'

const Page: React.FC = () => {
  const data = useData<{ todos: Todo[] }>()
  return (
    <>
      <h1>To-do List</h1>
      <TodoList initialTodoItems={data.todos} />
    </>
  )
}

export default Page
