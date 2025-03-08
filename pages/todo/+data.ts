// https://vike.dev/data
import { db } from '../../database/db'
import type { PageContextServer } from 'vike/types'

export type Todo = { id: number; text: string }

export default async function data(_pageContext: PageContextServer): Promise<{ todos: Todo[] }> {
  const client = db()
  const todos = client.prepare<[], Todo>('SELECT * FROM todos').all()

  return { todos }
}
