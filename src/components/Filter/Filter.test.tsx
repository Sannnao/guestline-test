import { render, screen } from "@testing-library/react";
import { Filter } from "./Filter";

describe("Filter", () => {
  it("Filter component rendered", () => {
    render(<Filter getFilterData={() => {}} />);

    expect(screen.getByText(/Adults:/i)).toBeInTheDocument();
    expect(screen.getByText(/Children:/i)).toBeInTheDocument();
    expect(screen.getAllByTestId("counter").length).toBe(2);
    expect(screen.getByTestId("rating")).toBeInTheDocument();
  });
});
