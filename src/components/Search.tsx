import { useEffect, useRef, useState } from "react";
import { Word } from "../Interfaces";
import Result from "./Result";
import { Searchfield } from "./Search.style";

interface Props {
  setSearchedWord: (word: string) => void;
  searchedWord: string | undefined;
}

export default function Search({ setSearchedWord, searchedWord }: Props) {
  const [searchData, setSearchData] = useState<Word[]>([]);
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
  };

  const fetchData = async () => {
    if (searchedWord) {
      fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchedWord}`)
        .then((searchData) => {
          if (!searchData.ok) {
            throw new Error("Could not fetch data");
          }
          return searchData.json();
        })
        .then((data) => {
          setSearchData(data);
          console.log(searchData);
          console.log(data);
        })
        .catch((error) => {
          console.error("Failed to fetch data: ", error);
        });
    }
  };

  useEffect(() => {
    fetchData();
  }, [searchedWord]);

  return (
    <>
      <Searchfield onSubmit={handleSubmit}>
        <input ref={inputRef} type="text" placeholder="Search..." />
        <button type="submit">Search</button>
      </Searchfield>
      <Result data={searchData} />
    </>
  );
}
