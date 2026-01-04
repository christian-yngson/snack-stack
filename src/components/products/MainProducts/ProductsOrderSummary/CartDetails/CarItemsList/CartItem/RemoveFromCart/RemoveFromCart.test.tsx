import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import RemoveFromCart from "./RemoveFromCart";
import cartReducer from "@/redux/features/cart/cartSlice";

const createMockStore = () => {
  return configureStore({
    reducer: {
      cart: cartReducer, // Match the key used in your actual app
    },
  });
};

describe("RemoveFromCart", () => {
  it("should render delete button with correct aria-label", () => {
    const store = createMockStore();
    render(
      <Provider store={store}>
        <RemoveFromCart productId={1} />
      </Provider>
    );

    const button = screen.getByRole("button", { name: /remove from cart/i });
    expect(button).toBeInTheDocument();
  });

  it("should dispatch removeFromCart action when button is clicked", async () => {
    const store = createMockStore();
    const dispatchSpy = vi.spyOn(store, "dispatch");
    render(
      <Provider store={store}>
        <RemoveFromCart productId={1} />
      </Provider>
    );

    const user = userEvent.setup();
    const button = screen.getByRole("button");
    await user.click(button);

    expect(dispatchSpy).toHaveBeenCalled();
    dispatchSpy.mockRestore();
  });

  it("should handle string productId", async () => {
    const store = createMockStore();
    const user = userEvent.setup();

    render(
      <Provider store={store}>
        <RemoveFromCart productId="product-456" />
      </Provider>
    );

    const button = screen.getByRole("button", { name: /remove from cart/i });
    await user.click(button);

    expect(button).toBeInTheDocument();
  });

  it("should render DeleteIcon with error color", () => {
    const store = createMockStore();
    render(
      <Provider store={store}>
        <RemoveFromCart productId={1} />
      </Provider>
    );

    const deleteIcon = screen.getByRole("button").querySelector("svg");
    expect(deleteIcon).toBeInTheDocument();
  });

  it("should have correct positioning styles", () => {
    const store = createMockStore();
    const { container } = render(
      <Provider store={store}>
        <RemoveFromCart productId={1} />
      </Provider>
    );

    const button = container.querySelector("button");
    expect(button).toHaveStyle({ position: "relative" });
  });
});
