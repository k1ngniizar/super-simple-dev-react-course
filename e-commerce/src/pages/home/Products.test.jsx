import { describe, expect, it, vi } from "vitest";
import { render, screen} from "@testing-library/react"
import Products from "./Products"


describe("Product Component", ()=>{
  it("displays the product detail correctly", ()=>{
    const product = {
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

    const loadCartData = vi.fn();

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
})