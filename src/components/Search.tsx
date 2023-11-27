import { useRef } from "react";
import { Searchfield } from "./Search.style";

interface Props {
  setSearchedWord: (word: string) => void;
}

export default function Search({ setSearchedWord }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const searchTerm = inputRef.current?.value;
    if (searchTerm) {
      setSearchedWord(searchTerm);
    }
    if (inputRef.current) {
      inputRef.current.value = "";
    }
    console.log(`Searching for: ${searchTerm}`);
  };

  return (
    <Searchfield onSubmit={handleSubmit}>
      <input ref={inputRef} type="text" placeholder="Search..." />
      <button type="submit">Search</button>
    </Searchfield>
  );
}
