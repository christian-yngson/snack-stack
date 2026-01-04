import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import CartItem from "./CartItem";
import type { Order } from "@/redux/features/cart/cartSlice";

vi.mock("./CartItemQuantity", () => ({
  default: ({ id }: { id: string }) => (
    <div data-testid="cart-item-quantity">{id}</div>
  ),
}));

vi.mock("./RemoveFromCart", () => ({
  default: ({ productId }: { productId: string }) => (
    <div data-testid="remove-from-cart">{productId}</div>
  ),
}));

describe("CartItem", () => {
  const mockOrder: Order = {
    id: "product-1",
    name: "Test Snack",
    price: 10,
    quantity: 2,
    image: "https://example.com/image.jpg",
    description: "A tasty snack",
  };

  it("renders product name", () => {
    render(<CartItem order={mockOrder} />);
    expect(screen.getByText("Test Snack")).toBeInTheDocument();
  });

  it("renders product image with correct alt text", () => {
    render(<CartItem order={mockOrder} />);
    const avatar = screen.getByAltText("Test Snack");
    expect(avatar).toHaveAttribute("src", "https://example.com/image.jpg");
  });

  it("displays total price (price * quantity)", () => {
    render(<CartItem order={mockOrder} />);
    expect(screen.getByText("$20")).toBeInTheDocument();
  });

  it("renders CartItemQuantity component with product id", () => {
    render(<CartItem order={mockOrder} />);
    expect(screen.getByTestId("cart-item-quantity")).toHaveTextContent(
      "product-1"
    );
  });

  it("renders RemoveFromCart component with product id", () => {
    render(<CartItem order={mockOrder} />);
    expect(screen.getByTestId("remove-from-cart")).toHaveTextContent(
      "product-1"
    );
  });

  it("calculates total price correctly with different quantities", () => {
    const order = { ...mockOrder, price: 15, quantity: 3 };
    render(<CartItem order={order} />);
    expect(screen.getByText("$45")).toBeInTheDocument();
  });
});
