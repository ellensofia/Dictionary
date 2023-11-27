import { AppContainer } from "./App_style";
import Darkmode from "./components/Darkmode";
import Result from "./components/Result";
import Saved from "./components/Saved";
import Search from "./components/Search";

function App() {
  return (
    <AppContainer>
      <h1>Dictionary</h1>
      <Darkmode />
      <Search />
      <div>
        <Result />
        <Saved />
      </div>
    </AppContainer>
  );
}

export default App;
