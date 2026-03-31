import { createRoot } from 'react-dom/client'
import '../css/input.css'
import App from './App.jsx'

const container = document.getElementById('root')
const root = createRoot(container)
root.render(<App />)
