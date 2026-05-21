import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Project site: https://<username>.github.io/portfolio/
export default defineConfig({
  base: '/portfolio/',
  plugins: [react()],
})
