import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/ai-peptide-portfolio/',
  server: {
    port: 3000,
    open: true
  }
})