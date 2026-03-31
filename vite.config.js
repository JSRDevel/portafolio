import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
    plugins: [
        react(),
        tailwindcss()
    ],
    // GitHub Pages project site: https://jsrdevel.github.io/portafolio/
    base: '/portafolio/'
})
