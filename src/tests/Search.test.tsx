import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe } from "vitest";
import Search from "../components/Search";

describe("Search field", async () => {
  test("User should be able to type a word in the inputfield", async () => {
    render(<Search setSearchedWord={vi.fn()} searchedWord={"hello"} />);
    const user = userEvent.setup();
    const searchField = screen.getByRole("textbox");

    // Simulating user typing and submitting the word "hello"
    await user.type(searchField, "hello");
    await user.click(screen.getByText("Search"));

    // Check if the element with test-id 'search-result-heading' contains the text 'hello'
    const result = screen.getByTestId("search-result-heading");
    expect(result).toHaveTextContent(/hello/i);
  });
});
