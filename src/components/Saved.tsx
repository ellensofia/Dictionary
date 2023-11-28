import { Word } from "../Interfaces";

interface Props {
  savedWords: [] | Word[];
}

export default function Saved({ savedWords }: Props) {
  return (
    <div>
      <h3>Saved words</h3>
      <ul data-testid="saved-word-list">
        {savedWords?.map((word, index) => (
          <li key={index}>{word.word}</li>
        ))}
      </ul>
    </div>
  );
}
