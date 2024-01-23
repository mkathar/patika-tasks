import Header from "./components/header";
import Tables from "./components/tables";
import Chart from "./components/chart";
import { Provider } from "react-redux";
import store from "./redux/store";
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <Tables />
        <Chart />
      </div>
    </Provider>
  );
}

export default App;
