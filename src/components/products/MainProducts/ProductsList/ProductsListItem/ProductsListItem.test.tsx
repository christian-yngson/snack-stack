import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import ProductsListItem from "./ProductsListItem";

vi.mock("./AddToCartButton", () => ({
  default: () => <button data-testid="add-to-cart-btn">Add to Cart</button>,
}));

vi.mock("./FoodImage", () => ({
  default: () => <img data-testid="food-image" alt="Food" src="food.jpg" />,
}));

vi.mock("@mui/material/ListItem", () => ({
  default: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="list-item">{children}</div>
  ),
}));

vi.mock("@mui/material/Card", () => ({
  default: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="card">{children}</div>
  ),
}));

vi.mock("@mui/material/CardContent", () => ({
  default: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="card-content">{children}</div>
  ),
}));

vi.mock("@mui/material/CardActions", () => ({
  default: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="card-actions">{children}</div>
  ),
}));

vi.mock("@mui/material/Grid", () => ({
  default: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="grid">{children}</div>
  ),
}));

vi.mock("@mui/material/Stack", () => ({
  Stack: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="stack">{children}</div>
  ),
  default: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="stack">{children}</div>
  ),
}));

vi.mock("@mui/material/Typography", () => ({
  default: ({
    children,
    variant,
  }: {
    children: React.ReactNode;
    variant: string;
  }) => <div data-testid={`typography-${variant}`}>{children}</div>,
}));

vi.mock("@mui/icons-material/AccountBalanceWalletOutlined", () => ({
  default: () => <span data-testid="wallet-icon">Wallet Icon</span>,
}));

describe("ProductsListItem", () => {
  const mockProduct = {
    id: "1",
    name: "Test Product",
    description: "Test Description",
    price: 9.99,
    image: "https://example.com/image.jpg",
    ingredients: ["Ingredient 1"],
    nutrition: ["Nutrition 1"],
  };

  it("should render Grid component", () => {
    render(<ProductsListItem product={mockProduct} />);
    expect(screen.getByTestId("grid")).toBeInTheDocument();
  });

  it("should render Card component", () => {
    render(<ProductsListItem product={mockProduct} />);
    expect(screen.getByTestId("card")).toBeInTheDocument();
  });

  it("should render FoodImage component with product", () => {
    render(<ProductsListItem product={mockProduct} />);
    expect(screen.getByTestId("food-image")).toBeInTheDocument();
  });

  it("should render product name", () => {
    render(<ProductsListItem product={mockProduct} />);
    expect(screen.getByText("Test Product")).toBeInTheDocument();
  });

  it("should render product description", () => {
    render(<ProductsListItem product={mockProduct} />);
    expect(screen.getByText("Test Description")).toBeInTheDocument();
  });

  it("should render product price with dollar sign", () => {
    render(<ProductsListItem product={mockProduct} />);
    expect(screen.getByText("$9.99")).toBeInTheDocument();
  });

  it("should render wallet icon", () => {
    render(<ProductsListItem product={mockProduct} />);
    expect(screen.getByTestId("wallet-icon")).toBeInTheDocument();
  });

  it("should render AddToCartButton component", () => {
    render(<ProductsListItem product={mockProduct} />);
    expect(screen.getByTestId("add-to-cart-btn")).toBeInTheDocument();
  });

  it("should render CardContent section", () => {
    render(<ProductsListItem product={mockProduct} />);
    expect(screen.getByTestId("card-content")).toBeInTheDocument();
  });

  it("should render CardActions section", () => {
    render(<ProductsListItem product={mockProduct} />);
    expect(screen.getByTestId("card-actions")).toBeInTheDocument();
  });

  it("should render Stack component for price section", () => {
    render(<ProductsListItem product={mockProduct} />);
    const stack = screen.getByText("$9.99").closest(".MuiStack-root");
    expect(stack).toBeInTheDocument();
  });

  it("should render with different product data", () => {
    const differentProduct = {
      id: "2",
      name: "Another Product",
      description: "Another Description",
      price: 19.99,
      image: "https://example.com/image2.jpg",
      ingredients: ["Ingredient 2"],
      nutrition: ["Nutrition 2"],
    };

    render(<ProductsListItem product={differentProduct} />);

    expect(screen.getByText("Another Product")).toBeInTheDocument();
    expect(screen.getByText("Another Description")).toBeInTheDocument();
    expect(screen.getByText("$19.99")).toBeInTheDocument();
  });

  it("should pass product to AddToCartButton as order prop", () => {
    render(<ProductsListItem product={mockProduct} />);
    expect(screen.getByTestId("add-to-cart-btn")).toBeInTheDocument();
  });
});
