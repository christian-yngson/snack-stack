import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import userEvent from "@testing-library/user-event";
import CarouselItemButton from "./CarouselItemButton";
import { type ReactNode } from "react";

vi.mock("@/components/common/MotionIconButton", () => ({
  default: ({
    children,
    "aria-label": ariaLabel,
    onClick,
    sx,
  }: {
    children: ReactNode;
    "aria-label"?: string;
    onClick?: () => void;
    sx?: Record<string, unknown>;
  }) => (
    <button
      aria-label={ariaLabel}
      onClick={onClick}
      data-sx={JSON.stringify(sx)}
    >
      {children}
    </button>
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

  it("merges custom sx prop with default display styles", () => {
    const customSx = { color: "primary.main", backgroundColor: "red" };

    render(
      <CarouselItemButton aria-label="styled button" sx={customSx}>
        <span>Styled</span>
      </CarouselItemButton>,
    );

    const button = screen.getByLabelText("styled button");
    const sxData = JSON.parse(button.getAttribute("data-sx") || "{}");

    expect(sxData.color).toBe("primary.main");
    expect(sxData.backgroundColor).toBe("red");
    expect(sxData.display).toEqual({ xs: "none", md: "flex" });
  });

  it("applies responsive display styles by default", () => {
    render(
      <CarouselItemButton aria-label="responsive button">
        <span>Responsive</span>
      </CarouselItemButton>,
    );

    const button = screen.getByLabelText("responsive button");
    const sxData = JSON.parse(button.getAttribute("data-sx") || "{}");

    expect(sxData.display).toEqual({ xs: "none", md: "flex" });
  });
});
