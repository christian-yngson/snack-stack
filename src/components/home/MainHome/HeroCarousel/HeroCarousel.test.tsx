import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import HeroCarousel from "./HeroCarousel";
import useCarousel from "./hooks/useCarousel/useCarousel";

interface CarouselItemProps {
  active: boolean;
  title: string;
  subtitle: string;
}

interface ButtonProps {
  onClick: () => void;
}

vi.mock("./hooks/useCarousel/useCarousel");
vi.mock("./functions/getCarouselHeight", () => ({
  default: () => ({ height: "600px" }),
}));
vi.mock("./CarouselItem", () => ({
  default: ({ active, title, subtitle }: CarouselItemProps) => (
    <div data-testid="carousel-item" data-active={active}>
      <div>{title}</div>
      <div>{subtitle}</div>
    </div>
  ),
}));
vi.mock("./CarouselPreviousButton/CarouselPreviousButton", () => ({
  default: ({ onClick }: ButtonProps) => (
    <button onClick={onClick} data-testid="previous-button">
      Previous
    </button>
  ),
}));
vi.mock("./CarouselNextButton/CarouselNextButton", () => ({
  default: ({ onClick }: ButtonProps) => (
    <button onClick={onClick} data-testid="next-button">
      Next
    </button>
  ),
}));
vi.mock("./HeroOrderButton", () => ({
  default: () => <div data-testid="order-button">Order</div>,
}));
vi.mock("./HeroPerks", () => ({
  default: () => <div data-testid="hero-perks">Perks</div>,
}));

interface MockItem {
  image: string;
  altText: string;
  title: string;
  subtitle: string;
}

describe("HeroCarousel", () => {
  const mockSetSlide = vi.fn();
  const mockItems: MockItem[] = [
    {
      image: "img1.jpg",
      altText: "Alt 1",
      title: "Title 1",
      subtitle: "Subtitle 1",
    },
    {
      image: "img2.jpg",
      altText: "Alt 2",
      title: "Title 2",
      subtitle: "Subtitle 2",
    },
    {
      image: "img3.jpg",
      altText: "Alt 3",
      title: "Title 3",
      subtitle: "Subtitle 3",
    },
  ];

  beforeEach(() => {
    vi.clearAllMocks();
    vi.mocked(useCarousel).mockReturnValue({
      items: mockItems,
      slide: 0,
      setSlide: mockSetSlide,
    });
  });

  it("renders all carousel items", () => {
    render(<HeroCarousel />);
    const items = screen.getAllByTestId("carousel-item");
    expect(items).toHaveLength(3);
  });

  it("renders navigation buttons", () => {
    render(<HeroCarousel />);
    expect(screen.getByTestId("previous-button")).toBeInTheDocument();
    expect(screen.getByTestId("next-button")).toBeInTheDocument();
  });

  it("renders HeroOrderButton and HeroPerks", () => {
    render(<HeroCarousel />);
    expect(screen.getByTestId("order-button")).toBeInTheDocument();
    expect(screen.getByTestId("hero-perks")).toBeInTheDocument();
  });

  it("navigates to next slide on next button click", async () => {
    const user = userEvent.setup();
    render(<HeroCarousel />);

    await user.click(screen.getByTestId("next-button"));

    expect(mockSetSlide).toHaveBeenCalledWith(1);
  });

  it("navigates to previous slide on previous button click", async () => {
    const user = userEvent.setup();
    render(<HeroCarousel />);

    await user.click(screen.getByTestId("previous-button"));

    expect(mockSetSlide).toHaveBeenCalledWith(2);
  });

  it("wraps to last slide when going previous from first slide", async () => {
    const user = userEvent.setup();
    render(<HeroCarousel />);

    await user.click(screen.getByTestId("previous-button"));

    expect(mockSetSlide).toHaveBeenCalledWith(2);
  });

  it("wraps to first slide when going next from last slide", async () => {
    vi.mocked(useCarousel).mockReturnValue({
      items: mockItems,
      slide: 2,
      setSlide: mockSetSlide,
    });
    const user = userEvent.setup();
    render(<HeroCarousel />);

    await user.click(screen.getByTestId("next-button"));

    expect(mockSetSlide).toHaveBeenCalledWith(0);
  });
});
