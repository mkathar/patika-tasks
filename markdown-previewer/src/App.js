import React from "react";
import MarkdownConverter from "./components/markdownConverter";
import Header from "./components/header";

const App = () => {
  return (
    <div className="App">
      <Header />
      <MarkdownConverter />
    </div>
  );
};

export default App;
