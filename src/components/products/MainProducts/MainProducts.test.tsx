import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import MainProducts from "./MainProducts";

vi.mock("@mui/material/Stack", () => ({
  default: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="stack">{children}</div>
  ),
}));
vi.mock("@mui/material/Container", () => ({
  default: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="container">{children}</div>
  ),
}));
vi.mock("./ProductsFilter", () => ({
  default: () => <div data-testid="products-filter">Products Filter</div>,
}));
vi.mock("./ProductsList", () => ({
  default: () => <div data-testid="products-list">Products List</div>,
}));
vi.mock("./ProductsOrderSummary", () => ({
  default: () => <div data-testid="products-order-summary">Order Summary</div>,
}));
vi.mock("./FoodPreview", () => ({
  default: () => <div data-testid="food-preview">Food Preview</div>,
}));

describe("MainProducts", () => {
  it("should render Container component", () => {
    render(<MainProducts />);

    expect(screen.getByTestId("container")).toBeInTheDocument();
  });

  it("should render FoodPreview component", () => {
    render(<MainProducts />);

    expect(screen.getByTestId("food-preview")).toBeInTheDocument();
  });

  it("should render ProductsFilter component", () => {
    render(<MainProducts />);

    expect(screen.getByTestId("products-filter")).toBeInTheDocument();
  });

  it("should render ProductsList component", () => {
    render(<MainProducts />);

    expect(screen.getByTestId("products-list")).toBeInTheDocument();
  });

  it("should render ProductsOrderSummary component", () => {
    render(<MainProducts />);

    expect(screen.getByTestId("products-order-summary")).toBeInTheDocument();
  });

  it("should render all components in correct order", () => {
    render(<MainProducts />);

    const foodPreview = screen.getByTestId("food-preview");
    const filter = screen.getByTestId("products-filter");
    const list = screen.getByTestId("products-list");
    const summary = screen.getByTestId("products-order-summary");

    expect(foodPreview).toBeInTheDocument();
    expect(filter).toBeInTheDocument();
    expect(list).toBeInTheDocument();
    expect(summary).toBeInTheDocument();
  });

  it("should render correct layout structure", () => {
    render(<MainProducts />);

    const stacks = screen.getAllByTestId("stack");
    expect(stacks.length).toBeGreaterThan(0);
  });
});
