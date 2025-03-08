import { db as sqliteDb } from '@/database/db'

declare global {
  namespace Vike {
    interface PageContext {
      db: ReturnType<typeof sqliteDb>
    }
  }
}

export {}
