import { Link, useNavigate, useSearchParams } from "react-router"
import "./header.css"
import { useState } from "react";

function Header({cart}) {
  const navigate = useNavigate()
  
  const [searchParams] = useSearchParams()
  const search = searchParams.get("search")

  const [searchProduct, setSearchProduct] = useState(search || "")
  
  let totalQuantity = 0;

  cart.forEach((cartItem) => {
    totalQuantity += cartItem.quantity;
  })

  const searchFn = ()=> {
    navigate(`/?search=${searchProduct}`)
  }

  return (
    <header className="header">
      <div className="left-section">
        <Link to="/" className="header-link">
          <img className="logo"
            src="images/logo-white.png" />
          <img className="mobile-logo"
            src="images/mobile-logo-white.png" />
        </Link>
      </div>

      <div className="middle-section">
        <input value={searchProduct} onChange={
          (e) => {
            const {value} = e.currentTarget
            setSearchProduct(value)
          }
        } className="search-bar" type="text" placeholder="Search" />

        <button onClick={searchFn} className="search-button">
          <img className="search-icon" src="images/icons/search-icon.png" />
        </button>
      </div>

      <div className="right-section">
        <Link className="orders-link header-link" to="/orders">

          <span className="orders-text">Orders</span>
        </Link>

        <Link className="cart-link header-link" to="/checkout">
          <img className="cart-icon" src="images/icons/cart-icon.png" />
          <div className="cart-quantity">{totalQuantity}</div>
          <div className="cart-text">Cart</div>
        </Link>
      </div>
    </header>
  )
}

export default Header