import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import Header from "./Header";

vi.mock("./HeaderContent", () => ({
  default: () => <div data-testid="header-content">HeaderContent</div>,
}));

vi.mock("./SecondaryColorBar", () => ({
  default: () => <div data-testid="secondary-color-bar">SecondaryColorBar</div>,
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

  it("should render SecondaryColorBar component", () => {
    render(<Header />);
    expect(screen.getByTestId("secondary-color-bar")).toBeInTheDocument();
  });

  it("should render AppBar with correct props", () => {
    const { container } = render(<Header />);
    const appBar = container.querySelector("[class*='MuiAppBar']");
    expect(appBar).toBeInTheDocument();
  });
});
