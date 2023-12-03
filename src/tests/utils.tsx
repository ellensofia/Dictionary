import { screen } from "@testing-library/react";
import { UserEvent } from "@testing-library/user-event";

export const preformSearch = async (word: string, user: UserEvent) => {
  const searchfield = screen.getByRole("textbox");
  const searchButton = screen.getByRole("button", { name: "Search" });

  // Simulate user searching for the word "hello"
  await user.click(searchfield);
  await user.type(searchfield, word);
  await user.click(searchButton);
};

// Check if save button is in the document and simulate click
export const saveWord = async (user: UserEvent) => {
  const saveButton = screen.getByRole("button", { name: "Save word" });
  expect(saveButton).toBeInTheDocument;
  await user.click(saveButton);
};
