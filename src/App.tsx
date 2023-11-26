import Search from "./components/Search";
import Saved from "./components/Saved";
import Result from "./components/Result";
import { AppContainer } from "./App_style";

function App() {
  return (
    <AppContainer>
      <h1>Dictionary</h1>
      <Search />
      <div>
        <Result />
        <Saved />
      </div>
    </AppContainer>
  );
}

export default App;
