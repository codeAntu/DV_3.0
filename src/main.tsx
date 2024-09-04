import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import SplashScreen from './screens/SplashScreen.tsx'
import "./css/index.css"


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    {/* <SplashScreen /> */}
  </StrictMode>,
)
