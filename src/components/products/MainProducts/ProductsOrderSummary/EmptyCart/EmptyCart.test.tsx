import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import EmptyCart from "./EmptyCart";

describe("EmptyCart", () => {
  it("should render the empty cart message", () => {
    render(<EmptyCart />);
    expect(screen.getByText("Your cart is empty")).toBeInTheDocument();
  });

  it("should render the call-to-action text", () => {
    render(<EmptyCart />);
    expect(screen.getByText("Start adding products.")).toBeInTheDocument();
  });

  it("should render the zero price", () => {
    render(<EmptyCart />);
    expect(screen.getByText("$0.00")).toBeInTheDocument();
  });

  it("should render the empty cart icon", () => {
    render(<EmptyCart />);
    const icon = screen.getByTestId("ProductionQuantityLimitsIcon");
    expect(icon).toBeInTheDocument();
  });

  it("should have correct text variants", () => {
    render(<EmptyCart />);
    const mainText = screen.getByText("Your cart is empty");
    const caption = screen.getByText("Start adding products.");
    expect(mainText.tagName).toBe("P");
    expect(caption.tagName).toBe("SPAN");
  });
});
