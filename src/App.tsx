import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import SplashScreen from './screens/SplashScreen'
import Login from './screens/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <SplashScreen />
      <Login />
    </>
  )
}

export default App
