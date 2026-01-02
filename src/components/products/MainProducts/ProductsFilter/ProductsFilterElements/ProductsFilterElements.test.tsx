import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import ProductsFilterElements from "./ProductsFilterElements";

// Mock child components
vi.mock("./FoodCategorySelect", () => ({
  default: () => (
    <div data-testid="food-category-select">FoodCategorySelect</div>
  ),
}));

vi.mock("./FoodSearch", () => ({
  default: () => <div data-testid="food-search">FoodSearch</div>,
}));

describe("ProductsFilterElements", () => {
  it("should render without crashing", () => {
    render(<ProductsFilterElements />);
    expect(screen.getByTestId("food-category-select")).toBeInTheDocument();
    expect(screen.getByTestId("food-search")).toBeInTheDocument();
  });

  it("should render FoodCategorySelect component", () => {
    render(<ProductsFilterElements />);
    expect(screen.getByTestId("food-category-select")).toBeInTheDocument();
  });

  it("should render FoodSearch component", () => {
    render(<ProductsFilterElements />);
    expect(screen.getByTestId("food-search")).toBeInTheDocument();
  });

  it("should render Stack container with correct props", () => {
    const { container } = render(<ProductsFilterElements />);
    const stack = container.querySelector(".MuiStack-root");
    expect(stack).toBeInTheDocument();
  });
});
