
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Work from "./Components/Work";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import "./Style/Work.css";

function App() {
  return (
    <>
      {/* Three Componentsof website==== */}

      <Navbar />
      <Work />
      <Footer />
    </>
  );
}

export default App;
