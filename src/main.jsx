import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import '@fontsource/manrope';
import '@fontsource/source-sans-3';
import Mousepointer from './hooks/Mousepointer';


createRoot(document.getElementById('site')).render(
  <StrictMode>
    <App />
    <Mousepointer />
  </StrictMode>,
)