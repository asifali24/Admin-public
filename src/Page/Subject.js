import React, { Component } from "react";
import "../App.css";
import { NavLink } from "react-router-dom";
import LeftSide from "../Component/LeftSideButton";
import Header from "../Component/Header";

export default class Subject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Subject"
    };
  }
  render() {
    const sub = [
      {
        id: "01",
        subject: "English",
        course: "Grammer"
      },
      {
        id: "02",
        subject: "Maths",
        course: "coordinate"
      }
    ];
    const subList = sub.map(list => (
      <tr style={{ textAlign: "center" }}>
        <td>{list.subject}</td>
        <td>{list.course}</td>
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
              <li>Subject</li>
            </ul>

            <div
              style={{
                height: "90px",
                paddingTop: "40px",
                paddingLeft: "30px"
              }}
            >
              <div className="row">
                <div className="dropdown" style={{ width: "40%" }}>
                  <button
                    type="button"
                    className="btn btn-primary dropdown-toggle"
                    data-toggle="dropdown"
                    style={{ width: "100%" }}
                  >
                    School's
                  </button>
                  <div className="dropdown-menu">
                    <h5 className="dropdown-header">Dropdown header</h5>
                    <a className="dropdown-item" href="#">
                      Link 1
                    </a>
                    <a className="dropdown-item" href="#">
                      Link 2
                    </a>
                    <a className="dropdown-item" href="#">
                      Link 3
                    </a>
                    <h5 className="dropdown-header">Dropdown header</h5>
                  </div>
                </div>
                <div style={{ marginLeft: "46%" }}>
                  <NavLink to="/subject/add">
                    <button
                      type="button"
                      className="btn btn-primary"
                      style={{ width: "100%" }}
                    >
                      Add Subject
                    </button>
                  </NavLink>
                </div>
                {/* </div> */}
              </div>
            </div>

            <div>
              <div className="tableContener">
                <table class="table">
                  <thead>
                    <tr style={{ textAlign: "center" }}>
                      <th scope="col">Subject</th>
                      <th scope="col">course's</th>
                    </tr>
                  </thead>
                  <tbody>{subList}</tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
