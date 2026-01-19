import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import FoodPreviewContent from "./FoodPreviewContent";
import usePreviewedFood from "@/redux/features/foodPreview/selectors/usePreviewedFood";

vi.mock("@/redux/features/foodPreview/selectors/usePreviewedFood");
vi.mock("@mui/material/DialogContent", () => ({
  default: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="dialog-content">{children}</div>
  ),
}));
vi.mock("@mui/material/CardMedia", () => ({
  default: ({ alt, image }: { alt: string; image: string }) => (
    <img data-testid="card-media" alt={alt} src={image} />
  ),
}));
vi.mock("@mui/material/Stack", () => ({
  default: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="stack">{children}</div>
  ),
}));
vi.mock("@mui/material/Typography", () => ({
  default: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="typography">{children}</div>
  ),
}));
vi.mock("@mui/material/Chip", () => ({
  default: ({ label }: { label: string }) => (
    <div data-testid="chip">{label}</div>
  ),
}));

describe("FoodPreviewContent", () => {
  it("should render DialogContent wrapper", () => {
    vi.mocked(usePreviewedFood).mockReturnValue({
      id: "1",
      name: "Pizza",
      description: "Classic Italian pizza",
      price: 12.99,
      image: "pizza.jpg",
      ingredients: [],
      nutrition: [],
    });

    render(<FoodPreviewContent />);

    expect(screen.getByTestId("dialog-content")).toBeInTheDocument();
  });

  it("should render food image with correct alt text", () => {
    vi.mocked(usePreviewedFood).mockReturnValue({
      id: "2",
      name: "Burger",
      description: "Juicy beef burger",
      price: 9.99,
      image: "burger.jpg",
      ingredients: [],
      nutrition: [],
    });

    render(<FoodPreviewContent />);

    const image = screen.getByTestId("card-media");
    expect(image).toHaveAttribute("alt", "Burger");
    expect(image).toHaveAttribute("src", "burger.jpg");
  });

  it("should render ingredients section with chips", () => {
    vi.mocked(usePreviewedFood).mockReturnValue({
      id: "3",
      name: "Pizza",
      description: "Classic Italian pizza",
      price: 12.99,
      image: "pizza.jpg",
      ingredients: ["Cheese", "Tomato", "Dough"],
      nutrition: [],
    });

    render(<FoodPreviewContent />);

    expect(screen.getByText("Ingredients")).toBeInTheDocument();
    expect(screen.getByText("Cheese")).toBeInTheDocument();
    expect(screen.getByText("Tomato")).toBeInTheDocument();
    expect(screen.getByText("Dough")).toBeInTheDocument();
  });

  it("should render nutrition section with chips", () => {
    vi.mocked(usePreviewedFood).mockReturnValue({
      id: "4",
      name: "Salad",
      description: "Fresh green salad",
      price: 7.99,
      image: "salad.jpg",
      ingredients: [],
      nutrition: ["Protein: 10g", "Carbs: 20g", "Fat: 5g"],
    });

    render(<FoodPreviewContent />);

    expect(screen.getByText("Nutrition")).toBeInTheDocument();
    expect(screen.getByText("Protein: 10g")).toBeInTheDocument();
    expect(screen.getByText("Carbs: 20g")).toBeInTheDocument();
    expect(screen.getByText("Fat: 5g")).toBeInTheDocument();
  });

  it("should render with empty ingredients and nutrition", () => {
    vi.mocked(usePreviewedFood).mockReturnValue({
      id: "5",
      name: "Empty Dish",
      description: "A mysterious empty dish",
      price: 0.99,
      image: "empty.jpg",
      ingredients: [],
      nutrition: [],
    });

    render(<FoodPreviewContent />);

    expect(screen.getByText("Ingredients")).toBeInTheDocument();
    expect(screen.getByText("Nutrition")).toBeInTheDocument();
    const chips = screen.queryAllByTestId("chip");
    expect(chips).toHaveLength(0);
  });

  it("should render multiple ingredients and nutrition items", () => {
    vi.mocked(usePreviewedFood).mockReturnValue({
      id: "6",
      name: "Complex Dish",
      description: "An intricate multi-layered dish",
      price: 18.99,
      image: "complex.jpg",
      ingredients: ["Flour", "Sugar", "Eggs", "Butter"],
      nutrition: ["Calories: 350", "Protein: 8g", "Fiber: 2g"],
    });

    render(<FoodPreviewContent />);

    const chips = screen.getAllByTestId("chip");
    expect(chips).toHaveLength(7);
  });
});
