import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CarouselPreviousButton from "./CarouselPreviousButton";

describe("CarouselPreviousButton", () => {
  it("renders with correct aria-label", () => {
    const mockOnClick = vi.fn();
    render(<CarouselPreviousButton onClick={mockOnClick} />);

    const button = screen.getByRole("button", { name: /previous/i });
    expect(button).toBeInTheDocument();
  });

  it("calls onClick when clicked", async () => {
    const mockOnClick = vi.fn();
    const user = userEvent.setup();
    render(<CarouselPreviousButton onClick={mockOnClick} />);

    const button = screen.getByRole("button", { name: /previous/i });
    await user.click(button);

    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  it("renders ArrowBackIosIcon", () => {
    const mockOnClick = vi.fn();
    const { container } = render(
      <CarouselPreviousButton onClick={mockOnClick} />,
    );

    const icon = container.querySelector("svg");
    expect(icon).toBeInTheDocument();
  });
});
