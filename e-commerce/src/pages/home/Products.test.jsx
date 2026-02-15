import axios from "axios";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { render, screen} from "@testing-library/react"
import {userEvent} from "@testing-library/user-event"
import Products from "./Products"


vi.mock("axios")

describe("Product Component", ()=>{

  let product;

  let loadCartData;

  beforeEach(()=>{
    product = {
      id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
      image: "images/products/athletic-cotton-socks-6-pairs.jpg",
      name: "Black and Gray Athletic Cotton Socks - 6 Pairs",
      rating: {
        stars: 4.5,
        count: 87
      },
      priceCents: 1090,
      keywords: ["socks", "sports", "apparel"]
    }

    loadCartData = vi.fn() 
  })

  it("displays the product detail correctly", ()=>{
    

    render(<Products product={product} loadCartData={loadCartData} />);

    expect(
      screen.getByText("Black and Gray Athletic Cotton Socks - 6 Pairs")
    ).toBeInTheDocument()

    expect(
      screen.getByText("$10.90")
    ).toBeInTheDocument()

    expect(
      screen.getByTestId("product-image")
    ).toHaveAttribute("src", "images/products/athletic-cotton-socks-6-pairs.jpg")

    expect(
      screen.getByTestId("product-rating")
    ).toHaveAttribute("src", "images/ratings/rating-45.png")

    expect(screen.getByText("87")).toBeInTheDocument()
  })

  it("Adds to cart", async ()=>{

    render(<Products product={product} loadCartData={loadCartData} />)

    const user = userEvent.setup()
    const addToCartButton = screen.getByTestId("add-to-cart-button")
    await user.click(addToCartButton)


    expect(axios.post).toHaveBeenCalledWith(
      "/api/cart-items", {
        productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
        quantity: 1
      }
    )

    expect(loadCartData).toHaveBeenCalled();
  })
})