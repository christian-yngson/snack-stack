import { describe, it, expect, vi } from "vitest";
import getAnimation from "./getAnimation";
import { keyframes } from "@mui/material/styles";

vi.mock("@mui/material/styles", () => ({
  keyframes: vi.fn((...values: string[]) => {
    return `keyframes-${values.join("-")}`;
  }),
}));

describe("getAnimation", () => {
  it("should call keyframes with correct template", () => {
    const params = { left: 50, duration: 300, delay: 100 };
    getAnimation(params);

    expect(keyframes).toHaveBeenCalled();
  });

  it("should handle negative left values", () => {
    const params = { left: -100, duration: 400, delay: 150 };
    const result = getAnimation(params);

    expect(result).toContain("400ms");
    expect(result).toContain("150ms");
    expect(result).toContain("ease-in-out");
    expect(result).toContain("forwards");
  });

  it("should handle zero values", () => {
    const params = { left: 0, duration: 0, delay: 0 };
    const result = getAnimation(params);

    expect(result).toContain("0ms");
    expect(result).toContain("ease-in-out");
    expect(result).toContain("forwards");
  });

  it("should return correct timing function and fill mode", () => {
    const params = { left: 200, duration: 1000, delay: 500 };
    const result = getAnimation(params);

    expect(result).toContain("ease-in-out");
    expect(result).toContain("forwards");
  });
});
