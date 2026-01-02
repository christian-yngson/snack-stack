import { describe, it, expect } from "vitest";
import getCategoryOptions from "./getCategoryOptions";

describe("getCategoryOptions", () => {
  it("should return an array of category options", () => {
    const options = getCategoryOptions();
    expect(Array.isArray(options)).toBe(true);
  });

  it("should return options with correct length", () => {
    const options = getCategoryOptions();
    expect(options).toHaveLength(4);
  });

  it("should return options with correct structure", () => {
    const options = getCategoryOptions();
    options.forEach((option) => {
      expect(option).toHaveProperty("value");
      expect(option).toHaveProperty("label");
    });
  });

  it("should contain all expected categories", () => {
    const options = getCategoryOptions();
    const values = options.map((opt) => opt.value);
    expect(values).toEqual(["all", "pizzas", "burgers", "desserts"]);
  });

  it("should contain correct labels for each category", () => {
    const options = getCategoryOptions();
    expect(options[0].label).toBe("Show all");
    expect(options[1].label).toBe("Pizzas");
    expect(options[2].label).toBe("Burgers");
    expect(options[3].label).toBe("Desserts");
  });

  it("should return the same data on multiple calls", () => {
    const firstCall = getCategoryOptions();
    const secondCall = getCategoryOptions();
    expect(firstCall).toEqual(secondCall);
  });
});
