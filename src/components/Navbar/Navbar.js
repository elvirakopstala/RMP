import React, { Component } from "react";
import "./Navbar.scss";
import "../Body/BodyComponent.scss";
import icon from "./img/icon.png";
import { Link } from 'react-router-dom'

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <div className="navbar-logo-with-titles">
          <img src={icon} className="navbar-logo" alt="Color choose app logo" />
        </div>
        <ul className="nav-list">
          <li>
            <Link className="nav-links" to="/main">Home</Link>
          </li>
          <li>
            <Link className="nav-links" to="/main/add-color">Add Color</Link>
          </li>
          <li>
            <Link className="nav-links" to="/main/remove-color">Remove Color</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
