import { useEffect, useState } from "react"
import Header from "../../components/Header"
import "./checkout-header.css"
import "./CheckoutPage.css"
import axios from "axios"
import OrderSummary from "./OrderSummary"
import PaymentSummary from "./PaymentSummary"

function CheckoutPage({cart}) {
  const [deliveryOptions, setDeliveryOptions] = useState([])
  const [paymentSummary, setPaymentSummary] = useState(null)

useEffect(()=>{
  axios.get("http://localhost:3000/api/delivery-options?expand=estimatedDeliveryTime")
    .then( response => {
      setDeliveryOptions(response.data)
    })

  axios.get("/api/payment-summary")
    .then( response => {
      setPaymentSummary(response.data)
    })
},[])

  return (
    <>
    <title>Checkout</title>
      <Header  cart={cart}/>

      <div className="checkout-page">
        <div className="page-title">Review your order</div>

        <div className="checkout-grid">
          <OrderSummary deliveryOptions={deliveryOptions} cart={cart} />

          {paymentSummary && (
            <PaymentSummary paymentSummary={paymentSummary} />
          )}
        </div>
      </div>
    </>
  )
}

export default CheckoutPage