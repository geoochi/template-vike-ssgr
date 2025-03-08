import type { PageContextServer } from 'vike/types'
import db from '@/database/db'

type Todo = { id: number; text: string }

async function data(_pageContext: PageContextServer): Promise<{ todos: Todo[] }> {
  const client = db()
  const todos = client.prepare<[], Todo>('SELECT * FROM todos').all()

  return { todos }
}

export default data
export type { Todo }
