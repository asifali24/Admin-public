import React, { Component } from "react";
import "../App.css";
import LeftSide from "../Component/LeftSideButton";
import Header from "../Component/Header";
import { NavLink } from "react-router-dom";
import generate from "@babel/generator";

export default class Gender extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Gender"
    };
  }
  render() {
    const genders = [
      {
        sl: "01",
        Gender: "Male"
      },
      {
        sl: "02",
        Gender: "Female"
      },
      {
        sl: "03",
        Gender: "Female"
      }
    ];
    const genderList = genders.map(gen => (
      <tr style={{ textAlign: "center" }}>
        <td>{gen.sl}</td>
        <td>{gen.Gender}</td>
      </tr>
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
              <li>Gender</li>
            </ul>
            <div
              style={{
                width: "100%",
                paddingLeft: "50px",
                paddingTop: "50px"
              }}
            >
              <NavLink to="/master/Gender/add">
                <button
                  type="button"
                  className="btn btn-primary"
                  style={{ width: "150px", borderRadius: "25px" }}
                >
                  Add Gender
                </button>
              </NavLink>
            </div>
            <div className="tableContener">
              <table class="table">
                <thead>
                  <tr style={{ textAlign: "center" }}>
                    <th>sl.No</th>
                    <th>Gender</th>
                  </tr>
                </thead>
                <tbody>{genderList}</tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
