import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import "./css/index.css"
import Nav from './screens/Home.tsx'
import Profile from './screens/Profile.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Profile />
  </StrictMode>,
)
