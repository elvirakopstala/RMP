import React, { Component } from "react";
import {bodyItems} from "./BodyItems";
import "./MainBody.css"

class Mainbody extends Component {
  render () {
    return (
      <div className="main-part">
        <h5 className="main-heading">paint your life colorful</h5>
        <div className="main-component">
          <div className="paint-grid">
              {bodyItems.map((item, index) => {
                return <div key={index}>
                  <div className="grid-element" className={item.cName}>{item.title}{item.name}</div>
                </div>
              })}
          </div>
        </div>
      </div>
    )
  }
}

{/* <footer class="FooterItems">
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
      </footer> */}

export default Mainbody;
