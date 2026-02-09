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
  
  const loadCartData = async ()=>{
    const response = await axios.get("/api/cart-items?expand=product")
    setCart(response.data)
  }

  useEffect(()=>{
    loadCartData()
  },[])

  return (
    <>
    <Routes>
      <Route path='/' element={<HomePage cart={cart} loadCartData={loadCartData} />} />
      <Route path='/checkout' element={<CheckoutPage cart={cart} loadCartData={loadCartData} />} />
      <Route path='/orders' element={<OrderPage loadCartData={loadCartData} cart={cart} />} />
      <Route path='/track/:orderId/:productId' element={<TrackingPage cart={cart} />} />
    </Routes>
    </>
  )
}

export default App
