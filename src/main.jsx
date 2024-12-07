import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ScrollContextState from './Context/ScrollContextState.jsx'

createRoot(document.getElementById('root')).render(
  <ScrollContextState>
    <App />
  </ScrollContextState>,
)
