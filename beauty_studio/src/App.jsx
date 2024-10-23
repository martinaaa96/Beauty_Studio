import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Error from "./components/Error";
import Login from "./components/Login";
import Register from "./components/Register";
import About from "./components/About";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import Contacts from "./components/Contacts";
import Booking from "./components/Booking";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />

        
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/services" element={<Services />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/*" element={<Error />} />
      </Routes>

      <Footer />
    </>
  );
}
export default App;
