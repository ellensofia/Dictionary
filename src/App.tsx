import { useSessionStorage } from "@uidotdev/usehooks";
import { useState } from "react";
import { AppContainer } from "./App.style";
import { Word } from "./Interfaces";
import DarkMode from "./components/DarkMode";
import SavedList from "./components/SavedList";
import Search from "./components/Search";

function App() {
  const [searchedWord, setSearchedWord] = useState<string | undefined>("");
  const [savedWords, setSavedWords] = useSessionStorage<Word[]>("word", []);

  const handleSavedWords = (wordToSave: Word) => {
    if (!savedWords.some((savedWord) => savedWord.word === wordToSave.word))
      setSavedWords((prevWords) => [...prevWords, wordToSave]);
  };

  const handleSearch = (word: string) => {
    setSearchedWord(word);
  };

  return (
    <AppContainer>
      <header>
        <h1>Dictionary</h1>
        <DarkMode />
      </header>
      <div className="container">
        <div className="search-container">
          <Search
            setSearchedWord={setSearchedWord}
            searchedWord={searchedWord}
            onSaveWord={handleSavedWords}
          />
        </div>
        <SavedList
          savedWords={savedWords}
          setSavedWords={setSavedWords}
          handleSearch={handleSearch}
        />
      </div>
    </AppContainer>
  );
}

export default App;
