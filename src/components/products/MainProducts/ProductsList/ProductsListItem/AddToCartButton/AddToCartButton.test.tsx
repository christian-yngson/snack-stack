import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import AddToCartButton from "./AddToCartButton";
import * as useAddToCartModule from "./hooks/useAddToCart";
import * as cartSelectors from "@/redux/features/cart/selectors";

const mockProduct = {
  id: "1",
  name: "Test Product",
  price: 10,
  quantity: 1,
  description: "A product for testing",
  image: "test-image.jpg",
};

describe("AddToCartButton", () => {
  it("renders shopping cart button when product is not in cart", () => {
    vi.spyOn(useAddToCartModule, "default").mockReturnValue(vi.fn());
    vi.spyOn(cartSelectors, "useIsProductInCart").mockReturnValue(
      vi.fn(() => false)
    );

    render(<AddToCartButton order={mockProduct} />);

    expect(screen.getByLabelText("add to shopping cart")).toBeInTheDocument();
  });

  it("calls addToCart with correct payload when button is clicked", async () => {
    const mockAddToCart = vi.fn();
    vi.spyOn(useAddToCartModule, "default").mockReturnValue(mockAddToCart);
    vi.spyOn(cartSelectors, "useIsProductInCart").mockReturnValue(
      vi.fn(() => false)
    );

    render(<AddToCartButton order={mockProduct} />);

    await userEvent.click(screen.getByLabelText("add to shopping cart"));

    expect(mockAddToCart).toHaveBeenCalledWith({
      ...mockProduct,
      quantity: 1,
    });
  });

  it("renders success icon when product is already in cart", () => {
    vi.spyOn(useAddToCartModule, "default").mockReturnValue(vi.fn());
    vi.spyOn(cartSelectors, "useIsProductInCart").mockReturnValue(
      vi.fn(() => true)
    );

    render(<AddToCartButton order={mockProduct} />);

    expect(
      screen.getByLabelText("Product is already in the cart")
    ).toBeInTheDocument();
  });
});
