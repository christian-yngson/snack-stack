import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import NavigationIconButton from "./NavigationIconButton";

describe("NavigationIconButton", () => {
  it("renders children correctly", () => {
    render(
      <NavigationIconButton ariaLabel="test">Test Content</NavigationIconButton>
    );
    expect(screen.getByText("Test Content")).toBeInTheDocument();
  });

  it("sets aria-label attribute", () => {
    render(
      <NavigationIconButton ariaLabel="menu button">Icon</NavigationIconButton>
    );
    expect(
      screen.getByRole("button", { name: "menu button" })
    ).toBeInTheDocument();
  });

  it("renders as a primary color button", () => {
    render(<NavigationIconButton ariaLabel="test">Icon</NavigationIconButton>);
    const button = screen.getByRole("button");
    expect(button).toHaveClass("MuiButton-colorPrimary");
  });

  it("renders with JSX children", () => {
    render(
      <NavigationIconButton ariaLabel="test">
        <span data-testid="icon">★</span>
      </NavigationIconButton>
    );
    expect(screen.getByTestId("icon")).toBeInTheDocument();
  });
});
