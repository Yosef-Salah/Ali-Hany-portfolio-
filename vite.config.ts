import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Ali-Hany-portfolio-/', // لازم يكون نفس اسم الـ Repository بتاعك
})
