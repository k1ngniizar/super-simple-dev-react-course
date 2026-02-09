import { useEffect, useState } from "react"
import Header from "../../components/Header"
import "./OrdersPage.css"
import axios from "axios"
import OrderHeader from "./OrderHeader"
import OrderDetails from "./OrderDetails"

function OrderPage({cart, loadCartData}) {
  const [orders, setOrders] = useState([])

  useEffect(() => {
    const fetchOrderData = async () => {
      const response = await axios.get("/api/orders?expand=products")

      setOrders(response.data)
    }

    fetchOrderData()
  },[])
  return (
    <>
      <title>Orders</title>
      <Header cart={cart} />

      <div className="orders-page">
        <div className="page-title">Your Orders</div>

        <div className="orders-grid">
          {
            orders.map( order => {
              return(
                <div key={order.id} className="order-container">
                  <OrderHeader order={order} />

                  <OrderDetails loadCartData={loadCartData} order={order} />
                  
                </div>
              )
            })
          }

          
        </div>
      </div>
    </>
  )
}

export default OrderPage