import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import SplashScreen from './screens/SplashScreen'
import Login from './screens/Login'
import Register from './screens/Register'
import Slider from './screens/Slider'
import Otp from './screens/Otp'
import QR from './screens/QR'
import UPI from './screens/UPI'
import LiveReport from './screens/LiveReport'
import Ranking from './screens/Ranking'
import Notification from './screens/Notification'
import Refer from './screens/Refer'
import MyFamily from './screens/MyFamily'
import KYC from './screens/KYC'
import Withdraw from './screens/Withdraw'
import KYCScreen from './screens/KYCScreen'
import Profile from './screens/Profile'
import Balance from './screens/Balance'
import AddMoney from './screens/AddMoney'
import Plans from './screens/Plans'
import Transaction from './screens/Transaction'
import WithdrawPopup from './screens/WithdrawPopup'
import WithdrawSurePopup from './screens/WithdrawSurePopup'
import WithdrawalMethod from './screens/WithdrawalMethod'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <SplashScreen />
      <Login />
      <Register />
      <Slider />
      <Otp />
      <QR />
      <UPI />
      <LiveReport />
      <Ranking />
      <Notification />
      <Refer />
      <MyFamily />
      <KYC />
      <Withdraw />
      <KYCScreen />
      <Profile />
      <Balance /> 
      <AddMoney />
      <Plans />
      <Transaction />
      <WithdrawPopup />
      <WithdrawSurePopup />
      <WithdrawalMethod /> */}
    </>
  )
}

export default App
