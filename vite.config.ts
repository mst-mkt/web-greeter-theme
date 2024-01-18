import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'
import { stylexPlugin } from 'vite-plugin-stylex-dev'

export default defineConfig({
  base: './',
  plugins: [react(), stylexPlugin()],
})
