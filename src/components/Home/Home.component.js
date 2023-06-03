import React from "react";
import "./Home.style.scss";
import { Link } from "react-router-dom";
import icon from "../Navbar/img/icon.png";

export default function Home() {
  return (
    <div>
        <div className="Home-Heading">
            <span>
                Colorize
            </span>
            <span>
                Paint Your life Colourful
            </span>
        </div>
      <Link to="/main">
        <div className="Home-Logo">
          <img src={icon} alt="Color choose app logo" />
        </div>
      </Link>
      <Link className="Home-Link" to="/main">
        Dive into the ocean of colors
      </Link>
    </div>
  );
}
