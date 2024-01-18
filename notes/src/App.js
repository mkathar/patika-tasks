import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store"; // Update the path accordingly
import Notes from "./components/notes"; // Update the path accordingly
import Header from "./components/header";
import List from "./components/list";

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <Notes />
        <List />
      </div>
    </Provider>
  );
};

export default App;
