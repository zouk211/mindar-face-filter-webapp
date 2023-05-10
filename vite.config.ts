import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import basicSSL from '@vitejs/plugin-basic-ssl';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), basicSSL()],
  base: '/mindar-face-filter-webapp',
  server: {
    https: true,
  },
});
