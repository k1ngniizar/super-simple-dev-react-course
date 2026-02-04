import { Route, Routes } from 'react-router'
import './App.css'
import HomePage from './pages/HomePage'
import CheckoutPage from './pages/CheckoutPage'
import OrderPage from './pages/OrderPage'
import TrackingPage from './pages/TrackingPage'
import { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
  const [cart, setCart] = useState([])
  useEffect(()=>{
    axios.get("/api/cart-items")
      .then( response => {
        setCart(response.data)
      })
  },[])

  return (
    <>
    <Routes>
      <Route path='/' element={<HomePage cart={cart} />} />
      <Route path='/checkout' element={<CheckoutPage cart={cart} />} />
      <Route path='/orders' element={<OrderPage cart={cart} />} />
      <Route path='/track' element={<TrackingPage cart={cart} />} />
    </Routes>
    </>
  )
}

export default App
