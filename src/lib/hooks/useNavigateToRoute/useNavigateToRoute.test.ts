import { describe, it, expect, vi } from "vitest";
import { renderHook } from "@testing-library/react";
import { useNavigate } from "react-router";
import useNavigateToRoute from "./useNavigateToRoute";
import Routes from "@/router/Routes";

vi.mock("react-router", () => ({
  useNavigate: vi.fn(),
}));

describe("useNavigateToRoute", () => {
  it("should return a function", () => {
    const mockNavigate = vi.fn();
    vi.mocked(useNavigate).mockReturnValue(mockNavigate);

    const { result } = renderHook(() => useNavigateToRoute());

    expect(typeof result.current).toBe("function");
  });

  it("should call navigate with the provided route", () => {
    const mockNavigate = vi.fn();
    vi.mocked(useNavigate).mockReturnValue(mockNavigate);

    const { result } = renderHook(() => useNavigateToRoute());
    const testRoute = Routes.order;

    result.current(testRoute);

    expect(mockNavigate).toHaveBeenCalledWith(testRoute);
    expect(mockNavigate).toHaveBeenCalledTimes(1);
  });

  it("should navigate to different routes when called multiple times", () => {
    const mockNavigate = vi.fn();
    vi.mocked(useNavigate).mockReturnValue(mockNavigate);

    const { result } = renderHook(() => useNavigateToRoute());

    result.current(Routes.home);
    result.current(Routes.order);
    result.current(Routes.faq);

    expect(mockNavigate).toHaveBeenCalledTimes(3);
    expect(mockNavigate).toHaveBeenNthCalledWith(1, Routes.home);
    expect(mockNavigate).toHaveBeenNthCalledWith(2, Routes.order);
    expect(mockNavigate).toHaveBeenNthCalledWith(3, Routes.faq);
  });
});
