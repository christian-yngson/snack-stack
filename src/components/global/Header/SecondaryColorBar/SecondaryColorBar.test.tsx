import { render, screen } from "@testing-library/react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { describe, it, expect } from "vitest";
import SecondaryColorBar from "./SecondaryColorBar";

const theme = createTheme();

describe("SecondaryColorBar", () => {
  it("renders the component", () => {
    render(
      <ThemeProvider theme={theme}>
        <SecondaryColorBar />
      </ThemeProvider>
    );
    expect(screen.getByText("Pay online")).toBeInTheDocument();
  });

  it("displays the correct text", () => {
    render(
      <ThemeProvider theme={theme}>
        <SecondaryColorBar />
      </ThemeProvider>
    );
    const text = screen.getByText("Pay online");
    expect(text).toBeInTheDocument();
  });

  it("has the bar class on Stack component", () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <SecondaryColorBar />
      </ThemeProvider>
    );
    const stack = container.querySelector(".bar");
    expect(stack).toBeInTheDocument();
  });
});
