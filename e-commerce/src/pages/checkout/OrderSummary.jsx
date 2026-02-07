import DeliveryOptions from './DeliveryOptions'
import CartItemDetails from './CartItemDetails'
import dayjs from 'dayjs'

function OrderSummary({deliveryOptions, cart}) {
  
  return (
    <div className="order-summary">
      {cart.map( cartItem => {
        const estimatedDeliveryDateMs = deliveryOptions.find((item) => item.id === cartItem.deliveryOptionId )
        return (
          <div key={cartItem.productId} className="cart-item-container">
            {
              estimatedDeliveryDateMs && (
                <div className="delivery-date">
                  Delivery date:  {dayjs(estimatedDeliveryDateMs.estimatedDeliveryTimeMs).format("dddd, MMMM D")}
                </div>
              )
            }

            <div className="cart-item-details-grid">
              <CartItemDetails cartItem={cartItem} />

              <DeliveryOptions deliveryOptions={deliveryOptions} cartItem={cartItem} />
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default OrderSummary