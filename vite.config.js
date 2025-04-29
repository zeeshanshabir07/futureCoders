import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src', // This alias works for local development
    },
  },
  base: '/futureCoders/', // Set this to your GitHub repository name
});
