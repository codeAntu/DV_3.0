import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SplashScreen from './screens/SplashScreen'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <SplashScreen />
    </>
  )
}

export default App
