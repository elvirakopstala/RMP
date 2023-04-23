import React, { Component } from "react";
import "./BodyComponent.css"
import ListColorComponent from "../ListColorComponent/ListColorComponent";

class BodyComponent extends Component {
  constructor(props) {
    super(props)
    this.handler = this.handler.bind(this)
  }
  handler() {
    this.setState({
      someVar: "hi there"
    })
  }
  render () 
  {
    return (
      <div className="main-part">
        <h5 className="main-heading">paint your life colorful</h5>
        <div className="main-component">
          <div className="paint-grid">
              <ListColorComponent handler = {this.handler} />
          </div>
        </div>
      </div>
    )
  }
}


export default BodyComponent;
