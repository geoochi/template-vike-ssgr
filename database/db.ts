import 'dotenv/config'
import sqlite from 'better-sqlite3'

export function db() {
  if (!process.env.DATABASE_URL) {
    throw new Error('Missing DATABASE_URL in .env file')
  }

  return sqlite(process.env.DATABASE_URL)
}
