import { DarkMode } from "@mui/icons-material";
import { useState } from "react";
import { AppContainer } from "./App.style";
import { Word } from "./Interfaces";
import Saved from "./components/Saved";
import Search from "./components/Search";

function App() {
  const [searchedWord, setSearchedWord] = useState<string | undefined>("");
  const [savedWords, setSavedWords] = useState<Word[]>([]);

  const handleSavedWords = (word: Word) => {
    setSavedWords((prevWords) => [...prevWords, word]);
  };

  return (
    <AppContainer>
      <header>
        <DarkMode />
      </header>
      <h1>Dictionary</h1>
      <Search
        setSearchedWord={setSearchedWord}
        searchedWord={searchedWord}
        onSaveWord={handleSavedWords}
      />
      <div>
        <Saved savedWords={savedWords} />
      </div>
    </AppContainer>
  );
}

export default App;
