import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Error from "./components/Error";
import Login from "./components/Login";
import Register from "./components/Register";
import About from "./components/About";
import Services from "./components/Services";
import Gallery from "./components/Gallery";

function App() {
  return (
    <>
      <Header />
      <Error />
      <Home />
      <Gallery />
      <Services />
      <About />
      <Error />
      <Login />
      <Register />
      <Footer />
    </>
  );
}
export default App;
