import React, {Component} from "react";
import {notify} from '../lib/registrar';

export default class ClickWrapper extends Component {
  onClick(e) {
    notify(e);
  }

  render() {
    return <div onClick={this.onClick} className="click-wrapper">{this.props.children}</div>;
  }
}