import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { BrowserRouter, useNavigate } from "react-router";
import ShoppingCartButton from "./ShoppingCartButton";
import Routes from "@/router/Routes";
import userEvent from "@testing-library/user-event";

vi.mock("react-router", async () => {
  const actual = await vi.importActual("react-router");
  return {
    ...actual,
    useNavigate: vi.fn(),
  };
});

describe("ShoppingCartButton", () => {
  it("should render button with shopping cart icon", () => {
    render(
      <BrowserRouter>
        <ShoppingCartButton />
      </BrowserRouter>,
    );

    const button = screen.getByRole("button", { name: /shopping cart/i });
    expect(button).toBeInTheDocument();
  });

  it("should navigate to order route when clicked", async () => {
    const mockNavigate = vi.fn();
    vi.mocked(useNavigate).mockReturnValue(mockNavigate);

    const { getByRole } = render(
      <BrowserRouter>
        <ShoppingCartButton />
      </BrowserRouter>,
    );

    const button = getByRole("button", { name: /shopping cart/i });
    await userEvent.click(button);

    expect(mockNavigate).toHaveBeenCalledWith(Routes.order);
  });

  it("should have primary color", () => {
    render(
      <BrowserRouter>
        <ShoppingCartButton />
      </BrowserRouter>,
    );

    const button = screen.getByRole("button", { name: /shopping cart/i });
    expect(button).toHaveClass("MuiButton-colorPrimary");
  });
});
