import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router";
import HeaderNavigation from "./HeaderNavigation";
import { type ReactNode } from "react";

vi.mock("./HeaderLink", () => ({
  default: ({ to, children }: { to: string; children: ReactNode }) => (
    <a href={to} data-testid={`header-link-${children}`}>
      {children}
    </a>
  ),
}));

vi.mock("./ShoppingCartButton", () => ({
  default: () => <div data-testid="shopping-cart-button">Shopping Cart</div>,
}));

vi.mock("@mui/icons-material/HeadsetMicOutlined", () => ({
  default: () => <div data-testid="headset-icon">Headset Icon</div>,
}));

vi.mock("@/router/Routes", () => ({
  default: {
    order: "/order",
    faq: "/faq",
    contact: "/contact",
  },
}));

describe("HeaderNavigation", () => {
  it("should render navigation without crashing", () => {
    render(
      <BrowserRouter>
        <HeaderNavigation />
      </BrowserRouter>,
    );
    expect(screen.getByLabelText("main navigation")).toBeInTheDocument();
  });

  it("should render all navigation links", () => {
    render(
      <BrowserRouter>
        <HeaderNavigation />
      </BrowserRouter>,
    );
    expect(screen.getByTestId("header-link-Home")).toBeInTheDocument();
    expect(screen.getByTestId("header-link-Order")).toBeInTheDocument();
    expect(screen.getByTestId("header-link-Faq")).toBeInTheDocument();
    expect(screen.getByTestId("header-link-Contact")).toBeInTheDocument();
  });

  it("should render shopping cart button", () => {
    render(
      <BrowserRouter>
        <HeaderNavigation />
      </BrowserRouter>,
    );
    expect(screen.getByTestId("shopping-cart-button")).toBeInTheDocument();
  });

  it("should render customer support button", () => {
    render(
      <BrowserRouter>
        <HeaderNavigation />
      </BrowserRouter>,
    );
    expect(screen.getByLabelText("customer support")).toBeInTheDocument();
  });

  it("should render headset icon", () => {
    render(
      <BrowserRouter>
        <HeaderNavigation />
      </BrowserRouter>,
    );
    expect(screen.getByTestId("headset-icon")).toBeInTheDocument();
  });

  it("should have correct navigation routes", () => {
    render(
      <BrowserRouter>
        <HeaderNavigation />
      </BrowserRouter>,
    );
    const homeLink = screen.getByTestId("header-link-Home");
    expect(homeLink).toHaveAttribute("href", "/");
  });
});
