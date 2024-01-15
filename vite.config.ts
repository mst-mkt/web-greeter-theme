import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'
import styleXVitePlugin from 'vite-plugin-stylex'

export default defineConfig({
  base: './',
  plugins: [react(), styleXVitePlugin()],
})
