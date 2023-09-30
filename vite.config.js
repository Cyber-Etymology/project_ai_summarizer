import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Load environment variables
import { loadEnv } from 'vite';

// https://vitejs.dev/config/
// Load .env variables into VITE_ prefixed variables
export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  return defineConfig({
    plugins: [react()],
  });
};
