import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ command }) => ({
  // GitHub Pages serves this project from /AmericanPurityAir/.
  // Keep the root base during local development so `npm run dev` is unchanged.
  base: command === 'build' ? '/AmericanPurityAir/' : '/',
  plugins: [react()],
}))
