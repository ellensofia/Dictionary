import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";

describe("Darkmode", () => {
  it("Sould be possible to switch between dark- and lightmode", async () => {
    render(<App />);
    const user = userEvent.setup();
    const toggleDarkModeBtn = screen.queryByTestId("darkmode");
    if (toggleDarkModeBtn) {
      // Expect dark mode to be applied initially
      expect(document.body.classList.contains("dark")).toBe(true);

      // Click to switch to lightmode
      await user.click(toggleDarkModeBtn);
      expect(document.body.classList.contains("dark")).toBe(false);

      // Click to switch back to darkmode
      await user.click(toggleDarkModeBtn);
      expect(document.body.classList.contains("dark")).toBe(true);
    }
  });
});

describe("Saved data", () => {
  test("User should be able to save words in a list", async () => {
    render(<App />);
    const user = userEvent.setup();
    const searchField = screen.getByRole("textbox");

    // Simulate user searching for the word hello
    await user.click(searchField);
    await user.type(searchField, "hello");
    await user.click(screen.getByText("Search"));
    const result = screen.getByTestId("search-result-heading");
    expect(result).toHaveTextContent("hello");
    const saveButton = screen.getByTestId("save");
    expect(saveButton).toBeInTheDocument;
    await user.click(saveButton);
    const savedWordList = screen.getByTestId("saved-word-list");
    expect(savedWordList).toBeInTheDocument;
    expect(savedWordList).toHaveTextContent("hello");
  });
});
