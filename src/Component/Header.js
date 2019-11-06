import React, { Component } from "react";
import profile from "../img/profile.svg";

export default class Header extends Component {
  render() {
    return (
      <div
        // className="PaddingZero"
        style={{
          height: "150px",
          backgroundColor: "#fd5b5b",
          marginRight: "0",
          marginLeft: "0"
        }}
      >
        <div className="row">
          <div className="Title">{this.props.title}</div>
          <div className="Search"></div>
          <div className="Name"> Andew</div>
          <div className="Profile-Pic">
            <img src={profile} alt="ProfilePic" width="90%" height="90%" />
          </div>
        </div>
      </div>
    );
  }
}
