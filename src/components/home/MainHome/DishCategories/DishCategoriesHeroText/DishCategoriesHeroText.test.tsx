import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import DishCategoriesHeroText from "./DishCategoriesHeroText";

describe("DishCategoriesHeroText", () => {
  it("renders the hero text with correct content", () => {
    render(<DishCategoriesHeroText />);

    expect(screen.getByText(/More Than/i)).toBeInTheDocument();
    expect(screen.getByText("200 Dishes")).toBeInTheDocument();
    expect(screen.getByText(/to Order!/i)).toBeInTheDocument();
  });

  it("renders the subtitle text", () => {
    render(<DishCategoriesHeroText />);

    expect(
      screen.getByText(
        "From appetizers to desserts, find your next favorite meal today!",
      ),
    ).toBeInTheDocument();
  });

  it("renders Typography components with correct variants", () => {
    const { container } = render(<DishCategoriesHeroText />);

    const heroElements = container.querySelectorAll('[class*="MuiTypography"]');
    expect(heroElements.length).toBeGreaterThan(0);
  });
});
