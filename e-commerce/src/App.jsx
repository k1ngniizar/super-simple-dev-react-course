import { Route, Routes } from 'react-router'
import './App.css'
import HomePage from './pages/HomePage'
import CheckoutPage from './pages/CheckoutPage'
import OrderPage from './pages/OrderPage'
import TrackingPage from './pages/TrackingPage'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/checkout' element={<CheckoutPage />} />
      <Route path='/orders' element={<OrderPage />} />
      <Route path='/track' element={<TrackingPage />} />
    </Routes>
    </>
  )
}

export default App
