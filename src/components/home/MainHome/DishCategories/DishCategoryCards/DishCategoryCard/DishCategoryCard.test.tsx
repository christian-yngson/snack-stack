import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import DishCategoryCard from "./DishCategoryCard";

describe("DishCategoryCard", () => {
  const mockProps = {
    name: "Pizza",
    description: "Delicious Italian pizza with various toppings",
    image: "/images/pizza.jpg",
  };

  it("renders the card with name, description, and image", () => {
    render(<DishCategoryCard {...mockProps} />);

    expect(screen.getByText("Pizza")).toBeInTheDocument();
    expect(
      screen.getByText("Delicious Italian pizza with various toppings"),
    ).toBeInTheDocument();
    expect(screen.getByAltText("Pizza")).toBeInTheDocument();
  });

  it("renders the image with correct src and alt attributes", () => {
    render(<DishCategoryCard {...mockProps} />);

    const image = screen.getByAltText("Pizza") as HTMLImageElement;
    expect(image).toHaveAttribute("src", "/images/pizza.jpg");
    expect(image).toHaveAttribute("alt", "Pizza");
  });

  it("renders with different props", () => {
    const customProps = {
      name: "Burger",
      description: "Juicy beef burger",
      image: "/images/burger.jpg",
    };

    render(<DishCategoryCard {...customProps} />);

    expect(screen.getByText("Burger")).toBeInTheDocument();
    expect(screen.getByText("Juicy beef burger")).toBeInTheDocument();
    expect(screen.getByAltText("Burger")).toBeInTheDocument();
  });
});
