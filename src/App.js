import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";
import Ranking from "./components/ranking";
import LastUpdateDate from "./components/lastupdate";

function App() {
  return (
    <>
      <Header />
      <Ranking />
      <LastUpdateDate />
      <Footer />
    </>
  );
}

export default App;
