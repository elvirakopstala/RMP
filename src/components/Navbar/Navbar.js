import React, { Component } from "react";
import "./Navbar.scss";
import "../Body/BodyComponent.scss";
import icon from "./img/icon.png";

class NavItems extends Component {
  state = { clicked: false };

  render() {
    return (
      <nav className="navbar">
        <div className="wrapper">
          <div className="navbar-logo-with-titles">
            <img src={icon} className="navbar-logo" alt="App logo" />
          </div>
        </div>
        <div className="menu-icon" onClick={this.handleClick}>
          <i
            className={
              this.state.clicked ? "fa-light fa-xmark" : "fa-light fa-bars"
            }
          ></i>
        </div>
        <div className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          <button className="nav-links">Add my Color</button>
          <button className="nav-links">Remove my Color</button>
        </div>
      </nav>
    );
  }
}

export default NavItems;
