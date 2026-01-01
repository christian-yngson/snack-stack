import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import HeaderNavigation from "./HeaderNavigation";

vi.mock("./NavigationTextButton", () => ({
  default: ({ children }: { children: string }) => <button>{children}</button>,
}));

describe("HeaderNavigation", () => {
  it("renders navigation with all nav items", () => {
    render(<HeaderNavigation />);
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Order")).toBeInTheDocument();
    expect(screen.getByText("Faq")).toBeInTheDocument();
    expect(screen.getByText("Contact")).toBeInTheDocument();
  });

  it("renders nav element with correct aria-label", () => {
    render(<HeaderNavigation />);
    expect(screen.getByLabelText("main navigation")).toBeInTheDocument();
  });

  it("renders customer support button with correct aria-label", () => {
    render(<HeaderNavigation />);
    expect(screen.getByLabelText("customer support")).toBeInTheDocument();
  });

  it("renders shopping cart button with correct aria-label", () => {
    render(<HeaderNavigation />);
    expect(screen.getByLabelText("shopping cart")).toBeInTheDocument();
  });

  it("renders correct number of navigation text buttons", () => {
    render(<HeaderNavigation />);
    const buttons = screen.getAllByRole("button");
    expect(buttons).toHaveLength(6); // 4 nav buttons + 2 icon buttons
  });
});
