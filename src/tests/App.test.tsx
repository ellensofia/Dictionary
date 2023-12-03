import { render, screen, waitFor, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";
import mockData from "../mocks/mock.json";
import { preformSearch, saveWord } from "./utils";

//Functional tests for App component
describe("Fetch mock data test", () => {
  const fetchData = async (url: string) => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  };

  test("Should fetch mock data successfully", async () => {
    // Call function that makes the HTTP request
    const data = await fetchData(
      "https://api.dictionaryapi.dev/api/v2/entries/en/hello"
    );

    // Check if returned data matches mock data
    expect(data).toEqual(mockData);
  });
});

describe("Saved list function", () => {
  test("User should be able to view save and remove in a favourites list", async () => {
    render(<App />);
    const user = userEvent.setup();

    await preformSearch("hello", user);
    await waitFor(() =>
      expect(screen.getByTestId("search-result-heading")).toHaveTextContent(
        "hello"
      )
    );

    await saveWord(user);

    // Check if saved list is in the document
    const savedWordList = screen.getByTestId("saved-word-list");
    expect(savedWordList).toBeInTheDocument;

    // Check if the word "hello" is in the list
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

    await preformSearch("hello", user);
    await waitFor(() =>
      expect(screen.getByTestId("search-result-heading")).toHaveTextContent(
        "hello"
      )
    );

    await saveWord(user);

    // Check if saved words list only contain one word
    const savedWordList = screen.getByTestId("saved-word-list");
    let listItems = within(savedWordList).queryAllByRole("listitem");
    expect(listItems.length).toBe(1);

    // Simulate user searching for the word "hello" again
    await preformSearch("hello", user);
    await waitFor(() =>
      expect(screen.getByTestId("search-result-heading")).toHaveTextContent(
        "hello"
      )
    );

    await saveWord(user);

    // Check if saved words list only contain one word
    listItems = within(savedWordList).queryAllByRole("listitem");
    expect(listItems.length).toBe(1);
  });

  test("Should be able to get details about saved words by clicking on them", async () => {
    render(<App />);
    const user = userEvent.setup();

    await preformSearch("hello", user);
    await waitFor(() =>
      expect(screen.getByTestId("search-result-heading")).toHaveTextContent(
        "hello"
      )
    );
    await saveWord(user);

    // Click on the first word in saved list
    const savedWordList = screen.getByTestId("saved-word-list");
    let listItems = within(savedWordList).queryAllByRole("listitem");
    await user.click(listItems[0]);

    // Check if some of the details of the word is displayed
    expect(screen.getByTestId("search-result-heading")).toHaveTextContent(
      "hello"
    );
    const definitions = screen.getAllByTestId("definition");
    expect(definitions[0]).toHaveTextContent(
      "used as a greeting or to begin a phone conversation."
    );
    expect(definitions[1]).toHaveTextContent(
      "an utterance of ‘hello’; a greeting."
    );
  });
});
