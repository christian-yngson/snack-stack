import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import FoodPreviewTitle from "./FoodPreviewTitle";
import usePreviewedFood from "@/redux/features/foodPreview/selectors/usePreviewedFood";
import { useDispatch } from "react-redux";
import { type Mock } from "vitest";

vi.mock("@/redux/features/foodPreview/selectors/usePreviewedFood");
vi.mock("react-redux");
vi.mock("@mui/material/DialogTitle", () => ({
  default: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="dialog-title">{children}</div>
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
vi.mock("@mui/material/IconButton", () => ({
  default: ({
    children,
    onClick,
  }: {
    children: React.ReactNode;
    onClick: () => void;
  }) => (
    <button data-testid="icon-button" onClick={onClick}>
      {children}
    </button>
  ),
}));
vi.mock("@mui/icons-material/Close", () => ({
  default: () => <div data-testid="close-icon">X</div>,
}));

describe("FoodPreviewTitle", () => {
  let mockDispatch: Mock;

  beforeEach(() => {
    mockDispatch = vi.fn();
    vi.mocked(useDispatch).mockReturnValue(mockDispatch);
  });

  it("should render DialogTitle with food name", () => {
    vi.mocked(usePreviewedFood).mockReturnValue({
      id: "1",
      name: "Pizza Margherita",
      description: "Classic Italian pizza",
      price: 12.99,
      image: "pizza.jpg",
      ingredients: ["Cheese", "Tomato"],
      nutrition: ["Calories: 300"],
    });

    render(<FoodPreviewTitle />);

    expect(screen.getByTestId("dialog-title")).toBeInTheDocument();
    expect(screen.getByText("Pizza Margherita")).toBeInTheDocument();
  });

  it("should render close button with CloseIcon", () => {
    vi.mocked(usePreviewedFood).mockReturnValue({
      id: "2",
      name: "Burger",
      description: "Juicy beef burger",
      price: 9.99,
      image: "burger.jpg",
      ingredients: ["Beef", "Lettuce"],
      nutrition: ["Calories: 450"],
    });

    render(<FoodPreviewTitle />);

    expect(screen.getByTestId("icon-button")).toBeInTheDocument();
    expect(screen.getByTestId("close-icon")).toBeInTheDocument();
  });

  it("should dispatch closePreview action on close button click", async () => {
    vi.mocked(usePreviewedFood).mockReturnValue({
      id: "3",
      name: "Salad",
      description: "Fresh green salad",
      price: 7.99,
      image: "salad.jpg",
      ingredients: ["Lettuce", "Tomato"],
      nutrition: ["Calories: 150"],
    });

    const user = userEvent.setup();
    render(<FoodPreviewTitle />);

    const closeButton = screen.getByTestId("icon-button");
    await user.click(closeButton);

    expect(mockDispatch).toHaveBeenCalled();
  });

  it("should display different food names", () => {
    vi.mocked(usePreviewedFood).mockReturnValue({
      id: "4",
      name: "Spaghetti Carbonara",
      description: "Creamy Italian pasta",
      price: 13.99,
      image: "pasta.jpg",
      ingredients: ["Pasta", "Egg", "Bacon"],
      nutrition: ["Calories: 550"],
    });

    render(<FoodPreviewTitle />);

    expect(screen.getByText("Spaghetti Carbonara")).toBeInTheDocument();
  });
});
