import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import CarouselItem from "./CarouselItem";

vi.mock("../CarouselDarkOverlay", () => ({
  default: () => <div data-testid="carousel-dark-overlay" />,
}));

vi.mock("../functions/getCarouselHeight", () => ({
  default: () => ({ height: "500px" }),
}));

vi.mock("./functions/getAnimation", () => ({
  default: () => "none",
}));

describe("CarouselItem", () => {
  const defaultProps = {
    active: true,
    image: "/test-image.jpg",
    altText: "Test Alt Text",
    title: "Test Title",
    subtitle: "Test Subtitle",
  };

  it("should render with all props", () => {
    render(<CarouselItem {...defaultProps} />);

    expect(screen.getByAltText("Test Alt Text")).toBeInTheDocument();
    expect(screen.getByText("Test Title")).toBeInTheDocument();
    expect(screen.getByText("Test Subtitle")).toBeInTheDocument();
  });

  it("should apply active styles when active is true", () => {
    const { container } = render(
      <CarouselItem {...defaultProps} active={true} />,
    );
    const box = container.querySelector(".carousel-item");

    expect(box).toHaveStyle({ opacity: "1", zIndex: "1" });
  });

  it("should apply inactive styles when active is false", () => {
    const { container } = render(
      <CarouselItem {...defaultProps} active={false} />,
    );
    const box = container.querySelector(".carousel-item");

    expect(box).toHaveStyle({ opacity: "0", zIndex: "0" });
  });

  it("should render CardMedia with correct image and alt text", () => {
    render(<CarouselItem {...defaultProps} />);
    const img = screen.getByAltText("Test Alt Text");

    expect(img).toHaveAttribute("src", "/test-image.jpg");
  });

  it("should render CarouselDarkOverlay", () => {
    render(<CarouselItem {...defaultProps} />);

    expect(screen.getByTestId("carousel-dark-overlay")).toBeInTheDocument();
  });

  it("should render title with h1 variant", () => {
    render(<CarouselItem {...defaultProps} />);
    const title = screen.getByText("Test Title");

    expect(title.tagName).toBe("H1");
  });

  it("should render subtitle with h4 variant", () => {
    render(<CarouselItem {...defaultProps} />);
    const subtitle = screen.getByText("Test Subtitle");

    expect(subtitle.tagName).toBe("H4");
  });
});
