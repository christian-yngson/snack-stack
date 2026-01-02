import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import ProductsFilter from "./ProductsFilter";

// Mock child components
vi.mock("./HeadingAndFIlterReset", () => ({
  default: () => (
    <div data-testid="heading-filter-reset">HeadingAndFilterReset</div>
  ),
}));

vi.mock("./ProductsFilterElements", () => ({
  default: () => (
    <div data-testid="products-filter-elements">ProductsFilterElements</div>
  ),
}));

describe("ProductsFilter", () => {
  it("should render the component", () => {
    const { container } = render(<ProductsFilter />);
    const card = container.querySelector(".MuiCard-root");
    expect(card).toBeInTheDocument();
  });

  it("should render HeadingAndFilterReset component", () => {
    render(<ProductsFilter />);
    expect(screen.getByTestId("heading-filter-reset")).toBeInTheDocument();
  });

  it("should render ProductsFilterElements component", () => {
    render(<ProductsFilter />);
    expect(screen.getByTestId("products-filter-elements")).toBeInTheDocument();
  });

  it("should render Card with outlined variant and minWidth style", () => {
    const { container } = render(<ProductsFilter />);
    const card = container.querySelector(".MuiCard-root");
    expect(card).toBeInTheDocument();
  });

  it("should render Stack with gap of 2", () => {
    const { container } = render(<ProductsFilter />);
    const stack = container.querySelector(".MuiStack-root");
    expect(stack).toBeInTheDocument();
  });
});
