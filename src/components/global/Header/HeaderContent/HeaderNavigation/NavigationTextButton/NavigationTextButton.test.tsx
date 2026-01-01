import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import NavigationTextButton from "./NavigationTextButton";

describe("NavigationTextButton", () => {
  it("should render children text", () => {
    render(<NavigationTextButton>Home</NavigationTextButton>);
    expect(screen.getByText("Home")).toBeInTheDocument();
  });

  it("should render with inherit color", () => {
    render(<NavigationTextButton>About</NavigationTextButton>);
    const button = screen.getByRole("button");
    expect(button).toHaveClass("MuiButton-colorInherit");
  });

  it("should apply textTransform none style", () => {
    render(<NavigationTextButton>Contact</NavigationTextButton>);
    const button = screen.getByRole("button");
    expect(button).toHaveStyle({ textTransform: "none" });
  });

  it("should render with button role", () => {
    render(<NavigationTextButton>Services</NavigationTextButton>);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("should render complex children", () => {
    render(
      <NavigationTextButton>
        <span>Complex</span>
        <span>Content</span>
      </NavigationTextButton>
    );
    expect(screen.getByText("Complex")).toBeInTheDocument();
    expect(screen.getByText("Content")).toBeInTheDocument();
  });
});
