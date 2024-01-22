import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import Header from "./components/header";
import Text from "./components/text";

const App = () => {
  return (
    <Provider store={store}>
      <div className="App"></div>
      <Header />
      <Text />
    </Provider>
  );
};

export default App;
