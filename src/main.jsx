import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import '@fontsource/manrope';
import Mousepointer from './Mousepointer';


createRoot(document.getElementById('site')).render(
  <StrictMode>
    <Mousepointer />
    <App />
  </StrictMode>,
)