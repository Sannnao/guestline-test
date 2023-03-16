import { render, fireEvent, screen } from "@testing-library/react";
import { Counter } from "./Counter";

describe("Counter", () => {
  it("Counter component rendered and works properly", () => {
    render(<Counter getAmount={() => {}} />);
    const incrementBtn = screen.getByLabelText("increment");
    const decrementBtn = screen.getByLabelText("decrement");
    const amount = screen.getByTestId("amount");

    expect(amount).toHaveTextContent("_");

    fireEvent.click(incrementBtn);
    expect(amount).toHaveTextContent("0");
    fireEvent.click(incrementBtn);
    expect(amount).toHaveTextContent("1");
    fireEvent.click(decrementBtn);
    expect(amount).toHaveTextContent("0");
    fireEvent.click(decrementBtn);
    expect(amount).toHaveTextContent("_");
  });
});
