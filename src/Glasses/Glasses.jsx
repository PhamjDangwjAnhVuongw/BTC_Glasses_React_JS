import React, { Component } from "react";

export default class Glasses extends Component {
  renderGlasses = () => {
    return;
  };
  render() {
    let { url } = this.props.data;
    return (
      <div className="col-3 p-4">
        <button
          onClick={() => {
            this.props.handleChangeGlass(this.props.data);
          }}
          className="border-0 bg-white"
        >
          <img src={url} className="w-100 p-2" alt=""></img>
        </button>
      </div>
    );
  }
}
