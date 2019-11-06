import React, { Component } from "react";
import "../App.css";
import LeftSide from "../Component/LeftSideButton";
import Header from "../Component/Header";
import { NavLink } from "react-router-dom";

export default class School extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "School"
    };
  }
  render() {
    const SchoolDetails = [
      {
        id: "565854",
        // date: "26646",
        schoolname: "xdcfghjkljkjhgfcgvhbjnk xdcfgvhbjlkl;jh",
        address:
          "hsgduu wdugudguydu udguygdsuyguysdg uy gdsuyf gsyud guyd guygsdduygsdu guysd guy ",
        domian: "sdfffsfsg@gdrfvg.com"
      }
    ];
    const SchoolDetailsList = SchoolDetails.map(sch => (
      <tr style={{ textAlign: "center" }}>
        <td>{sch.id}</td>
        <td>{sch.schoolname}</td>
        <td>{sch.address}</td>
        <td>{sch.domian}</td>
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

              <li style={{}}>School</li>
            </ul>
            <div
              style={{
                width: "100%",
                paddingLeft: "50px",
                paddingTop: "50px"
              }}
            >
              <NavLink to="/school/Add">
                <button
                  type="button"
                  className="btn btn-primary"
                  style={{ width: "150px", borderRadius: "25px" }}
                >
                  Add School
                </button>
              </NavLink>
            </div>
            <div className="tableContener">
              <table class="table">
                <thead>
                  <tr style={{ textAlign: "center" }}>
                    <th>ID</th>
                    <th>School Name</th>
                    <th>Address</th>
                    <th>Domain</th>
                  </tr>
                </thead>
                <tbody>{SchoolDetailsList}</tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
