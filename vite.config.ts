import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: './', // ده أهم سطر: بيخلي كل المسارات نسبية
  build: {
    outDir: 'dist',
  },
})
