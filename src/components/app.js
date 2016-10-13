import React, {Component} from "react";
import ClickWrapper from './ClickWrapper';
export default class App extends Component {
  render() {
    return (
      <ClickWrapper>
        <div className="app-div">
          <div id="first-form">
            <label for="my-field" id="label-field">Label</label>
            <input type="text" name="field" id="my-field"/>
          </div>
          <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab asperiores consequatur deserunt ducimus facilis fugit illum labore magnam, molestias nemo officiis optio qui quibusdam rem sed sit velit? Cumque, velit.</div>
          <img src="https://dummyimage.com/600x400/bcbed6/00000b"/>
          <div id="second-form">
            <label for="field2" id="label2-field">Label</label>
            <input type="text" name="field" id="field2"/>
          </div>
        </div>
      </ClickWrapper>
    );
  }
}