import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Search from "./assets/components/Search";
import Saved from "./assets/components/Saved";
import Result from "./assets/components/Result";

function App() {
  return (
    <>
      <h1>Dictionary</h1>
      <Search />
      <div>
        <Saved />
        <Result />
      </div>
    </>
  );
}

export default App;
