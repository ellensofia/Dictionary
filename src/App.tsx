import { useState } from "react";
import { AppContainer } from "./App.style";
import Darkmode from "./components/Darkmode";
import Result from "./components/Result";
import Saved from "./components/Saved";
import Search from "./components/Search";

function App() {
  const [searchedWord, setSearchedWord] = useState<string | undefined>("");

  return (
    <AppContainer>
      <h1>Dictionary</h1>
      <Darkmode />
      <Search setSearchedWord={setSearchedWord} />
      <div>
        <Result searchedWord={searchedWord} />
        <Saved />
      </div>
    </AppContainer>
  );
}

export default App;
