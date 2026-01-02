import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import FoodCategorySelect from "./FoodCategorySelect";
import getCategoryOptions from "./functions/getCategoryOptions";

vi.mock("./functions/getCategoryOptions");

const mockOptions = [
  { value: "all", label: "Show all" },
  { value: "pizzas", label: "Pizzas" },
  { value: "burgers", label: "Burgers" },
  { value: "desserts", label: "Desserts" },
] as const;

describe("FoodCategorySelect", () => {
  beforeEach(() => {
    vi.mocked(getCategoryOptions).mockReturnValue(mockOptions);
  });

  it("should render the component with InputLabel", () => {
    render(<FoodCategorySelect />);

    expect(screen.getByText("Food Category")).toBeInTheDocument();
  });

  it("should render all category options as MenuItems", async () => {
    const user = userEvent.setup();
    render(<FoodCategorySelect />);

    const selectButton = screen.getByRole("combobox");
    await user.click(selectButton);

    mockOptions.forEach((option) => {
      expect(
        screen.getByRole("option", { name: option.label })
      ).toBeInTheDocument();
    });
  });

  it("should set default value to first option", () => {
    render(<FoodCategorySelect />);

    const hiddenInput = document.querySelector(
      ".MuiSelect-nativeInput"
    ) as HTMLInputElement;
    expect(hiddenInput?.value).toBe("all");
  });

  it("should render Stack component with flex styles", () => {
    const { container } = render(<FoodCategorySelect />);

    const stack = container.querySelector(".MuiStack-root");
    expect(stack).toBeInTheDocument();
  });
});
