// TODO: stop using universal-middleware and directly integrate server middlewares instead. (Bati generates boilerplates that use universal-middleware https://github.com/magne4000/universal-middleware to make Bati's internal logic easier. This is temporary and will be removed soon.)
import type { Get, UniversalHandler } from '@universal-middleware/core'

let count = 0

export const getCount: Get<[], UniversalHandler<Universal.Context & {}>> =
  () => async (_request, _context, _runtime) => {
    return new Response(JSON.stringify({ count }))
  }

export const countPlus: Get<[], UniversalHandler<Universal.Context & {}>> =
  () => async (_request, _context, _runtime) => {
    count++
    return new Response()
  }
