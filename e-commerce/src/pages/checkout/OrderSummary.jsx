import DeliveryOptions from './DeliveryOptions'
import CartItemDetails from './CartItemDetails'

function OrderSummary({deliveryOptions, cart}) {
  return (
    <div className="order-summary">
      {cart.map( cartItem => {
        return (
          <div key={cartItem.productId} className="cart-item-container">
            <div className="delivery-date">
              Delivery date: Tuesday, June 21
            </div>

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