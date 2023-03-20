import React from "react";
import "./App.css";
import NavItems from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import BodyComponent from "./components/Body/BodyComponent";


const App = () => {
  return (
    <div className="App">
      <NavItems />
      <BodyComponent />
      <Footer />

    </div>
  );
}

export default App;
