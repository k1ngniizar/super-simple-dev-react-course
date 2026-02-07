import { useEffect, useState } from "react"
import axios from "axios"
import Header from "../../components/Header"
import "./HomePage.css"
import ProductsGrid from "./ProductsGrid"

function HomePage({cart}) {
  const [products, setProducts]= useState([])
  useEffect(()=>{
    const fetchProductData = async () => {
      const response = await axios.get("/api/products")

      setProducts(response.data)
    }
    
    fetchProductData()
  },[])

  return (
    <>
    <title>Ecommerce Project</title>
     <Header cart={cart}/>

    <div className="home-page">
      <ProductsGrid products={products} />
    </div>
    </>
  )
}

export default HomePage