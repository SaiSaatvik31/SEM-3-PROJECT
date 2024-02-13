import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
      proxy : {
        '/flask' : 'http://localhost:5000',
        '/api' : 'http://localhost:1337',
      },
  },
  plugins: [react()],
})
