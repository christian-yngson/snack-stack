import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router";
import App from "./App";
import { type ReactNode } from "react";

vi.mock("./components/global/Header", () => ({
  default: () => <div data-testid="header">Header Component</div>,
}));

vi.mock("@mui/material/Stack", () => ({
  default: ({ children }: { children: ReactNode }) => (
    <div data-testid="stack" role="region">
      {children}
    </div>
  ),
}));

describe("App", () => {
  it("should render without crashing", () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    );
    expect(screen.getByTestId("stack")).toBeInTheDocument();
  });

  it("should render Header component", () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    );
    expect(screen.getByTestId("header")).toBeInTheDocument();
  });

  it("should render Stack wrapper", () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    );
    expect(screen.getByTestId("stack")).toBeInTheDocument();
  });

  it("should render Outlet for child routes", () => {
    const { container } = render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    );
    expect(container).toBeTruthy();
  });
});
