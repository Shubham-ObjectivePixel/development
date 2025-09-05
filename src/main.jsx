import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "@fontsource-variable/manrope";
import './index.css'
import App from './App'

createRoot(document.getElementById('site')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)