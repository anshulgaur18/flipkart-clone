import "./App.css";
import Feed from "./components/Feed/Feed";
import Header from "./components/Header/header";
import Navbar from "./components/Navbar/Navbar";
import Review from "./components/Review/Review";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <Feed />
      <Review />
      <Footer />
    </>
  );
}

export default App;
