import { Provider } from "react-redux";
import { store } from "./redux/store";
import Header from "./components/header";
import Weather from "./components/weather";
import Days from "./components/days";

function App() {
  return (
    <Provider store={store}>
      <div className="main">
        <Header />
        <Weather />
        <Days />
      </div>
    </Provider>
  );
}

export default App;
