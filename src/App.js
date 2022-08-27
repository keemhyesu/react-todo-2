import { useState } from "react";
import { createGlobalStyle } from "styled-components";
import "./App.css";
import IndexBox from "./component/IndexBox";

const GlobalStyle = createGlobalStyle`
body {
  background: gray;
}
`;

function App() {
  return (
    <div className="outer">
      <GlobalStyle />
      <IndexBox />
    </div>
  );
}

export default App;
