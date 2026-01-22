import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import Header from "./Header";

vi.mock("./HeaderContent", () => ({
  default: () => <div data-testid="header-content">HeaderContent</div>,
}));

vi.mock("./HeaderContent/HeaderContentContainer", () => ({
  default: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="header-content-container">{children}</div>
  ),
}));

describe("Header", () => {
  it("should render without crashing", () => {
    render(<Header />);
    expect(screen.getByTestId("header-content-container")).toBeInTheDocument();
  });

  it("should render HeaderContent component", () => {
    render(<Header />);
    expect(screen.getByTestId("header-content")).toBeInTheDocument();
  });

  it("should render AppBar with correct props", () => {
    const { container } = render(<Header />);
    const appBar = container.querySelector("[class*='MuiAppBar']");
    expect(appBar).toBeInTheDocument();
  });

  it("should render Toolbar component", () => {
    const { container } = render(<Header />);
    const toolbar = container.querySelector("[class*='MuiToolbar']");
    expect(toolbar).toBeInTheDocument();
  });
});
