import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import '@fontsource/manrope';

createRoot(document.getElementById('site')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)