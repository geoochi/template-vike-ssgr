import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import vike from 'vike/plugin'
import path from 'path'

export default defineConfig({
  plugins: [vike({}), react({})],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    target: 'es2022',
  },
})
