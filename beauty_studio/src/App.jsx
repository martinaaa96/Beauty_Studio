import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Error from "./components/Error";
import Login from "./components/Login";
import Register from "./components/Register";
import About from './components/About'

function App() {
  return (
    <>
      <Header />
      <Home />
      <About/>
      <Error />
      <Login />
      <Register />
      <Footer />
    </>
  );
}
export default App;
