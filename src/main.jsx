import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App'
import Mousepointer from './hooks/Mousepointer';
import SmoothScroll from './hooks/Smoothscroll'

import './index.css'
import '@fontsource/manrope';


createRoot(document.getElementById('site')).render(
  <StrictMode>
    <App />
    <Mousepointer />
    <SmoothScroll />
  </StrictMode>,
)