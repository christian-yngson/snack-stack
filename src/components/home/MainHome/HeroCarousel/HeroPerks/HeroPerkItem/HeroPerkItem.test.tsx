import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import HeroPerkItem from "./HeroPerkItem";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

describe("HeroPerkItem", () => {
  it("renders the text prop", () => {
    render(<HeroPerkItem icon={<CheckCircleIcon />} text="Fast Delivery" />);
    expect(screen.getByText("Fast Delivery")).toBeInTheDocument();
  });

  it("renders the icon prop", () => {
    render(
      <HeroPerkItem
        icon={<CheckCircleIcon data-testid="test-icon" />}
        text="Fast Delivery"
      />,
    );
    expect(screen.getByTestId("test-icon")).toBeInTheDocument();
  });

  it("applies correct typography variant", () => {
    render(<HeroPerkItem icon={<CheckCircleIcon />} text="Free Shipping" />);
    const typography = screen.getByText("Free Shipping");
    expect(typography.tagName).toBe("H6");
  });

  it("renders within a ListItem", () => {
    const { container } = render(
      <HeroPerkItem icon={<CheckCircleIcon />} text="Quality Products" />,
    );
    expect(container.querySelector(".MuiListItem-root")).toBeInTheDocument();
  });

  it("renders with ListItemIcon", () => {
    const { container } = render(
      <HeroPerkItem icon={<CheckCircleIcon />} text="Secure Payment" />,
    );
    expect(
      container.querySelector(".MuiListItemIcon-root"),
    ).toBeInTheDocument();
  });
});
