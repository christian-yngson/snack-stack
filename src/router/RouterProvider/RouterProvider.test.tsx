import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import RouterProvider from "./RouterProvider";

vi.mock("@/App", () => ({
  default: () => <div data-testid="app">App Component</div>,
}));

vi.mock("@/components/products/MainProducts", () => ({
  default: () => <div data-testid="main-products">MainProducts Component</div>,
}));

vi.mock("@/components/home/MainHome", () => ({
  default: () => <div data-testid="main-home">MainHome Component</div>,
}));

vi.mock("@/router/Routes", () => ({
  default: { order: "/order" },
}));

describe("RouterProvider", () => {
  it("should render without crashing", () => {
    render(<RouterProvider />);
    expect(screen.getByTestId("app")).toBeInTheDocument();
  });

  it("should render App component", () => {
    render(<RouterProvider />);
    expect(screen.getByTestId("app")).toBeInTheDocument();
  });
});
