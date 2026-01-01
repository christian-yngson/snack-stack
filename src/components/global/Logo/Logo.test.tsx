import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Logo from "./Logo";

describe("Logo", () => {
  it("renders an image element", () => {
    render(<Logo />);
    const img = screen.getByRole("img");
    expect(img).toBeInTheDocument();
  });

  it("has correct alt text", () => {
    render(<Logo />);
    const img = screen.getByAltText("Snack Stack Logo");
    expect(img).toBeInTheDocument();
  });

  it("has correct height style", () => {
    render(<Logo />);
    const img = screen.getByRole("img");
    expect(img).toHaveStyle({ height: "90px" });
  });

  it("has auto width style", () => {
    render(<Logo />);
    const img = screen.getByRole("img");
    expect(img).toHaveStyle({ width: "auto" });
  });

  it("has correct src attribute", () => {
    render(<Logo />);
    const img = screen.getByRole("img") as HTMLImageElement;
    expect(img.src).toContain("snack-stack-logo.png");
  });
});
