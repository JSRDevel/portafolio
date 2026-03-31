import { createRoot } from 'react-dom/client'
import '../css/input.css'
import App from './App.jsx'

const container = document.getElementById('root')
if (!container) throw new Error('Root element #root not found in the document.')
const root = createRoot(container)
root.render(<App />)
