import Header from "../components/header";
import Days from "../components/days";
import { MainProvider } from "../context/mainContext";
export default function Main() {
  return (
    <div className="main">
      <MainProvider>
        <Header />
        <Days />
      </MainProvider>
    </div>
  );
}
