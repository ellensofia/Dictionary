import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe } from "vitest";
import Search from "../components/Search";

describe("Search field", async () => {
  test("Should be possible to type a word in the input field and display result", async () => {
    render(
      <Search
        setSearchedWord={vi.fn()}
        searchedWord={"hello"}
        onSaveWord={vi.fn()}
      />
    );
    const user = userEvent.setup();

    // Find input field
    const searchField = screen.getByRole("textbox");

    // Simulating user typing and submitting the word "hello"
    await user.type(searchField, "hello");
    await user.click(screen.getByText("Search"));

    // Check if the element with test-id 'search-result-heading' contains the text 'hello'
    const result = screen.getByTestId("search-result-heading");
    expect(result).toHaveTextContent(/hello/i);
  });

  test("Should not be possible to search with empty search term", async () => {
    render(
      <Search
        setSearchedWord={vi.fn()}
        searchedWord={"hello"}
        onSaveWord={vi.fn()}
      />
    );
    const user = userEvent.setup();

    // Find input field
    const searchField = screen.getByRole("textbox");

    // Simulating user typing and submitting an empty string
    await user.type(searchField, " ");
    await user.click(screen.getByText("Search"));

    // Check if the element with test-id 'search-result-heading' contains the text 'hello'
    const result = screen.getByTestId("error");
    expect(result).toHaveTextContent("Please enter a word");
  });
});
