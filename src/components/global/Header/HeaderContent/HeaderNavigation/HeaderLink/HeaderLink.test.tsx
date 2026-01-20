import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router";
import userEvent from "@testing-library/user-event";
import HeaderLink from "./HeaderLink";

describe("HeaderLink", () => {
  it("should render link with children text", () => {
    render(
      <BrowserRouter>
        <HeaderLink to="/test">Test Link</HeaderLink>
      </BrowserRouter>,
    );
    expect(screen.getByText("Test Link")).toBeInTheDocument();
  });

  it("should have correct href attribute", () => {
    render(
      <BrowserRouter>
        <HeaderLink to="/products">Products</HeaderLink>
      </BrowserRouter>,
    );
    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", "/products");
  });

  it("should render as a link element", () => {
    render(
      <BrowserRouter>
        <HeaderLink to="/home">Home</HeaderLink>
      </BrowserRouter>,
    );
    expect(screen.getByRole("link")).toBeInTheDocument();
  });

  it("should accept ReactNode children", () => {
    render(
      <BrowserRouter>
        <HeaderLink to="/about">
          <span data-testid="custom-child">Custom Content</span>
        </HeaderLink>
      </BrowserRouter>,
    );
    expect(screen.getByTestId("custom-child")).toBeInTheDocument();
  });

  it("should apply active class when route is active", () => {
    render(
      <BrowserRouter>
        <HeaderLink to="/">Active Link</HeaderLink>
      </BrowserRouter>,
    );
    const link = screen.getByRole("link");
    expect(link).toHaveClass("active");
  });

  it("should have no text decoration style", () => {
    render(
      <BrowserRouter>
        <HeaderLink to="/test">Test</HeaderLink>
      </BrowserRouter>,
    );
    const link = screen.getByRole("link");
    expect(link).toHaveStyle("text-decoration: none");
  });

  it("should be keyboard accessible", async () => {
    const user = userEvent.setup();
    render(
      <BrowserRouter>
        <HeaderLink to="/test">Keyboard Test</HeaderLink>
      </BrowserRouter>,
    );
    const link = screen.getByRole("link");
    await user.tab();
    expect(link).toHaveFocus();
  });
});
