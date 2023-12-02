import { render, screen } from "@testing-library/react";
import Result from "../components/Result";
import mockData from "../mocks/mock.json";

describe("Tests for search result", () => {
  test("Users search should result be displayed", () => {
    render(<Result searchResult={mockData} onSaveWord={vi.fn()} />);

    // Check if the expected text result is displayed

    // Title
    const headings = screen.getAllByTestId("search-result-heading");
    headings.forEach((heading) => {
      expect(heading).toHaveTextContent("hello");
    });

    // First definition
    const definitions = screen.getAllByTestId("definition");
    expect(definitions[0]).toHaveTextContent(
      "used as a greeting or to begin a phone conversation."
    );
    expect(definitions[1]).toHaveTextContent(
      "an utterance of ‘hello’; a greeting."
    );

    // First example
    const examples = screen.getAllByTestId("example");
    expect(examples[0]).toHaveTextContent("hello there, Katie!");
    expect(examples[1]).toHaveTextContent(
      "she was getting polite nods and hellos from people"
    );

    // phonetics
    const phonetics = screen.getAllByTestId("phonetic");
    phonetics.forEach((phonetic) => {
      expect(phonetic).toHaveTextContent("həˈləʊ");
    });

    // synonyms
    const synonyms = screen.getAllByTestId("synonym");
    synonyms.forEach((synonym) => {
      expect(synonym).toHaveTextContent("hi");
    });

    // atonyms
    const atonyms = screen.getAllByTestId("atonym");
    atonyms.forEach((atonym) => {
      expect(atonym).toHaveTextContent("goodbye");
    });

    // partOfSpeech
    const partOfSpeeches = screen.getAllByTestId("partOfSpeech");
    expect(partOfSpeeches[0]).toHaveTextContent("exclamation");
    expect(partOfSpeeches[1]).toHaveTextContent("noun");
    expect(partOfSpeeches[2]).toHaveTextContent("verb");
  });

  test("Result should includes audio file or files", async () => {
    render(<Result searchResult={mockData} onSaveWord={vi.fn()} />);

    // Check if audioplayer is in the document and contains the right src
    const audioPlayer = screen.getByRole("audio");
    expect(audioPlayer).toBeInTheDocument;
    expect(audioPlayer).toHaveAttribute("src");
    expect(audioPlayer.getAttribute("src")).toContain(
      "//ssl.gstatic.com/dictionary/static/sounds/20200429/hello--_gb_1.mp3"
    );
  });
});
