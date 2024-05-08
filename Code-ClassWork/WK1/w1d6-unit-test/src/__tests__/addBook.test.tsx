import { render, screen } from "@testing-library/react";
import AddBook from "../component/AddBook";
describe("Validate AddBook Component", () => {
  test("Button save should be visible", () => {
    render(<AddBook />);
    const button = screen.getByText("Add");
    expect(button).toBeVisible;
  });
});

// This will test for the rendering the layout