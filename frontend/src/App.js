import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Mainbody from "./components/Body/MainBody";


const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Mainbody />
      <Footer />

    </div>
  );
}

export default App;
