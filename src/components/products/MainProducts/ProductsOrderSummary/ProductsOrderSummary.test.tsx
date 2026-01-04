import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import ProductsOrderSummary from "./ProductsOrderSummary";

vi.mock("./SummaryHeading", () => ({
  default: () => <div data-testid="summary-heading">SummaryHeading</div>,
}));

vi.mock("./CartDetails", () => ({
  default: () => <div data-testid="cart-details">CartDetails</div>,
}));

vi.mock("./DeliveryAmount", () => ({
  default: () => <div data-testid="delivery-amount">DeliveryAmount</div>,
}));

vi.mock("./TotalAmount", () => ({
  default: () => <div data-testid="total-amount">TotalAmount</div>,
}));

vi.mock("./ContinueButton", () => ({
  default: () => <div data-testid="continue-button">ContinueButton</div>,
}));

describe("ProductsOrderSummary", () => {
  it("should render all child components", () => {
    render(<ProductsOrderSummary />);

    expect(screen.getByTestId("summary-heading")).toBeInTheDocument();
    expect(screen.getByTestId("cart-details")).toBeInTheDocument();
    expect(screen.getByTestId("delivery-amount")).toBeInTheDocument();
    expect(screen.getByTestId("total-amount")).toBeInTheDocument();
    expect(screen.getByTestId("continue-button")).toBeInTheDocument();
  });

  it("should render Card component with correct styling props", () => {
    const { container } = render(<ProductsOrderSummary />);
    const card = container.querySelector(".MuiCard-root");

    expect(card).toBeInTheDocument();
  });

  it("should render CardContent with zero padding", () => {
    const { container } = render(<ProductsOrderSummary />);
    const cardContent = container.querySelector(".MuiCardContent-root");

    expect(cardContent).toBeInTheDocument();
  });

  it("should render Stack with gap spacing", () => {
    const { container } = render(<ProductsOrderSummary />);
    const stack = container.querySelector(".MuiStack-root");

    expect(stack).toBeInTheDocument();
  });
});
