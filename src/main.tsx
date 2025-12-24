import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import logo from './assets/solvarch-logo.jpg'

// Ensure favicon uses the real Solvarch logo
const favicon = document.querySelector<HTMLLinkElement>("link[rel='icon']")
if (favicon) {
  favicon.href = logo
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
