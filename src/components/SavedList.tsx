import CancelIcon from "@mui/icons-material/Cancel";
import { Word } from "../Interfaces";
import { SavedContainer } from "./Saved.style";

interface Props {
  savedWords: [] | Word[];
  setSavedWords: (word: Word[]) => void;
  handleSearch: (word: string) => void;
}

export default function SavedList({
  savedWords,
  setSavedWords,
  handleSearch,
}: Props) {
  const removeWord = (wordToRemove: Word) => {
    const updatedSavedWordsList = savedWords.filter(
      (word) => word.word !== wordToRemove.word
    );
    setSavedWords(updatedSavedWordsList);
  };

  return (
    <SavedContainer>
      <h3>Saved words</h3>
      <ul data-testid="saved-word-list">
        {savedWords?.map((word, index) => (
          <li key={index}>
            <span onClick={() => handleSearch(word.word)}>{word.word}</span>
            <button
              className="remove"
              data-testid="remove"
              onClick={() => removeWord(word)}
            >
              <CancelIcon />
            </button>
          </li>
        ))}
      </ul>
    </SavedContainer>
  );
}
