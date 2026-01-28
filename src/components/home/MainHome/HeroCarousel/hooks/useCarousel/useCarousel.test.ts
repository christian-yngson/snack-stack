import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { renderHook, act } from "@testing-library/react";
import useCarousel from "./useCarousel";

describe("useCarousel", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("should initialize with first slide", () => {
    const { result } = renderHook(() => useCarousel());

    expect(result.current.slide).toBe(0);
    expect(result.current.items).toHaveLength(5);
  });

  it("should return carousel items with correct structure", () => {
    const { result } = renderHook(() => useCarousel());

    expect(result.current.items[0]).toHaveProperty("image");
    expect(result.current.items[0]).toHaveProperty("altText");
    expect(result.current.items[0]).toHaveProperty("title");
    expect(result.current.items[0]).toHaveProperty("subtitle");
  });

  it("should auto-advance to next slide after 5 seconds", () => {
    const { result } = renderHook(() => useCarousel());

    expect(result.current.slide).toBe(0);

    act(() => {
      vi.advanceTimersByTime(5000);
    });

    expect(result.current.slide).toBe(1);
  });

  it("should cycle back to first slide after last slide", () => {
    const { result } = renderHook(() => useCarousel());

    act(() => {
      vi.advanceTimersByTime(25000); // 5 slides * 5 seconds
    });

    expect(result.current.slide).toBe(0);
  });

  it("should allow manual slide change", () => {
    const { result } = renderHook(() => useCarousel());

    act(() => {
      result.current.setSlide(3);
    });

    expect(result.current.slide).toBe(3);
  });

  it("should clean up interval on unmount", () => {
    const { unmount } = renderHook(() => useCarousel());
    const clearIntervalSpy = vi.spyOn(window, "clearInterval");

    unmount();

    expect(clearIntervalSpy).toHaveBeenCalled();
  });
});
