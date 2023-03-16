import React, { Component } from "react";
import { colorList } from "./ColorList";
import ColorCardComponent from "../ColorCardComponent/ColorCardComponent"
import "../Body/BodyComponent.css"

class ListColorComponent extends Component {
      render() {
        return(
          <div className="paint-grid">
              {colorList.map((item, index) => 
              <ColorCardComponent 
                title={item.title} 
                name={item.name} 
                colorHex={item.colorHex}/>
              )}
              
              <div className="grid-element" onClick={this.props.handler}></div>
          </div>
        )
      }
    }



export default ListColorComponent;