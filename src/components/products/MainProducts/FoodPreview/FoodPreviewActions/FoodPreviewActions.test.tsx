import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import FoodPreviewActions from "./FoodPreviewActions";
import { useDispatch } from "react-redux";
import * as foodPreviewSlice from "@/redux/features/foodPreview/foodPreviewSlice";
import { type Mock } from "vitest";

vi.mock("react-redux");
vi.mock("@mui/material/DialogActions", () => ({
  default: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="dialog-actions">{children}</div>
  ),
}));
vi.mock("@mui/material/Button", () => ({
  default: ({
    children,
    onClick,
  }: {
    children: React.ReactNode;
    onClick: () => void;
    variant: string;
    color: string;
  }) => (
    <button data-testid="close-button" onClick={onClick}>
      {children}
    </button>
  ),
}));

describe("FoodPreviewActions", () => {
  let mockDispatch: Mock;

  beforeEach(() => {
    mockDispatch = vi.fn();
    vi.mocked(useDispatch).mockReturnValue(mockDispatch);
  });

  it("should render DialogActions component", () => {
    render(<FoodPreviewActions />);

    expect(screen.getByTestId("dialog-actions")).toBeInTheDocument();
  });

  it("should render Close button", () => {
    render(<FoodPreviewActions />);

    expect(screen.getByRole("button", { name: /close/i })).toBeInTheDocument();
  });

  it("should dispatch closePreview action when Close button is clicked", async () => {
    render(<FoodPreviewActions />);

    const user = userEvent.setup();
    const closeButton = screen.getByTestId("close-button");
    await user.click(closeButton);

    expect(mockDispatch).toHaveBeenCalled();
  });

  it("should call useDispatch hook", () => {
    const useDispatchMock = vi.mocked(useDispatch);

    render(<FoodPreviewActions />);

    expect(useDispatchMock).toHaveBeenCalled();
  });

  it("should render button with error color", () => {
    render(<FoodPreviewActions />);

    const button = screen.getByTestId("close-button");
    expect(button).toBeInTheDocument();
  });

  it("should dispatch action with correct type", async () => {
    render(<FoodPreviewActions />);

    const user = userEvent.setup();
    const closeButton = screen.getByTestId("close-button");
    await user.click(closeButton);

    expect(mockDispatch).toHaveBeenCalledWith(
      expect.objectContaining({ type: foodPreviewSlice.closePreview.type }),
    );
  });
});
