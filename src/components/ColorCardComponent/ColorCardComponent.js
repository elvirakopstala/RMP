import React, { Component } from "react";
import "./ColorCard.style.scss";
import { CopyToClipboard } from "react-copy-to-clipboard";

export default class ColorCardComponent extends Component {
  state = {
    copied: false,
  };

  timer;

  handleCopyClick = () => {
    this.setState({ copied: true })

    this.timer = setTimeout(() => {
      this.setState({ copied: false })
    }, 3000)
  }

  componentDidMount() {
    clearTimeout(this.timer)
  }

  render() {
    const { title, colorHex } = this.props;
    const { copied } = this.state;

    return (
      <div className="grid-element" style={{ backgroundColor: colorHex }}>
        <CopyToClipboard
          text={colorHex}
          onCopy={() => this.handleCopyClick()}
        >
          <span className="ColorCard-Copy">{copied ? 'Copied!' : 'Click me to copy color'}</span>
        </CopyToClipboard>
        <div className="wrapper">
          <div className="color">{colorHex}</div>
          <div className="title">{title}</div>
        </div>
      </div>
    );
  }
}
