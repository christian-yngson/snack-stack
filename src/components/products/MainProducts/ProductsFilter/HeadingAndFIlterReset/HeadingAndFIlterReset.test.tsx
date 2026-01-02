import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import HeadingAndFilterReset from "./HeadingAndFIlterReset";

describe("HeadingAndFilterReset", () => {
  it("renders the Filters heading", () => {
    render(<HeadingAndFilterReset />);
    expect(screen.getByText("Filters")).toBeInTheDocument();
  });

  it("renders the Reset filters button", () => {
    render(<HeadingAndFilterReset />);
    expect(
      screen.getByRole("button", { name: /reset filters/i })
    ).toBeInTheDocument();
  });

  it("renders heading as h6 variant", () => {
    render(<HeadingAndFilterReset />);
    const heading = screen.getByText("Filters");
    expect(heading.tagName).toBe("H6");
  });

  it("renders button with small size", () => {
    render(<HeadingAndFilterReset />);
    const button = screen.getByRole("button", { name: /reset filters/i });
    expect(button).toHaveClass("MuiButton-sizeSmall");
  });
});
