import { Word } from "../Interfaces";

interface Props {
  savedWords: [] | Word[];
}

export default function Saved({ savedWords }: Props) {
  return (
    <div>
      <h4>Saved words</h4>
      <ul>
        {savedWords?.map((word, index) => (
          <li key={index}>{word.word}</li>
        ))}
      </ul>
    </div>
  );
}
