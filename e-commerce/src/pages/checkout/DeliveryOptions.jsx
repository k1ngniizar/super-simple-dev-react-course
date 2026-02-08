import dayjs from 'dayjs'
import { formatMoney } from '../../utils/money'
import axios from 'axios'

function DeliveryOptions({deliveryOptions, cartItem, loadCartData, fetchPaymentSummaryData}) {
  return (
    <div className="delivery-options">
      <div className="delivery-options-title">
        Choose a delivery option:
      </div>
      {deliveryOptions.map(deliveryOption => {
        
        const updateDeliveryOption = async () => {
          await axios.put(`/api/cart-items/${cartItem.productId}`, {
            deliveryOptionId: deliveryOption.id
          })

          await loadCartData()

          await fetchPaymentSummaryData()
        }

        return(
          <div onClick={updateDeliveryOption} key={deliveryOption.id} className="delivery-option">
            <input type="radio" onChange={()=>{}} checked={deliveryOption.id === cartItem.deliveryOptionId}
              className="delivery-option-input"
              name={`delivery-option-${cartItem.productId}`} />
            <div>
              <div className="delivery-option-date">
                {dayjs(deliveryOption.estimatedDeliveryTimeMs).format("dddd, MMMM, D")}
              </div>
              <div className="delivery-option-price">
                {deliveryOption.priceCents === 0 ? "Free Shipping": formatMoney(deliveryOption.priceCents)}
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default DeliveryOptions