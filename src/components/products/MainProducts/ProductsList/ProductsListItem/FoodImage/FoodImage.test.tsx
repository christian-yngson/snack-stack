import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import FoodImage from "./FoodImage";
import { useDispatch } from "react-redux";
import { type Mock } from "vitest";
import type Product from "@/models/Product";

vi.mock("react-redux");
vi.mock("@mui/material/CardMedia", () => ({
  default: ({
    alt,
    image,
  }: {
    alt: string;
    image: string;
    component: string;
  }) => <img data-testid="card-media" alt={alt} src={image} />,
}));
vi.mock("@mui/material/ButtonBase", () => ({
  default: ({
    children,
    onClick,
  }: {
    children: React.ReactNode;
    onClick: () => void;
  }) => (
    <button data-testid="button-base" onClick={onClick}>
      {children}
    </button>
  ),
}));

describe("FoodImage", () => {
  let mockDispatch: Mock;
  const mockFood: Product = {
    id: "1",
    name: "Pizza",
    description: "Classic Italian pizza",
    price: 12.99,
    image: "pizza.jpg",
    ingredients: ["Cheese", "Tomato"],
    nutrition: ["Calories: 300"],
  };

  beforeEach(() => {
    mockDispatch = vi.fn();
    vi.mocked(useDispatch).mockReturnValue(mockDispatch);
  });

  it("should render null when food prop is falsy", () => {
    const { container } = render(<FoodImage food={null!} />);

    expect(container.firstChild).toBeNull();
  });

  it("should render ButtonBase component", () => {
    render(<FoodImage food={mockFood} />);

    expect(screen.getByTestId("button-base")).toBeInTheDocument();
  });

  it("should render CardMedia with correct image src and alt", () => {
    render(<FoodImage food={mockFood} />);

    const image = screen.getByTestId("card-media");
    expect(image).toHaveAttribute("src", "pizza.jpg");
    expect(image).toHaveAttribute("alt", "Pizza");
  });

  it("should dispatch previewFood action when clicked", async () => {
    render(<FoodImage food={mockFood} />);

    const user = userEvent.setup();
    const button = screen.getByTestId("button-base");
    await user.click(button);

    expect(mockDispatch).toHaveBeenCalled();
  });

  it("should dispatch previewFood with correct food object", async () => {
    render(<FoodImage food={mockFood} />);

    const user = userEvent.setup();
    const button = screen.getByTestId("button-base");
    await user.click(button);

    expect(mockDispatch).toHaveBeenCalledWith(
      expect.objectContaining({
        payload: mockFood,
      }),
    );
  });

  it("should render different food items", () => {
    const differentFood: Product = {
      id: "2",
      name: "Burger",
      description: "Juicy beef burger",
      price: 9.99,
      image: "burger.jpg",
      ingredients: ["Beef", "Lettuce"],
      nutrition: ["Calories: 450"],
    };

    render(<FoodImage food={differentFood} />);

    const image = screen.getByTestId("card-media");
    expect(image).toHaveAttribute("src", "burger.jpg");
    expect(image).toHaveAttribute("alt", "Burger");
  });

  it("should call useDispatch hook", () => {
    const useDispatchMock = vi.mocked(useDispatch);

    render(<FoodImage food={mockFood} />);

    expect(useDispatchMock).toHaveBeenCalled();
  });

  it("should not render when food is undefined", () => {
    const { container } = render(<FoodImage food={undefined!} />);

    expect(container.firstChild).toBeNull();
  });
});
