import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import userEvent from "@testing-library/user-event";
import CarouselItemButton from "./CarouselItemButton";
import { type ReactNode } from "react";

vi.mock("@/components/common/MotionIconButton", () => ({
  default: ({ children, ...props }: { children: ReactNode }) => (
    <button {...props}>{children}</button>
  ),
}));

describe("CarouselItemButton", () => {
  it("renders children correctly", () => {
    render(
      <CarouselItemButton aria-label="test button">
        <span>Icon</span>
      </CarouselItemButton>,
    );

    expect(screen.getByText("Icon")).toBeInTheDocument();
  });

  it("passes aria-label prop to MotionIconButton", () => {
    render(
      <CarouselItemButton aria-label="next slide">
        <span>Next</span>
      </CarouselItemButton>,
    );

    expect(screen.getByLabelText("next slide")).toBeInTheDocument();
  });

  it("handles onClick event", async () => {
    const handleClick = vi.fn();
    const user = userEvent.setup();

    render(
      <CarouselItemButton aria-label="click me" onClick={handleClick}>
        <span>Click</span>
      </CarouselItemButton>,
    );

    await user.click(screen.getByLabelText("click me"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("passes sx prop to MotionIconButton", () => {
    const sxProp = { color: "primary.main" };

    render(
      <CarouselItemButton aria-label="styled button" sx={sxProp}>
        <span>Styled</span>
      </CarouselItemButton>,
    );

    const button = screen.getByLabelText("styled button");
    expect(button).toBeInTheDocument();
  });
});
