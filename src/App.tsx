import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import SplashScreen from './screens/SplashScreen'
import Login from './screens/Login'
import Register from './screens/Register'
import Slider from './screens/Slider'
import Otp from './screens/Otp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <SplashScreen /> */}
      {/* <Login /> */}
      {/* <Register /> */}
      {/* <Slider /> */}
      <Otp />
    </>
  )
}

export default App
