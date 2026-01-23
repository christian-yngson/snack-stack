import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CarouselNextButton from "./CarouselNextButton";
import { type ReactNode } from "react";

vi.mock("../CarouselItemButton", () => ({
  default: ({
    children,
    onClick,
    "aria-label": ariaLabel,
  }: {
    children: ReactNode;
    onClick: () => void;
    "aria-label": string;
  }) => (
    <button
      onClick={onClick}
      aria-label={ariaLabel}
      data-testid="carousel-button"
    >
      {children}
    </button>
  ),
}));

vi.mock("@mui/icons-material/ArrowForwardIos", () => ({
  default: () => <span data-testid="arrow-icon">→</span>,
}));

describe("CarouselNextButton", () => {
  it("renders with correct aria-label", () => {
    const mockOnClick = vi.fn();
    render(<CarouselNextButton onClick={mockOnClick} />);

    expect(screen.getByLabelText("Next carousel item")).toBeInTheDocument();
  });

  it("renders ArrowForwardIosIcon", () => {
    const mockOnClick = vi.fn();
    render(<CarouselNextButton onClick={mockOnClick} />);

    expect(screen.getByTestId("arrow-icon")).toBeInTheDocument();
  });

  it("calls onClick when button is clicked", async () => {
    const mockOnClick = vi.fn();
    const user = userEvent.setup();
    render(<CarouselNextButton onClick={mockOnClick} />);

    const button = screen.getByTestId("carousel-button");
    await user.click(button);

    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  it("passes onClick prop to CarouselItemButton", () => {
    const mockOnClick = vi.fn();
    render(<CarouselNextButton onClick={mockOnClick} />);

    const button = screen.getByTestId("carousel-button");
    expect(button).toHaveAttribute("aria-label", "Next carousel item");
  });
});
