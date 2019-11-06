import React, { Component } from "react";
import "../App.css";
import LeftSide from "../Component/LeftSideButton";
import Header from "../Component/Header";
import { NavLink } from "react-router-dom";

export default class PreferredLocationCategory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Preferred Location Category"
    };
  }
  render() {
    const location = [
      {
        location: "Church"
      },
      {
        location: "Library"
      },
      {
        location: "Coffee Shop"
      }
    ];
    const locationList = location.map(loc => (
      <div
        href="/school"
        style={{
          width: "250px",
          height: "250px",
          margin: "20px",
          color: "white"
        }}
      >
        <div className="box OneLine">{loc.location}</div>
      </div>
    ));
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12 col-xl-2 col-lg-2 col-md-12 col-12 Left PaddingZero">
            <LeftSide />
          </div>
          <div
            className="col-sm-12  col-xl-10 col-lg-10 col-md-12 col-12 PaddingZero Right"
            style={{
              paddingRight: "0",
              paddingLeft: "0"
            }}
          >
            <Header title={this.state.title} />
            <ul className="breadcrumb">
              <li>
                <a href="/master">Master</a>
              </li>
              <li>Preferred Location Category</li>
            </ul>
            <div
              style={{
                width: "100%",
                paddingLeft: "50px",
                paddingTop: "50px"
              }}
            >
              <NavLink to="/master/PreferredLocationCategory/AddLocationCategory">
                <button
                  type="button"
                  className="btn btn-primary"
                  style={{ width: "150px", borderRadius: "25px" }}
                >
                  Add Location
                </button>
              </NavLink>
            </div>
            <div className="col-sm-12  col-xl-12 col-lg-10 col-md-12 col-12 row">
              {locationList}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
