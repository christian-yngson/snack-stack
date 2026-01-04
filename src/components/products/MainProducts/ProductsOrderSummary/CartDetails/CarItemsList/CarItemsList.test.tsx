import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import CartItemsList from "./CarItemsList";

vi.mock("react-redux", () => ({
  useSelector: vi.fn(),
}));

vi.mock("./CartItem", () => ({
  default: ({
    order,
  }: {
    order: { id: number; name: string; price: number };
  }) => (
    <div data-testid="cart-item">
      {order.name} - ${order.price}
    </div>
  ),
}));

import { useSelector } from "react-redux";

describe("CartItemsList", () => {
  it("should render CartItem for each cart item", () => {
    const mockCartItems = [
      { id: 1, name: "Pizza", price: 12.99 },
      { id: 2, name: "Burger", price: 8.99 },
    ];

    vi.mocked(useSelector).mockReturnValue(mockCartItems);

    render(<CartItemsList />);

    const items = screen.getAllByTestId("cart-item");
    expect(items).toHaveLength(2);
    expect(screen.getByText("Pizza - $12.99")).toBeInTheDocument();
    expect(screen.getByText("Burger - $8.99")).toBeInTheDocument();
  });

  it("should render empty list when cart is empty", () => {
    vi.mocked(useSelector).mockReturnValue([]);

    render(<CartItemsList />);

    const items = screen.queryAllByTestId("cart-item");
    expect(items).toHaveLength(0);
  });

  it("should pass correct order props to CartItem", () => {
    const mockCartItems = [{ id: 1, name: "Salad", price: 7.99 }];

    vi.mocked(useSelector).mockReturnValue(mockCartItems);

    render(<CartItemsList />);

    expect(screen.getByText("Salad - $7.99")).toBeInTheDocument();
  });

  it("should render multiple CartItems with correct data", () => {
    const mockCartItems = [
      { id: 1, name: "Item 1", price: 5.99 },
      { id: 2, name: "Item 2", price: 6.99 },
      { id: 3, name: "Item 3", price: 7.99 },
    ];

    vi.mocked(useSelector).mockReturnValue(mockCartItems);

    render(<CartItemsList />);

    expect(screen.getByText("Item 1 - $5.99")).toBeInTheDocument();
    expect(screen.getByText("Item 2 - $6.99")).toBeInTheDocument();
    expect(screen.getByText("Item 3 - $7.99")).toBeInTheDocument();
  });
});
