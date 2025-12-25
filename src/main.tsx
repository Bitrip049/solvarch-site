import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import Header from './components/Header'
import Footer from './components/Footer'
import Services from './pages/Services'
import AIEnablement from './pages/AIEnablement'
import Outcomes from './pages/Outcomes'
import CaseStudies from './pages/CaseStudies'
import Contact from './pages/Contact'
import logo from './assets/solvarch-logo.jpg'

// Ensure favicon uses the real Solvarch logo
const favicon = document.querySelector<HTMLLinkElement>("link[rel='icon']")
if (favicon) {
  favicon.href = logo
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route
          path="/services"
          element={
            <>
              <Header />
              <Services />
              <Footer />
            </>
          }
        />
        <Route
          path="/ai"
          element={
            <>
              <Header />
              <AIEnablement />
              <Footer />
            </>
          }
        />
        <Route
          path="/outcomes"
          element={
            <>
              <Header />
              <Outcomes />
              <Footer />
            </>
          }
        />
        <Route
          path="/cases"
          element={
            <>
              <Header />
              <CaseStudies />
              <Footer />
            </>
          }
        />
        <Route
          path="/contact"
          element={
            <>
              <Header />
              <Contact />
              <Footer />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
