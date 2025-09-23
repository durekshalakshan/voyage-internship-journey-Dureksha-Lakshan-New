import React from "react";
import { render, act } from "@testing-library/react";
import useDebounce from "../hooks/useDebounce"; // make sure this points to your hook


function TestComponent({ value, delay }) {
  const debounced = useDebounce(value, delay);
  return <div data-testid="debounced">{debounced}</div>;
}

jest.useFakeTimers();

test("debounces value correctly", () => {
  const { getByTestId, rerender } = render(<TestComponent value="a" delay={300} />);
  expect(getByTestId("debounced").textContent).toBe("a");

  // Change value
  rerender(<TestComponent value="ab" delay={300} />);
  
  act(() => {
    jest.advanceTimersByTime(100);
  });
  expect(getByTestId("debounced").textContent).toBe("a");

  act(() => {
    jest.advanceTimersByTime(200);
  });
  expect(getByTestId("debounced").textContent).toBe("ab");
});
