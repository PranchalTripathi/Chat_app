import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { Socket } from 'socket.io-client'

// https://vite.dev/config/
export default defineConfig({
  build:{
    rollupOptions:{
  plugins: [react()],
  external:['Socket.io-client'],
},
  },
});

