// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import tsconfigPaths from "vite-tsconfig-paths"


// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      usePolling: true,
    },
  },
})