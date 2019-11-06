import React, { Component } from "react";

export default class Error extends Component {
  render() {
    return (
      <div
        style={{
          fontSize: "60px",
          fontWeight: "bolder",
          textAlign: "center",
          //   height: "700px",
          paddingTop: "10%"
        }}
      >
        404 - Page not found
      </div>
    );
  }
}
