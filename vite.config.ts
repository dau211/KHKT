import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');
  return {
    base: '/',  // Thêm dòng này để fix resolve path ở production
    server: {
      port: 3000,
      host: '0.0.0.0',
    },
    plugins: [react()],
    // Xóa define GEMINI_API_KEY nếu không dùng (từ hướng dẫn trước)
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      }
    }
  };
});
