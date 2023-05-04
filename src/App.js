import React from "react";
import "./styles/root.scss";
import NavItems from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import BodyComponent from "./components/Body/BodyComponent";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import AddColorComponent from './components/AddColor/AddColor.component'
import RemoveColorComponent from './components/RemoveColor/RemoveColor.component'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<BodyComponent /> } />
        <Route path="add-color" element={<AddColorComponent />} />
        <Route path="remove-color" element={<RemoveColorComponent />} />


        {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  );
}

function Layout() {
  return (
    <div className="App">
      {/* A "layout route" is a good place to put markup you want to
          share across all the pages on your site, like navigation. */}
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/add-color">Add Color</Link>
          </li>
          <li>
            <Link to="/remove-color">Remove Color</Link>
          </li>
        </ul>
      </nav>

      <hr />

      {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
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


// <div className="App">
//   <NavItems />
//
//
// </div>