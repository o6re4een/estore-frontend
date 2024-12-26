import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { PiniaVuePlugin } from 'pinia'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: { alias: { '@': '/src' } },
  base: '/estore-frontend/'
})
