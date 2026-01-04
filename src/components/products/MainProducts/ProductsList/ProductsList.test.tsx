import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import ProductsList from "./ProductsList";
import getFoodItems from "@/lib/functions/getFoodItems";

vi.mock("@/lib/functions/getFoodItems");
vi.mock("./ProductsListItem", () => ({
  default: ({
    product,
  }: {
    product: { id: number; name: string; price: number };
  }) => (
    <div data-testid="products-list-item">
      {product.name} - ${product.price}
    </div>
  ),
}));

describe("ProductsList", () => {
  it("should render the component with Grid and List", () => {
    vi.mocked(getFoodItems).mockReturnValue([]);

    const { container } = render(<ProductsList />);

    const grid = container.querySelector(".MuiGrid-root");
    expect(grid).toBeInTheDocument();
  });

  it("should render ProductsListItem for each food item", () => {
    const mockItems = [
      {
        id: 1,
        name: "Pizza",
        description: "Delicious pizza",
        image: "pizza.jpg",
        price: 12.99,
      },
      {
        id: 2,
        name: "Burger",
        description: "Tasty burger",
        image: "burger.jpg",
        price: 8.99,
      },
    ];

    vi.mocked(getFoodItems).mockReturnValue(mockItems);

    render(<ProductsList />);

    const items = screen.getAllByTestId("products-list-item");
    expect(items).toHaveLength(2);
    expect(screen.getByText("Pizza - $12.99")).toBeInTheDocument();
    expect(screen.getByText("Burger - $8.99")).toBeInTheDocument();
  });

  it("should pass correct props to ProductsListItem", () => {
    const mockItems = [
      {
        id: 1,
        name: "Dessert",
        description: "Sweet dessert",
        image: "dessert.jpg",
        price: 5.99,
      },
    ];

    vi.mocked(getFoodItems).mockReturnValue(mockItems);

    render(<ProductsList />);

    expect(screen.getByText("Dessert - $5.99")).toBeInTheDocument();
  });

  it("should render empty list when no food items exist", () => {
    vi.mocked(getFoodItems).mockReturnValue([]);

    render(<ProductsList />);

    const items = screen.queryAllByTestId("products-list-item");
    expect(items).toHaveLength(0);
  });
});
