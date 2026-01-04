import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import ProductsListItem from "./ProductsListItem";

vi.mock("./AddToCartButton", () => ({
  default: () => <button data-testid="add-to-cart-btn">Add to Cart</button>,
}));

describe("ProductsListItem", () => {
  const mockProduct = {
    id: 1,
    name: "Test Product",
    description: "Test Description",
    price: 9.99,
    image: "https://example.com/image.jpg",
  };

  it("renders product name", () => {
    render(<ProductsListItem product={mockProduct} />);
    expect(screen.getByText("Test Product")).toBeInTheDocument();
  });

  it("renders product description", () => {
    render(<ProductsListItem product={mockProduct} />);
    expect(screen.getByText("Test Description")).toBeInTheDocument();
  });

  it("renders product price", () => {
    render(<ProductsListItem product={mockProduct} />);
    expect(screen.getByText("$9.99")).toBeInTheDocument();
  });

  it("renders product image with correct alt text", () => {
    render(<ProductsListItem product={mockProduct} />);
    const image = screen.getByAltText("Test Product") as HTMLImageElement;
    expect(image).toBeInTheDocument();
    expect(image.src).toContain("https://example.com/image.jpg");
  });

  it("renders AddToCartButton component", () => {
    render(<ProductsListItem product={mockProduct} />);
    expect(screen.getByTestId("add-to-cart-btn")).toBeInTheDocument();
  });

  it("renders wallet icon", () => {
    const { container } = render(<ProductsListItem product={mockProduct} />);
    const icon = container.querySelector(
      "[data-testid='AccountBalanceWalletOutlinedIcon']"
    );
    expect(icon || container.querySelector("svg")).toBeInTheDocument();
  });
});
