import { describe, it, expect, vi, beforeEach } from "vitest";
import { useDispatch } from "react-redux";
import { addToCart, type Order } from "@/redux/features/cart/cartSlice";
import useAddToCart from "./useAddToCart";
import { type Dispatch } from "@reduxjs/toolkit";

vi.mock("react-redux");
vi.mock("@/redux/features/cart/cartSlice");

const payload = {
  id: "1",
  image: "image-url",
  description: "Product Description",
  name: "Product Name",
  price: 100,
  quantity: 1,
};
const mockAction = { type: "cart/addToCart", payload } as const;

describe("useAddToCart", () => {
  let mockDispatch: Dispatch;

  beforeEach(() => {
    vi.clearAllMocks();
    mockDispatch = vi.fn();
    vi.mocked(useDispatch).mockReturnValue(mockDispatch);
  });

  it("should return a callable function", () => {
    const result = useAddToCart();
    expect(typeof result).toBe("function");
  });

  it("should call useDispatch hook", () => {
    useAddToCart();
    expect(vi.mocked(useDispatch)).toHaveBeenCalled();
  });

  it("should dispatch addToCart action with order params", () => {
    vi.mocked(addToCart).mockReturnValue(mockAction);

    const addToCartFn = useAddToCart();
    const order: Order = { id: "1", quantity: 2 } as Order;

    addToCartFn(order);

    expect(vi.mocked(addToCart)).toHaveBeenCalledWith(order);
    expect(mockDispatch).toHaveBeenCalledWith(mockAction);
  });

  it("should dispatch multiple times when called multiple times", () => {
    vi.mocked(addToCart).mockReturnValue(mockAction);

    const addToCartFn = useAddToCart();
    const order1: Order = { id: "1", quantity: 1 } as Order;
    const order2: Order = { id: "2", quantity: 3 } as Order;

    addToCartFn(order1);
    addToCartFn(order2);

    expect(mockDispatch).toHaveBeenCalledTimes(2);
    expect(vi.mocked(addToCart)).toHaveBeenCalledTimes(2);
  });

  it("should handle different order parameters correctly", () => {
    vi.mocked(addToCart).mockReturnValue(mockAction);

    const addToCartFn = useAddToCart();
    const order: Order = { id: "abc-123", quantity: 10 } as Order;

    addToCartFn(order);

    expect(vi.mocked(addToCart)).toHaveBeenCalledWith(order);
    expect(mockDispatch).toHaveBeenCalledWith(mockAction);
  });
});
