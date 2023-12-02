import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe } from "vitest";
import Search from "../components/Search";

describe("Unit testing for Search field component", async () => {
  test("Should be possible to type a word in the input field", async () => {
    render(
      <Search
        setSearchedWord={vi.fn()}
        searchedWord={""}
        onSaveWord={vi.fn()}
      />
    );
    const user = userEvent.setup();

    // Simulating user typing and submitting the word "hello"
    // Verify that the search field accepts and input text
    const searchField = screen.getByRole("textbox");
    await user.type(searchField, "hello");
    expect(searchField).toHaveValue("hello");
    await user.click(screen.getByRole("button", { name: "Search" }));
  });

  test("Should call the function setSearchedWord when a word is submitted", async () => {
    const mockSetSerchedWord = vi.fn();
    const user = userEvent.setup();

    render(
      <Search
        setSearchedWord={mockSetSerchedWord}
        searchedWord={""}
        onSaveWord={vi.fn()}
      />
    );

    // Simulating user typing and submitting the word "hello world"
    // Verify that the search field accepts and input
    // Expect mockSetSearchedWord function to have been called
    const searchField = screen.getByRole("textbox");
    await user.type(searchField, "test");
    expect(searchField).toHaveValue("test");
    await user.click(screen.getByRole("button", { name: "Search" }));
    expect(mockSetSerchedWord).toHaveBeenCalledWith("test");
  });

  test("Should not be possible to search with empty or incorrect search term", async () => {
    render(
      <Search
        setSearchedWord={vi.fn()}
        searchedWord={" "}
        onSaveWord={vi.fn()}
      />
    );
    const user = userEvent.setup();

    // Simulating user typing and submitting an empty string
    const searchField = screen.getByRole("textbox");
    await user.type(searchField, " ");
    const searchButton = screen.getByRole("button", { name: "Search" });
    await user.click(searchButton);

    // Check if error message is displayed
    let errorMessage = screen.getByTestId("error");
    expect(errorMessage).toHaveTextContent("Please enter a word");

    // Simulating user typing an incorrect word
    await user.type(searchField, "idifljksdshf");
    await user.click(searchButton);

    await waitFor(() => {
      errorMessage = screen.getByTestId("error");
      expect(errorMessage).toHaveTextContent("Sorry, no definition was found");
    });
  });
});
