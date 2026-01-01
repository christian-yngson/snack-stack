import { describe, it, expect, vi } from "vitest";
import { render } from "@testing-library/react";
import HeaderContent from "./HeaderContent";

vi.mock("../../Logo", () => ({
  default: () => <div data-testid="logo">Logo</div>,
}));

vi.mock("./HeaderNavigation", () => ({
  default: () => <div data-testid="header-navigation">HeaderNavigation</div>,
}));

describe("HeaderContent", () => {
  it("should render Logo component", () => {
    const { getByTestId } = render(<HeaderContent />);
    expect(getByTestId("logo")).toBeInTheDocument();
  });

  it("should render HeaderNavigation component", () => {
    const { getByTestId } = render(<HeaderContent />);
    expect(getByTestId("header-navigation")).toBeInTheDocument();
  });

  it("should render both Logo and HeaderNavigation", () => {
    const { getByTestId } = render(<HeaderContent />);
    expect(getByTestId("logo")).toBeInTheDocument();
    expect(getByTestId("header-navigation")).toBeInTheDocument();
  });
});
