import { render, screen } from "@testing-library/react";
import Result from "../components/Result";
import mockData from "../mocks/mock.json";

describe("Tests for search result", () => {
  test("Users search should result be displayed", () => {
    render(<Result data={mockData} onSaveWord={vi.fn()} />);

    // Check if the element with test-id 'search-result-heading' contains the text 'hello'
    const result = screen.getByTestId("search-result-heading");
    expect(result).toHaveTextContent(/hello/i);
  });

  test("Result should includes audio file or files", async () => {
    render(<Result data={mockData} onSaveWord={vi.fn()} />);

    // Check if audioplayer is in the document
    const audioPlayer = screen.getByRole("audio");
    expect(audioPlayer).toBeInTheDocument;
  });
});
