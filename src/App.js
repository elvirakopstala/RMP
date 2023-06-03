import React from "react";
import "./styles/root.scss";
import Footer from "./components/Footer/Footer";
import BodyComponent from "./components/Body/BodyComponent";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import AddColorComponent from './components/AddColor/AddColor.component'
import RemoveColorComponent from './components/RemoveColor/RemoveColor.component';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home.component';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeLayout />}>
        <Route index element={<Layout /> } />
      </Route>
      <Route path="/main" element={<Layout />}>
        <Route index element={<BodyComponent /> } />
        <Route path="/main/add-color" element={<AddColorComponent />} />
        <Route path="/main/remove-color" element={<RemoveColorComponent />} />
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  );
}

function HomeLayout() {
  return (
    <div className="HomeApp">
      <Home />
    </div>
  );
}

function Layout() {
  return (
    <div className="App">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}


export default App;