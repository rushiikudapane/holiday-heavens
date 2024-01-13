import "./App.css";
import BookNow from "./components/Body/BookNow";
import CardDetails from "./components/Body/CardDetails";
import HomeBody from "./components/Body/HomeBody";
import Testimonials from "./components/Body/Testimonials";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
function App() {
  return (
    <div className="App">
      <Header />
      {/* <HomeBody />
      <Testimonials /> */}

      {/* <CardDetails /> */}

      <BookNow />
      <Footer />
    </div>
  );
}

export default App;
