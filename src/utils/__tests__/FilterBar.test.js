import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import FilterBar from "./FilterBar";

describe("FilterBar Component", () => {
  test("renders category dropdown and price input", () => {
    render(<FilterBar onFilter={jest.fn()} />);

    expect(screen.getByLabelText(/category/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/max price/i)).toBeInTheDocument();
  });

  test("triggers onFilter when inputs change", () => {
    const mockOnFilter = jest.fn();
    render(<FilterBar onFilter={mockOnFilter} />);

    fireEvent.change(screen.getByLabelText(/category/i), {
      target: { value: "electronics" }
    });
    fireEvent.change(screen.getByLabelText(/max price/i), {
      target: { value: "100" }
    });

    expect(mockOnFilter).toHaveBeenCalledTimes(2);
  });
});
