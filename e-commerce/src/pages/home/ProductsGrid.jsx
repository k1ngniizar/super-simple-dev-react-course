import Products from './Products'

function ProductsGrid({products, loadCartData}) {

  return (
    <div className="products-grid">
        {products.map(product => {
          return (
            <Products key={product.id} product={product} loadCartData={loadCartData}/>
          )
        })}
      </div>
  )
}

export default ProductsGrid