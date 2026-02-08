import { useEffect, useState } from "react"
import Header from "../../components/Header"
import "./checkout-header.css"
import "./CheckoutPage.css"
import axios from "axios"
import OrderSummary from "./OrderSummary"
import PaymentSummary from "./PaymentSummary"

function CheckoutPage({cart, loadCartData}) {
  const [deliveryOptions, setDeliveryOptions] = useState([])
  const [paymentSummary, setPaymentSummary] = useState(null)
  
    const fetchDeliveryData = async ()=>{
      const response = await  axios.get("http://localhost:3000/api/delivery-options?expand=estimatedDeliveryTime")
  
      setDeliveryOptions(response.data)
    }
  
    const fetchPaymentSummaryData = async () => {
      const response = await axios.get("/api/payment-summary")
  
      setPaymentSummary(response.data)
    }

    useEffect(()=>{
      fetchDeliveryData()
      fetchPaymentSummaryData()
    },[])

  return (
    <>
    <title>Checkout</title>
      <Header  cart={cart}/>

      <div className="checkout-page">
        <div className="page-title">Review your order</div>

        <div className="checkout-grid">
          <OrderSummary deliveryOptions={deliveryOptions} fetchPaymentSummaryData={fetchPaymentSummaryData}  cart={cart} loadCartData={loadCartData} />

          {paymentSummary && (
            <PaymentSummary paymentSummary={paymentSummary} />
          )}
        </div>
      </div>
    </>
  )
}

export default CheckoutPage