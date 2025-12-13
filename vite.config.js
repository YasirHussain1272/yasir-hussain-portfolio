import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Replace 'YOUR_REPO_NAME' with your actual repository name (e.g., 'my-portfolio')
const repoName = '/yasir-hussain-portfolio'; 

export default defineConfig({
  plugins: [react()],
  // Set the base path for assets during the build
  base: `/${repoName}/`, 
})