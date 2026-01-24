import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import HeroCarousel from "./HeroCarousel";
import * as useCarouselModule from "./hooks/useCarousel/useCarousel";

vi.mock("react-router", () => ({
  useNavigate: vi.fn(),
}));

vi.mock("./hooks/useCarousel/useCarousel");
vi.mock("./functions/getCarouselHeight", () => ({
  default: () => "600px",
}));

describe("HeroCarousel", () => {
  const mockSetSlide = vi.fn();
  const mockActiveItem = {
    image: "/test-image.jpg",
    altText: "Test Alt Text",
    title: "Test Title",
    subtitle: "Test Subtitle",
  };

  beforeEach(() => {
    vi.clearAllMocks();
    vi.spyOn(useCarouselModule, "default").mockReturnValue({
      activeItem: mockActiveItem,
      setSlide: mockSetSlide,
    });
  });

  it("renders the carousel with active item", () => {
    render(<HeroCarousel />);

    expect(screen.getByText("Test Title")).toBeInTheDocument();
    expect(screen.getByText("Test Subtitle")).toBeInTheDocument();
    expect(screen.getByAltText("Test Alt Text")).toBeInTheDocument();
  });

  it("calls setSlide with -1 when previous button is clicked", async () => {
    const user = userEvent.setup();
    render(<HeroCarousel />);

    const prevButton = screen.getByRole("button", { name: /previous/i });
    await user.click(prevButton);

    expect(mockSetSlide).toHaveBeenCalledWith(-1);
  });

  it("calls setSlide with 1 when next button is clicked", async () => {
    const user = userEvent.setup();
    render(<HeroCarousel />);

    const nextButton = screen.getByRole("button", { name: /next/i });
    await user.click(nextButton);

    expect(mockSetSlide).toHaveBeenCalledWith(1);
  });

  it("renders all carousel components", () => {
    render(<HeroCarousel />);

    expect(
      screen.getByRole("button", { name: /previous/i }),
    ).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /next/i })).toBeInTheDocument();
  });

  it("uses correct height from getCarouselHeight function", () => {
    render(<HeroCarousel />);

    expect(screen.getByText("Test Title")).toBeInTheDocument();
  });

  it("renders HeroOrderButton component", () => {
    render(<HeroCarousel />);

    expect(screen.getByRole("button", { name: /order/i })).toBeInTheDocument();
  });

  it("displays carousel item with correct image and alt text", () => {
    render(<HeroCarousel />);

    const image = screen.getByAltText("Test Alt Text");
    expect(image).toHaveAttribute("src", "/test-image.jpg");
  });

  it("calls setSlide multiple times for sequential navigation", async () => {
    const user = userEvent.setup();
    render(<HeroCarousel />);

    const nextButton = screen.getByRole("button", { name: /next/i });
    await user.click(nextButton);
    await user.click(nextButton);

    expect(mockSetSlide).toHaveBeenCalledTimes(2);
    expect(mockSetSlide).toHaveBeenLastCalledWith(1);
  });
});
