import { Route, Routes } from 'react-router'
import './App.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
import TrackingPage from './pages/Track/TrackingPage'
import CheckoutPage from './pages/checkout/CheckoutPage'
import OrderPage from './pages/orders/OrderPage'
import HomePage from './pages/home/HomePage'

function App() {
  const [cart, setCart] = useState([])

  useEffect(()=>{

    const fetchAppData = async ()=>{
      const response = await axios.get("/api/cart-items?expand=product")
      setCart(response.data)
    }

    fetchAppData()

  },[])

  return (
    <>
    <Routes>
      <Route path='/' element={<HomePage cart={cart} />} />
      <Route path='/checkout' element={<CheckoutPage cart={cart} />} />
      <Route path='/orders' element={<OrderPage cart={cart} />} />
      <Route path='/track/:orderId/:productId' element={<TrackingPage cart={cart} />} />
    </Routes>
    </>
  )
}

export default App
