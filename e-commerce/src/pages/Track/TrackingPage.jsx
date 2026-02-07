import { Link, useParams } from "react-router"
import Header from "../../components/Header"
import "./TrackingPage.css"
import { useEffect, useState } from "react"
import axios from "axios"
import dayjs from "dayjs"

function TrackingPage({cart}) {
  const params = useParams()
  const {orderId, productId} = params

  const [orderToTrack, setOrderToTrack] = useState(null)

  useEffect(()=>{
    const fetchTrackOrderData = async () => {
      const response =  await axios.get(`/api/orders/${orderId}?expand=products`)

      setOrderToTrack(response.data)
    }

    fetchTrackOrderData()
  },[orderId])

if(!orderToTrack){
  return null
}

const productDetails = orderToTrack.products.find((product => product.productId === productId))

const totalDeliveryTimeMs = productDetails.estimatedDeliveryTimeMs - orderToTrack.orderTimeMs

const timePassedMs = dayjs().valueOf() - orderToTrack.orderTimeMs

// const timePassedMs = totalDeliveryTimeMs * 0.3

let deliveryPercent = (timePassedMs / totalDeliveryTimeMs);

if(deliveryPercent > 100) {
  deliveryPercent = 100;
}

const isPreping = deliveryPercent < 33;
const isShipped = deliveryPercent > 33 && deliveryPercent < 100;
const isDelivered = deliveryPercent === 100;


  return (
    <>
      <title>Tracking</title>

      <Header cart={cart}/>

      <div className="tracking-page">
        <div className="order-tracking">
          <Link className="back-to-orders-link link-primary" to="/orders">
            View all orders
          </Link>

         
          <div className="delivery-date">
            Arriving on {dayjs(productDetails.estimatedDeliveryTimeMs).format("dddd, MMMM d")}
          </div>

          <div className="product-info">
            {productDetails.product.name}
          </div>

          <div className="product-info">
            Quantity: {productDetails.quantity}
          </div>

          <img className="product-image" src={productDetails.product.image} />
            

          <div className="progress-labels-container">
            <div className={`progress-label ${isPreping && "current-status"}`}>
              Preparing
            </div>
            <div className={`progress-label ${isShipped && "current-status"}`}>
              Shipped
            </div>
            <div className={`progress-label ${isDelivered && "current-status"}`}>
              Delivered
            </div>
          </div>

          <div className="progress-bar-container">
            <div style={{width: `${deliveryPercent}%`}} className="progress-bar"></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default TrackingPage