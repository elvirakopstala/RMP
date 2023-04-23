import React, { Component } from "react";
import { navItems } from "./NavItems";
import "./Navbar.css"
import "../Body/BodyComponent.css"


class NavItems extends Component {
  state = { clicked: false}

  render () {
    return (
      <nav className="navbar">
        <h1 className="navbar-logo">🎨</h1>
        <div className="menu-icon" onClick={this.handleClick}>
            <i className={this.state.clicked ? "fa-light fa-xmark" : 
          "fa-light fa-bars"}></i>         
        </div>
        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {navItems.map((item, index) => {
            return (
              <li key={index}>
                <a className={item.cName} href={item.url}>
                  {item.title}
                </a>
              </li>
            )
          })}
        </ul>
      </nav>
    )
  }
}

export default NavItems;