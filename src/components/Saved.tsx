import { Word } from "../Interfaces";
import { SavedContainer } from "./Saved.style";

interface Props {
  savedWords: [] | Word[];
}

export default function Saved({ savedWords }: Props) {
  return (
    <SavedContainer>
      <h3>Saved words</h3>
      <ul data-testid="saved-word-list">
        {savedWords?.map((word, index) => (
          <li key={index}>{word.word}</li>
        ))}
      </ul>
    </SavedContainer>
  );
}
