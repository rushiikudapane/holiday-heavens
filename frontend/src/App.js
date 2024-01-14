import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import AboutUs from "./components/Body/AboutUs/AboutUs";
import BookNow from "./components/Body/BookNow/BookNow";
import CardDetails from "./components/Body/CardDetails/CardDetails";
import Home from "./components/Body/Home/Home";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route exact path="/card-details" element={<CardDetails />} />
          <Route exact path="/booknow" element={<BookNow />} />
          <Route exact path="/aboutus" element={<AboutUs />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
