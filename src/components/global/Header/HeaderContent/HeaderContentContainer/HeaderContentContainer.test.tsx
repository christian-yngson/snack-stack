import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import HeaderContentContainer from "./HeaderContentContainer";

describe("HeaderContentContainer", () => {
  it("renders children correctly", () => {
    render(
      <HeaderContentContainer>
        <div>Test Content</div>
      </HeaderContentContainer>
    );

    expect(screen.getByText("Test Content")).toBeInTheDocument();
  });

  it("renders multiple children", () => {
    render(
      <HeaderContentContainer>
        <span>Left</span>
        <span>Right</span>
      </HeaderContentContainer>
    );

    expect(screen.getByText("Left")).toBeInTheDocument();
    expect(screen.getByText("Right")).toBeInTheDocument();
  });
});
