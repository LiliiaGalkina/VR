import "./reset.scss";
import "./App.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import AppRouter from "./AppRouter";
import { BrowserRouter as Router } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop/>
        <Header />
        <AppRouter />
        <Footer />

    </Router>
  );
}

export default App;
