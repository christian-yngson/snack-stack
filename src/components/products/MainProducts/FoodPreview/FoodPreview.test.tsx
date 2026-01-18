import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import FoodPreview from "./FoodPreview";
import * as foodPreviewSlice from "@/redux/features/foodPreview/foodPreviewSlice";
import usePreviewOpen from "@/redux/features/foodPreview/selectors/usePreviewOpen";
import { useDispatch } from "react-redux";

vi.mock("@/redux/features/foodPreview/selectors/usePreviewOpen");
vi.mock("react-redux");
vi.mock("./FoodPreviewTitle", () => ({
  default: () => <div>FoodPreviewTitle</div>,
}));
vi.mock("./FoodPreviewContent", () => ({
  default: () => <div>FoodPreviewContent</div>,
}));
vi.mock("./FoodPreviewActions", () => ({
  default: () => <div>FoodPreviewActions</div>,
}));
vi.mock("@mui/material/Dialog", () => ({
  default: ({
    children,
    open,
    onClose,
  }: {
    children: React.ReactNode;
    open: boolean;
    onClose: () => void;
  }) =>
    open ? (
      <div data-testid="dialog" onClick={onClose}>
        {children}
      </div>
    ) : null,
}));
vi.mock("@mui/material/Divider", () => ({ default: () => <hr /> }));

const mockDispatch = vi.fn();

vi.mocked(useDispatch).mockReturnValue(mockDispatch);

describe("FoodPreview", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should render Dialog component when open is true", () => {
    vi.mocked(usePreviewOpen).mockReturnValue(true);

    render(<FoodPreview />);
    expect(screen.getByTestId("dialog")).toBeInTheDocument();
  });

  it("should not render Dialog when open is false", () => {
    vi.mocked(usePreviewOpen).mockReturnValue(false);

    render(<FoodPreview />);
    expect(screen.queryByTestId("dialog")).not.toBeInTheDocument();
  });

  it("should render FoodPreviewTitle component", () => {
    vi.mocked(usePreviewOpen).mockReturnValue(true);

    render(<FoodPreview />);
    expect(screen.getByText("FoodPreviewTitle")).toBeInTheDocument();
  });

  it("should render FoodPreviewContent component", () => {
    vi.mocked(usePreviewOpen).mockReturnValue(true);

    render(<FoodPreview />);
    expect(screen.getByText("FoodPreviewContent")).toBeInTheDocument();
  });

  it("should render FoodPreviewActions component", () => {
    vi.mocked(usePreviewOpen).mockReturnValue(true);

    render(<FoodPreview />);
    expect(screen.getByText("FoodPreviewActions")).toBeInTheDocument();
  });

  it("should dispatch closePreview when Dialog onClose is triggered", async () => {
    vi.mocked(usePreviewOpen).mockReturnValue(true);

    const user = userEvent.setup();
    render(<FoodPreview />);

    const dialog = screen.getByTestId("dialog");
    await user.click(dialog);

    expect(mockDispatch).toHaveBeenCalledWith(
      expect.objectContaining({ type: foodPreviewSlice.closePreview.type })
    );
  });

  it("should call usePreviewOpen hook", () => {
    const usePreviewOpenMock = vi.mocked(usePreviewOpen);
    usePreviewOpenMock.mockReturnValue(true);

    render(<FoodPreview />);
    expect(usePreviewOpenMock).toHaveBeenCalled();
  });

  it("should call useDispatch hook", () => {
    const useDispatchMock = vi.mocked(useDispatch);
    vi.mocked(usePreviewOpen).mockReturnValue(true);

    render(<FoodPreview />);
    expect(useDispatchMock).toHaveBeenCalled();
  });

  it("should render two Divider components", () => {
    vi.mocked(usePreviewOpen).mockReturnValue(true);

    render(<FoodPreview />);
    const dividers = screen.getAllByRole("separator");
    expect(dividers).toHaveLength(2);
  });

  it("should render all child components in correct order", () => {
    vi.mocked(usePreviewOpen).mockReturnValue(true);

    render(<FoodPreview />);
    const dialog = screen.getByTestId("dialog");
    const children = dialog.textContent;

    expect(children).toContain("FoodPreviewTitle");
    expect(children).toContain("FoodPreviewContent");
    expect(children).toContain("FoodPreviewActions");
  });
});
