import { useEffect, useState } from "react"
import axios from "axios"
import Header from "../../components/Header"
import "./HomePage.css"
import ProductsGrid from "./ProductsGrid"
import { useSearchParams } from "react-router"

function HomePage({cart, loadCartData}) {
  const [searchParams] = useSearchParams()
  const search = searchParams.get("search")

  const [products, setProducts]= useState([])

  
  useEffect(()=>{
    const fetchProductData = async () => {
      if(search){
        const response = await axios.get(`/api/products?search=${search}`)
        setProducts(response.data)
      } else {
        const response = await axios.get("/api/products")
        setProducts(response.data)
      }
  
    }
    fetchProductData()
  },[search])

  return (
    <>
    <title>Ecommerce Project</title>
     <Header cart={cart}/>

    <div className="home-page">
      <ProductsGrid products={products} loadCartData={loadCartData} />
    </div>
    </>
  )
}

export default HomePage