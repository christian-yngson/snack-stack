import { describe, it, expect, vi, beforeEach } from "vitest";
import { useSelector } from "react-redux";
import usePreviewedFood from "./usePreviewedFood";

vi.mock("react-redux");

describe("usePreviewedFood", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should call useSelector hook", () => {
    vi.mocked(useSelector).mockReturnValue(null);
    usePreviewedFood();
    expect(useSelector).toHaveBeenCalled();
  });

  it("should return food from state", () => {
    const mockFood = { id: 1, name: "Pizza" };
    vi.mocked(useSelector).mockReturnValue(mockFood);
    const result = usePreviewedFood();
    expect(result).toEqual(mockFood);
  });

  it("should return null when no food is previewed", () => {
    vi.mocked(useSelector).mockReturnValue(null);
    const result = usePreviewedFood();
    expect(result).toBeNull();
  });

  it("should pass selector function to useSelector", () => {
    const mockFood = { id: 2, name: "Burger" };
    vi.mocked(useSelector).mockReturnValue(mockFood);
    usePreviewedFood();
    expect(useSelector).toHaveBeenCalledWith(expect.any(Function));
  });

  it("should handle undefined food state", () => {
    vi.mocked(useSelector).mockReturnValue(undefined);
    const result = usePreviewedFood();
    expect(result).toBeUndefined();
  });
});
