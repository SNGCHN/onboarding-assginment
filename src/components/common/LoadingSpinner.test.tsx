import { render, screen } from "@testing-library/react";
import LoadingSpinner from "./LoadingSpinner";

describe("LoadingSpinner", () => {
  it("renders correctly", () => {
    render(<LoadingSpinner />);

    const spinnerElement = screen.getByTestId("loading-spinner");
    expect(spinnerElement).toBeInTheDocument();
  });
});
