import { describe, it, expect, vi } from "vitest";
import { useSelector } from "react-redux";
import useIsProductInCart from "./useIsProductInCart";

vi.mock("react-redux");

describe("useIsProductInCart", () => {
  it("should return a function that checks if a product is in cart", () => {
    vi.mocked(useSelector).mockReturnValue([]);
    const checkProduct = useIsProductInCart();
    expect(typeof checkProduct).toBe("function");
  });

  it("should return true when product exists in cart by string id", () => {
    vi.mocked(useSelector).mockReturnValue([
      { id: "1", name: "Product 1" },
      { id: "2", name: "Product 2" },
    ]);
    const checkProduct = useIsProductInCart();
    expect(checkProduct("1")).toBe(true);
  });

  it("should return true when product exists in cart by number id", () => {
    vi.mocked(useSelector).mockReturnValue([
      { id: 1, name: "Product 1" },
      { id: 2, name: "Product 2" },
    ]);
    const checkProduct = useIsProductInCart();
    expect(checkProduct(1)).toBe(true);
  });

  it("should return false when product does not exist in cart", () => {
    vi.mocked(useSelector).mockReturnValue([{ id: "1", name: "Product 1" }]);
    const checkProduct = useIsProductInCart();
    expect(checkProduct("999")).toBe(false);
  });

  it("should return false when cart is empty", () => {
    vi.mocked(useSelector).mockReturnValue([]);
    const checkProduct = useIsProductInCart();
    expect(checkProduct("1")).toBe(false);
  });
});
