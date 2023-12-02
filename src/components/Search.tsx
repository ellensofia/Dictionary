import { useEffect, useRef, useState } from "react";
import { Word } from "../Interfaces";
import Result from "./Result";
import { Searchfield } from "./Search.style";

interface Props {
  setSearchedWord: (word: string) => void;
  searchedWord: string | undefined;
  onSaveWord: (word: Word) => void;
}

export default function Search({
  setSearchedWord,
  searchedWord,
  onSaveWord,
}: Props) {
  const [searchData, setSearchData] = useState<Word[]>([]);
  const [errorMessage, setErrorMessage] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputRef.current) {
      const searchTerm = inputRef.current.value.trim();
      if (!searchTerm) {
        setErrorMessage("Please enter a word");
        setSearchData([]);
      } else {
        setSearchedWord(searchTerm);
        inputRef.current.value = "";
        setErrorMessage("");
      }
    }
  };

  const fetchData = () => {
    if (searchedWord) {
      fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchedWord}`)
        .then((searchData) => {
          if (!searchData.ok) throw new Error("Could not fetch data");
          return searchData.json();
        })
        .then((data) => {
          setSearchData(data);
        })
        .catch((error) => {
          console.error("Failed to fetch data: ", error);
          setSearchData([]);
          setErrorMessage("Sorry, no definition was found");
        });
    }
  };

  useEffect(() => {
    fetchData();
  }, [searchedWord]);

  return (
    <>
      <Searchfield onSubmit={handleSubmit}>
        <input ref={inputRef} type="text" placeholder="Write a word..." />
        <button type="submit">Search</button>
      </Searchfield>
      {errorMessage && <p data-testid="error">{errorMessage}</p>}
      <Result searchResult={searchData} onSaveWord={onSaveWord} />
    </>
  );
}
