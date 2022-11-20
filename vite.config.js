Uuimport { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
base:'/Todo-s-List/',
  server: {
    host: '0.0.0.0',
  }
})
