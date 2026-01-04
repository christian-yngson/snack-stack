import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import CartItemQuantity from "./CartItemQuantity";
import cartReducer from "@/redux/features/cart/cartSlice";

const createMockStore = (initialQuantity: number) => {
  return configureStore({
    reducer: {
      cart: cartReducer,
    },
    preloadedState: {
      cart: {
        value: [
          {
            id: "prod-123",
            quantity: initialQuantity,
            name: "Test Item",
            price: 10,
            image: "",
            description: "",
          },
        ],
      },
    },
  });
};

describe("CartItemQuantity", () => {
  it("renders the correct quantity from the store", () => {
    const store = createMockStore(5);
    render(
      <Provider store={store}>
        <CartItemQuantity id="prod-123" />
      </Provider>
    );

    expect(screen.getByText("5")).toBeInTheDocument();
  });

  it("dispatches increaseQuantity when the add button is clicked", async () => {
    const store = createMockStore(5);
    const dispatchSpy = vi.spyOn(store, "dispatch");
    const user = userEvent.setup();

    render(
      <Provider store={store}>
        <CartItemQuantity id="prod-123" />
      </Provider>
    );

    const addButton = screen.getByTestId("AddIcon").closest("button");
    await user.click(addButton!);

    expect(dispatchSpy).toHaveBeenCalledWith(
      expect.objectContaining({
        type: "cart/increaseQuantity",
        payload: "prod-123",
      })
    );
  });

  it("dispatches decreaseQuantity when the remove button is clicked", async () => {
    const store = createMockStore(5);
    const dispatchSpy = vi.spyOn(store, "dispatch");
    const user = userEvent.setup();

    render(
      <Provider store={store}>
        <CartItemQuantity id="prod-123" />
      </Provider>
    );

    const removeButton = screen.getByTestId("RemoveIcon").closest("button");
    await user.click(removeButton!);

    expect(dispatchSpy).toHaveBeenCalledWith(
      expect.objectContaining({
        type: "cart/decreaseQuantity",
        payload: "prod-123",
      })
    );
  });

  it("disables the decrease button and shows tooltip when quantity is 1", () => {
    const store = createMockStore(1);
    render(
      <Provider store={store}>
        <CartItemQuantity id="prod-123" />
      </Provider>
    );

    const removeButton = screen.getByTestId("RemoveIcon").closest("button");
    expect(removeButton).toBeDisabled();

    // Check for the aria-label which MUI Tooltip applies to the child
    expect(
      screen.getByLabelText("Quantity cannot go below 1")
    ).toBeInTheDocument();
  });

  it("disables the increase button when quantity is 10", () => {
    const store = createMockStore(10);
    render(
      <Provider store={store}>
        <CartItemQuantity id="prod-123" />
      </Provider>
    );

    const addButton = screen.getByTestId("AddIcon").closest("button");
    expect(addButton).toBeDisabled();
  });
});
