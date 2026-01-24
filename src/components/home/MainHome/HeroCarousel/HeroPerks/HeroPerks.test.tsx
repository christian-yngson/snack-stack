import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import HeroPerks from "./HeroPerks";

describe("HeroPerks", () => {
  it("renders all four perks", () => {
    render(<HeroPerks />);

    expect(screen.getByText("Fast Delivery")).toBeInTheDocument();
    expect(screen.getByText("Easy Ordering")).toBeInTheDocument();
    expect(screen.getByText("Premium Quality")).toBeInTheDocument();
    expect(screen.getByText("Secure Payments")).toBeInTheDocument();
  });

  it("renders the correct number of HeroPerkItem components", () => {
    const { container } = render(<HeroPerks />);
    const listItems = container.querySelectorAll("li");

    expect(listItems).toHaveLength(4);
  });

  it("renders a List component", () => {
    const { container } = render(<HeroPerks />);
    const list = container.querySelector("ul");

    expect(list).toBeInTheDocument();
  });

  it("renders perks in the correct order", () => {
    render(<HeroPerks />);

    const perks = screen.getAllByRole("listitem");

    expect(perks[0]).toHaveTextContent("Fast Delivery");
    expect(perks[1]).toHaveTextContent("Easy Ordering");
    expect(perks[2]).toHaveTextContent("Premium Quality");
    expect(perks[3]).toHaveTextContent("Secure Payments");
  });
});
