import { render, screen, waitFor, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";
import mockData from "../mocks/mock.json";

describe("Functional tests for App component", () => {
  test("User should be able to save words in a list", async () => {
    render(<App />);

    const user = userEvent.setup();
    const searchField = screen.getByRole("textbox");

    // Simulate user searching for the word "hello"
    await user.click(searchField);
    await user.type(searchField, "hello");
    await user.click(screen.getByRole("button", { name: "Search" }));
    await waitFor(() =>
      expect(screen.getByTestId("search-result-heading")).toHaveTextContent(
        "hello"
      )
    );

    // Check if save button is in the document and simulate click
    const saveButton = screen.getByRole("button", { name: "Save" });
    expect(saveButton).toBeInTheDocument;
    await user.click(saveButton);

    // Check if the saved list is in the document and if word is in the list
    const savedWordList = screen.getByTestId("saved-word-list");
    expect(savedWordList).toBeInTheDocument;
    expect(savedWordList).toHaveTextContent("hello");

    // Simulate user searching for the word "world"
    await user.click(searchField);
    await user.type(searchField, "world");
    await user.click(screen.getByText("Search"));
    await waitFor(() =>
      expect(screen.getByTestId("search-result-heading")).toHaveTextContent(
        "world"
      )
    );
    await user.click(saveButton);

    // Get the saved words list and count the number of list items
    // Check if the saved list is updated with both words hello and world
    const listItems = within(savedWordList).queryAllByRole("listitem");
    expect(listItems.length).toBe(2);
    expect(savedWordList).toHaveTextContent("hello");
    expect(savedWordList).toHaveTextContent("world");
  });
});

describe("Fetch mock data test", () => {
  const fetchData = async (url: string) => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  };

  test("Should fetch mock data successfully", async () => {
    // Call the function that makes the HTTP request
    const data = await fetchData(
      "https://api.dictionaryapi.dev/api/v2/entries/en/hello"
    );

    // Assert that the returned data matches the mock data
    expect(data).toEqual(mockData);
  });
});
