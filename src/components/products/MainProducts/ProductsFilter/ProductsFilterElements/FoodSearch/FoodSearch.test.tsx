import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import FoodSearch from "./FoodSearch";

describe("FoodSearch", () => {
  it("should render the component", () => {
    render(<FoodSearch />);
    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });

  it("should have the correct placeholder text", () => {
    render(<FoodSearch />);
    const input = screen.getByPlaceholderText("Search");
    expect(input).toBeInTheDocument();
  });

  it("should have the correct id attribute", () => {
    render(<FoodSearch />);
    const input = screen.getByRole("textbox");
    expect(input).toHaveAttribute("id", "search-food-items");
  });

  it("should have a visually hidden label", () => {
    render(<FoodSearch />);
    const label = screen.getByText("Search Food Items");
    expect(label).toBeInTheDocument();
  });

  it("should render with outlined variant", () => {
    render(<FoodSearch />);
    const input = screen.getByRole("textbox");
    expect(input).toHaveClass("MuiOutlinedInput-input");
  });

  it("should render search icon as end adornment", () => {
    render(<FoodSearch />);
    const searchIcon = screen.getByTestId("SearchOutlinedIcon");
    expect(searchIcon).toBeInTheDocument();
  });
});
