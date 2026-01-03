import { describe, it, expect, beforeEach, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { useSelector } from "react-redux";
import TotalAmount from "./TotalAmount";

vi.mock("react-redux");

describe("TotalAmount", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should render Total label", () => {
    vi.mocked(useSelector).mockReturnValue(0);
    render(<TotalAmount />);
    expect(screen.getByText("Total")).toBeInTheDocument();
  });

  it("should display formatted total price", () => {
    const mockTotal = 150.5;
    vi.mocked(useSelector).mockReturnValue(mockTotal);
    render(<TotalAmount />);
    expect(screen.getByText("$150.50")).toBeInTheDocument();
  });

  it("should calculate total from cart items", () => {
    vi.mocked(useSelector).mockImplementation((selector) => {
      const mockState = {
        cartReducer: {
          value: [
            { price: 10, quantity: 2 },
            { price: 5, quantity: 3 },
          ],
        },
      };
      return selector(mockState);
    });

    render(<TotalAmount />);
    expect(screen.getByText("$45.00")).toBeInTheDocument();
  });

  it("should handle empty cart with initial value of 10", () => {
    vi.mocked(useSelector).mockImplementation((selector) => {
      const mockState = {
        cartReducer: {
          value: [],
        },
      };
      return selector(mockState);
    });

    render(<TotalAmount />);
    expect(screen.getByText("$10.00")).toBeInTheDocument();
  });

  it("should format price with two decimal places", () => {
    const mockTotal = 99.999;
    vi.mocked(useSelector).mockReturnValue(mockTotal);
    render(<TotalAmount />);
    expect(screen.getByText("$100.00")).toBeInTheDocument();
  });

  it("should call useSelector with RootState", () => {
    vi.mocked(useSelector).mockReturnValue(0);
    render(<TotalAmount />);
    expect(vi.mocked(useSelector)).toHaveBeenCalled();
  });
});
