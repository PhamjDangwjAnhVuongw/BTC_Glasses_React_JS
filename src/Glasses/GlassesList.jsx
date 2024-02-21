import React, { Component } from "react";
import Glasses from "./Glasses";

export default class GlassesList extends Component {
  renderGlassesList = () => {
    return this.props.glassArr.map((item) => {
      return (
        <Glasses
          renderInfo={this.props.renderInfo}
          handleChangeGlass={this.props.handleChangeGlass}
          key={item.id}
          data={item}
        />
      );
    });
  };
  render() {
    return (
      <div>
        <div className="row">{this.renderGlassesList()}</div>
      </div>
    );
  }
}
