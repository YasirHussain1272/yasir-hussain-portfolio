import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const repoName = 'yasir-hussain-portfolio'; 

export default defineConfig({
  plugins: [react()],
  // Set the base path for assets during the build
  base: `/${repoName}/`, 
})
