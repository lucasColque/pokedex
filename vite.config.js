import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Configuración del servidor de desarrollo
    port: 3000, // Puerto en el que se ejecutará el servidor de desarrollo
    proxy: {
      // Configuración de proxy si es necesario
    },
    hmr: {
      // Configuración de HMR (Hot Module Replacement) si es necesario
    },
    // Configuración adicional del servidor de desarrollo
  },
})
