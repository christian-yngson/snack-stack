import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { renderHook } from "@testing-library/react";
import useCarousel from "./useCarousel";
import { act } from "react";

vi.mock("motion/react", () => ({
  wrap: (min: number, max: number, value: number) => {
    const range = max - min;
    return ((((value - min) % range) + range) % range) + min;
  },
}));

vi.mock("@/assets/images/home/steak.jpg", () => ({
  default: "steak.jpg",
}));

vi.mock("@/assets/images/home/burger.jpg", () => ({
  default: "burger.jpg",
}));

vi.mock("@/assets/images/home/hawaiian-pizza.jpg", () => ({
  default: "hawaiian-pizza.jpg",
}));

vi.mock("@/assets/images/home/spaghetti.jpg", () => ({
  default: "spaghetti.jpg",
}));

vi.mock("@/assets/images/home/lobster.jpg", () => ({
  default: "lobster.jpg",
}));

describe("useCarousel", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    // Clear all timers without running them to avoid act() warnings
    vi.clearAllTimers();
    vi.useRealTimers();
  });

  it("should initialize with the first carousel item", () => {
    const { result, unmount } = renderHook(() => useCarousel());

    expect(result.current.activeItem.title).toBe("Welcome to Snack Stack");
    expect(result.current.activeItem.altText).toBe("Burger");

    unmount();
  });

  it("should move to the next item when setSlide is called with 1", () => {
    const { result } = renderHook(() => useCarousel());

    act(() => {
      result.current.setSlide(1);
    });

    expect(result.current.activeItem.title).toBe("Fresh & Fast Delivery");
    expect(result.current.activeItem.altText).toBe("Hawaiian Pizza");
  });

  it("should move to the previous item when setSlide is called with -1", () => {
    const { result } = renderHook(() => useCarousel());

    // First go forward twice (separate act blocks due to useCallback dependency)
    act(() => {
      result.current.setSlide(1);
    });
    act(() => {
      result.current.setSlide(1);
    });

    // Now at index 2 (Spaghetti), go back
    act(() => {
      result.current.setSlide(-1);
    });

    // Should be at index 1 (Hawaiian Pizza)
    expect(result.current.activeItem.title).toBe("Fresh & Fast Delivery");
    expect(result.current.activeItem.altText).toBe("Hawaiian Pizza");
  });

  it("should wrap around to the first item when reaching the end", () => {
    const { result } = renderHook(() => useCarousel());

    // Navigate through all 5 items (separate act blocks for each)
    act(() => {
      result.current.setSlide(1);
    });
    act(() => {
      result.current.setSlide(1);
    });
    act(() => {
      result.current.setSlide(1);
    });
    act(() => {
      result.current.setSlide(1);
    });
    act(() => {
      result.current.setSlide(1);
    });

    // Should wrap back to first item
    expect(result.current.activeItem.title).toBe("Welcome to Snack Stack");
    expect(result.current.activeItem.altText).toBe("Burger");
  });

  it("should wrap around to the last item when going backward from the first", () => {
    const { result } = renderHook(() => useCarousel());

    expect(result.current.activeItem.altText).toBe("Burger");

    act(() => {
      result.current.setSlide(-1);
    });

    expect(result.current.activeItem.title).toBe("Feast on Excellence");
    expect(result.current.activeItem.altText).toBe("Lobster");
  });

  it("should auto-advance to the next item every 5 seconds", () => {
    const { result } = renderHook(() => useCarousel());

    expect(result.current.activeItem.title).toBe("Welcome to Snack Stack");

    act(() => {
      vi.advanceTimersByTime(5000);
    });

    expect(result.current.activeItem.title).toBe("Fresh & Fast Delivery");

    act(() => {
      vi.advanceTimersByTime(5000);
    });

    expect(result.current.activeItem.title).toBe("Tasty Meals, Happy Deals");
  });

  it("should allow multiple consecutive slides", () => {
    const { result } = renderHook(() => useCarousel());

    // Navigate to index 3 (Steak) with separate act blocks
    act(() => {
      result.current.setSlide(1);
    });
    act(() => {
      result.current.setSlide(1);
    });
    act(() => {
      result.current.setSlide(1);
    });

    expect(result.current.activeItem.title).toBe("Savor the Flavor");
    expect(result.current.activeItem.altText).toBe("Steak");
    expect(result.current.activeItem.image).toBe("steak.jpg");
  });

  it("should clear the interval on unmount", () => {
    const clearIntervalSpy = vi.spyOn(window, "clearInterval");
    const { unmount } = renderHook(() => useCarousel());

    unmount();

    expect(clearIntervalSpy).toHaveBeenCalled();
    clearIntervalSpy.mockRestore();
  });
});
