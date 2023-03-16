import React, { Component } from "react";
import {footerItems} from "./FooterItems";
import "./Footer.css"
import "../Body/BodyComponent.css"


class Footer extends Component {

  render() {
    return (
      <footer class="FooterItems">
        <ul className="footer-links">
          {footerItems.map((item, index) => {
            return (
              <li key={index}>
                <a className={item.cName} href={item.url}>
                  {item.title}
                </a>
              </li>
            )
          })}
        </ul>
        <p class="footer-copyright">
          &copy; Copyright by
          PAINTit, your color partner online
        </p>
      </footer>
    )
  }
}

export default Footer;
