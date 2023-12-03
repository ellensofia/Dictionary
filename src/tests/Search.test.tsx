import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe } from "vitest";
import Search from "../components/Search";
import { preformSearch } from "./utils";

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

  test("Should be able to search by pressing enter key", async () => {
    const user = userEvent.setup();
    const mockSetSerchedWord = vi.fn();
    render(
      <Search
        setSearchedWord={mockSetSerchedWord}
        searchedWord={""}
        onSaveWord={vi.fn()}
      />
    );

    const searchfield = screen.getByRole("textbox");

    // Simulate user searching for the word "hello"
    await user.click(searchfield);
    await user.type(searchfield, "hello");
    await user.keyboard("{Enter}");
    expect(mockSetSerchedWord).toHaveBeenCalledWith("hello");
  });

  test("Should call the function setSearchedWord when a word is submitted by click on submit button", async () => {
    const mockSetSerchedWord = vi.fn();
    const user = userEvent.setup();

    render(
      <Search
        setSearchedWord={mockSetSerchedWord}
        searchedWord={""}
        onSaveWord={vi.fn()}
      />
    );

    // Simulating user typing and submitting the word "nice"
    // Expect mockSetSearchedWord function to have been called
    await preformSearch("nice", user);
    expect(mockSetSerchedWord).toHaveBeenCalledWith("nice");
  });

  test("Display error message when search term is empty ", async () => {
    render(
      <Search
        setSearchedWord={vi.fn()}
        searchedWord={""}
        onSaveWord={vi.fn()}
      />
    );
    const user = userEvent.setup();

    // Simulating user typing and submitting an empty string
    await preformSearch(" ", user);

    // Check if error message is displayed
    await waitFor(() => {
      expect(screen.getByTestId("error")).toHaveTextContent(
        "Please enter a word"
      );
    });
  });
});

test("Display error message when invalid search term is used", async () => {
  // Render the Search component with initial prop for searchTerm that's incorrect
  render(
    <Search
      setSearchedWord={vi.fn()}
      searchedWord={"dksj"}
      onSaveWord={vi.fn()}
    />
  );
  // Check if error message is displayed
  await waitFor(() => {
    expect(screen.getByTestId("error")).toHaveTextContent(
      "Sorry, no definition was found"
    );
  });
});
