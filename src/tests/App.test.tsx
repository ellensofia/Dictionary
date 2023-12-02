import { render, screen, waitFor, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";
import mockData from "../mocks/mock.json";

//Functional tests for App component

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

describe("Saved list function", () => {
  test("User should be able to view save and remove in a favourites list", async () => {
    render(<App />);
    const user = userEvent.setup();
    const searchfield = screen.getByRole("textbox");
    const searchButton = screen.getByRole("button", { name: "Search" });

    // Simulate user searching for the word "hello"
    await user.click(searchfield);
    await user.type(searchfield, "hello");
    await user.click(searchButton);
    await waitFor(() =>
      expect(screen.getByTestId("search-result-heading")).toHaveTextContent(
        "hello"
      )
    );

    // Check if save button is in the document and simulate click
    const saveButton = screen.getByRole("button", { name: "Save word" });
    expect(saveButton).toBeInTheDocument;
    await user.click(saveButton);

    // Check if the saved list is in the document and if word is in the list
    const savedWordList = screen.getByTestId("saved-word-list");
    expect(savedWordList).toBeInTheDocument;
    expect(savedWordList).toHaveTextContent("hello");
    let listItems = within(savedWordList).queryAllByRole("listitem");
    expect(listItems.length).toBe(1);

    // Check if remove button is in the document and simulate click
    const removeButton = screen.getByTestId("remove");
    expect(removeButton).toBeInTheDocument;
    await user.click(removeButton);

    // Check if saved words list is empty
    listItems = within(savedWordList).queryAllByRole("listitem");
    expect(listItems.length).toBe(0);
  });

  test("User should not be able to save the same words twice", async () => {
    render(<App />);
    const user = userEvent.setup();
    const searchfield = screen.getByRole("textbox");
    const searchButton = screen.getByRole("button", { name: "Search" });

    // Simulate user searching for the word "hello"
    await user.click(searchfield);
    await user.type(searchfield, "hello");
    await user.click(searchButton);
    await waitFor(() =>
      expect(screen.getByTestId("search-result-heading")).toHaveTextContent(
        "hello"
      )
    );

    // Check if save button is in the document and simulate click
    const saveButton = screen.getByRole("button", { name: "Save word" });
    expect(saveButton).toBeInTheDocument;
    await user.click(saveButton);

    // Check if saved words list only contain one word
    const savedWordList = screen.getByTestId("saved-word-list");
    let listItems = within(savedWordList).queryAllByRole("listitem");
    expect(listItems.length).toBe(1);

    // Simulate user searching for the word "hello" again
    await user.click(searchfield);
    await user.type(searchfield, "hello");
    await user.click(searchButton);
    await waitFor(() =>
      expect(screen.getByTestId("search-result-heading")).toHaveTextContent(
        "hello"
      )
    );

    await user.click(saveButton);

    // Check if saved words list only contain one word
    listItems = within(savedWordList).queryAllByRole("listitem");
    expect(listItems.length).toBe(1);
  });
});
