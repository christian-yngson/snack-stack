import { describe, it, expect, vi } from "vitest";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import CartDetails from "./CartDetails";
import EmptyCart from "../EmptyCart";
import CartItemsList from "./CarItemsList";

vi.mock("../EmptyCart");
vi.mock("./CarItemsList");

describe("CartDetails", () => {
  it("should render EmptyCart when cart is empty", () => {
    const store = configureStore({
      reducer: {
        cart: () => ({ value: [] }),
      },
    });

    render(
      <Provider store={store}>
        <CartDetails />
      </Provider>
    );

    expect(EmptyCart).toHaveBeenCalled();
  });

  it("should render CartItemsList when cart has items", () => {
    const store = configureStore({
      reducer: {
        cart: () => ({ value: [{ id: 1, name: "Item 1" }] }),
      },
    });

    render(
      <Provider store={store}>
        <CartDetails />
      </Provider>
    );

    expect(CartItemsList).toHaveBeenCalled();
  });
});
