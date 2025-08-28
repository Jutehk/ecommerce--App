import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import ProductCard from "./ProductCard";

describe("ProductCard Component", () => {
  const mockProduct = {
    id: 1,
    name: "Test Product",
    price: 99,
    image: "test-image.jpg"
  };

  test("renders product details correctly", () => {
    render(<ProductCard product={mockProduct} />);

    expect(screen.getByText("Test Product")).toBeInTheDocument();
    expect(screen.getByText("$99")).toBeInTheDocument();
    expect(screen.getByAltText("Test Product")).toBeInTheDocument();
  });

  test("calls addToCart when Add to Cart button is clicked", () => {
    const mockAddToCart = jest.fn();
    render(<ProductCard product={mockProduct} addToCart={mockAddToCart} />);

    fireEvent.click(screen.getByText(/add to cart/i));
    expect(mockAddToCart).toHaveBeenCalledTimes(1);
    expect(mockAddToCart).toHaveBeenCalledWith(mockProduct);
  });
});
