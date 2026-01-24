import { describe, it, expect } from "vitest";
import getCarouselHeight from "./getCarouselHeight";

describe("getCarouselHeight", () => {
  it("should return an object with minHeight and height properties", () => {
    const result = getCarouselHeight();

    expect(result).toHaveProperty("minHeight");
    expect(result).toHaveProperty("height");
  });

  it('should return minHeight as "300px"', () => {
    const result = getCarouselHeight();

    expect(result.minHeight).toBe("300px");
  });

  it("should return height object with xs, sm, and md breakpoints", () => {
    const result = getCarouselHeight();

    expect(result.height).toHaveProperty("xs");
    expect(result.height).toHaveProperty("sm");
    expect(result.height).toHaveProperty("md");
  });

  it("should return correct viewport height values for each breakpoint", () => {
    const result = getCarouselHeight();

    expect(result.height.xs).toBe("40vh");
    expect(result.height.sm).toBe("50vh");
    expect(result.height.md).toBe("60vh");
  });

  it("should return the same values on multiple calls", () => {
    const result1 = getCarouselHeight();
    const result2 = getCarouselHeight();

    expect(result1).toEqual(result2);
  });
});
