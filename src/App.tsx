import { useState } from "react";
import { AppContainer } from "./App.style";
import Darkmode from "./components/Darkmode";
import Saved from "./components/Saved";
import Search from "./components/Search";

function App() {
  const [searchedWord, setSearchedWord] = useState<string | undefined>("");

  return (
    <AppContainer>
      <h1>Dictionary</h1>
      <Darkmode />
      <Search setSearchedWord={setSearchedWord} searchedWord={searchedWord} />
      <div>
        <Saved />
      </div>
    </AppContainer>
  );
}

export default App;
