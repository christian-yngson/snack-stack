import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import HeroOrderButton from "./HeroOrderButton";
import Routes from "@/router/Routes";
import useNavigateToRoute from "@/lib/hooks/useNavigateToRoute";

vi.mock("@/lib/hooks/useNavigateToRoute");

const mockNav = vi.fn();

describe("HeroOrderButton", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    vi.mocked(useNavigateToRoute).mockReturnValue(mockNav);
  });

  it("renders the Order button", () => {
    render(<HeroOrderButton />);
    expect(screen.getByRole("button", { name: /order/i })).toBeInTheDocument();
  });

  it("navigates to order route when clicked", async () => {
    const user = userEvent.setup();
    render(<HeroOrderButton />);

    const button = screen.getByRole("button", { name: /order/i });
    await user.click(button);

    expect(mockNav).toHaveBeenCalledWith(Routes.order);
    expect(mockNav).toHaveBeenCalledTimes(1);
  });

  it("renders with correct button variant and size", () => {
    render(<HeroOrderButton />);
    const button = screen.getByRole("button", { name: /order/i });

    expect(button).toHaveClass("MuiButton-contained");
    expect(button).toHaveClass("MuiButton-sizeLarge");
  });
});
