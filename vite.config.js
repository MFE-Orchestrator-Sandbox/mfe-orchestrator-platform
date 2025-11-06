import { defineConfig } from 'vite'
import federation from '@originjs/vite-plugin-federation'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'app',
      remotes: {
            "primomfe": "http://localhost:3000/serve/mfe/files/68b317ac75e6f0ceaab58b79/DEV/primo-mfe/assets/remoteEntry.js",
            "test01": "http://localhost:3000/serve/mfe/files/68b317ac75e6f0ceaab58b79/DEV/test-01/index.js",
            "fwfw": "http://localhost:3000/serve/mfe/files/68b317ac75e6f0ceaab58b79/DEV/fwfw/index.js",
            "ciaoo": "http://localhost:3000/serve/mfe/files/68b317ac75e6f0ceaab58b79/DEV/ciaoo/index.js"
        },
      shared: ['react','react-dom']
    })
  ],
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false
  }
})
