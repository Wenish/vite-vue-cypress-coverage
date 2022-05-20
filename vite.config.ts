import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import istanbul from 'vite-plugin-istanbul';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    sourcemap: 'inline'
  },
  plugins: [
    vue(),
    istanbul({
      include: 'src/*',
      exclude: ['node_modules', 'test/'],
      extension: ['.js', '.ts', '.vue'],
      requireEnv: false,
    }),]
})
