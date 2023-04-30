import React, { Component } from "react";
import { colorList } from "./ColorList";
import ColorCardComponent from "../ColorCardComponent/ColorCardComponent";
import { getColorsListFromLS } from "../../util/localStorage";
import "./ListColor.style.scss";

class ListColorComponent extends Component {
  state = {
    userColorList: [],
    userColorEmpty: true,
  };

  getRenderStaticColorList = () => {
    return (
      <>
        {colorList.map((item, index) => (
          <ColorCardComponent
            key={index + item.colorHex}
            title={item.title}
            name={item.name}
            colorHex={item.colorHex}
          />
        ))}
      </>
    );
  };

  componentDidMount() {
    const colors = getColorsListFromLS();

    if (colors.length !== 0) {
      this.setState({
        userColorEmpty: false,
        userColorList: colors,
      });
    }
  }

  getRenderUserColorList = () => {
    const { userColorList } = this.state;

    return (
      <>
        {userColorList.map((item, index) => (
          <ColorCardComponent
            key={index + item.colorHex}
            title={item.title}
            name={item.name}
            colorHex={item.colorHex}
          />
        ))}
      </>
    );
  };

  getColorsData = () => {
    const { user } = this.props;

    if (!user) {
      return this.getRenderStaticColorList();
    }

    return this.getRenderUserColorList();
  };

  getTitle = () => {
    const { title, user } = this.props;
    const { userColorEmpty } = this.state;

    if (userColorEmpty && user) {
      return null;
    }

    return title;
  };

  render() {
    return (
      <>
        <h2 className="color-list-title">{this.getTitle()}</h2>
        <div className="paint-grid">{this.getColorsData()}</div>
      </>
    );
  }
}

export default ListColorComponent;
