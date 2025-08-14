import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { CarsProvider } from './context/CarsContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CarsProvider>
      <App />
    </CarsProvider>
  </StrictMode>,
)
