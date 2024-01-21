import Products from "./components/products";
import Header from "./components/header";
import Receipt from "./components/Receipt";
import { Provider } from "react-redux";
import { store } from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="main">
        <Header />
        <Products />
        <Receipt />
      </div>
    </Provider>
  );
}

export default App;
