// TODO: stop using universal-middleware and directly integrate server middlewares instead. (Bati generates boilerplates that use universal-middleware https://github.com/magne4000/universal-middleware to make Bati's internal logic easier. This is temporary and will be removed soon.)
import type { Get, UniversalHandler } from '@universal-middleware/core'
import db from './db'
import type { Todo } from '@/types'

export const todoGet: Get<[], UniversalHandler<Universal.Context & {}>> =
  () => async (_request, _context, _runtime) => {
    const client = db()
    const todos = client.prepare<[], Todo>('SELECT * FROM todos').all()

    return new Response(JSON.stringify({ todos }), {
      status: 200,
      headers: { 'content-type': 'application/json' },
    })
  }

export const todoCreate: Get<[], UniversalHandler<Universal.Context & {}>> =
  () => async (request, _context, _runtime) => {
    // In a real case, user-provided data should ALWAYS be validated with tools like zod
    const newTodo = (await request.json()) as { text: string }

    const client = db()
    client.prepare('INSERT INTO todos (text) VALUES (?)').run(newTodo.text)

    return new Response(JSON.stringify({ status: 'OK' }), {
      status: 200,
      headers: { 'content-type': 'application/json' },
    })
  }
