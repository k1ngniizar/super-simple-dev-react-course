import React from 'react'
import { formatMoney } from '../../utils/money'
import dayjs from "dayjs"

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
                    <img className="product-image"
                      src={cartItem.product.image} />

                    <div className="cart-item-details">
                      <div className="product-name">
                        {cartItem.product.name}
                      </div>
                      <div className="product-price">
                       {formatMoney(cartItem.product.priceCents)}
                      </div>
                      <div className="product-quantity">
                        <span>
                          Quantity: <span className="quantity-label">{cartItem.quantity}</span>
                        </span>
                        <span className="update-quantity-link link-primary">
                          Update
                        </span>
                        <span className="delete-quantity-link link-primary">
                          Delete
                        </span>
                      </div>
                    </div>

                    <div className="delivery-options">
                      <div className="delivery-options-title">
                        Choose a delivery option:
                      </div>
                      {deliveryOptions.map(deliveryOption => {
                        return(
                          <div key={deliveryOption.id} className="delivery-option">
                            <input type="radio" checked={deliveryOption.id === cartItem.deliveryOptionId}
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
                  </div>
                </div>
              )
            })}
          </div>
  )
}

export default OrderSummary