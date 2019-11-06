import React, { Component } from "react";
import "../App.css";
import LeftSide from "../Component/LeftSideButton";
import Header from "../Component/Header";
import { NavLink } from "react-router-dom";

export default class UserRole extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "User Role"
    };
  }
  render() {
    const role = [
      {
        id: "01",
        name: "Abcd",
        mail: "abcdef@mail.com",
        isVerified: "true",
        role: "Student"
      },
      {
        id: "01",
        name: "Efghi",
        mail: "Efghi@mail.com",
        isVerified: "true",
        role: "Student"
      }
    ];
    const roleList = role.map(role => (
      <tr style={{ textAlign: "center" }}>
        <td>{role.id}</td>
        <td>{role.name}</td>
        <td>{role.mail}</td>
        <td>{role.isVerified}</td>
        <td>{role.role}</td>
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
              <li>User Role</li>
            </ul>
            <div
              style={{
                width: "100%",
                paddingLeft: "50px",
                paddingTop: "50px"
              }}
            >
              <NavLink to="/master/UserROle/AddUserRole">
                <button
                  type="button"
                  className="btn btn-primary"
                  style={{ width: "150px", borderRadius: "25px" }}
                >
                  Add Role
                </button>
              </NavLink>
            </div>
            <div>
              <div className="tableContener">
                <table class="table">
                  <thead>
                    <tr style={{ textAlign: "center" }}>
                      <th scope="col">Id</th>
                      <th scope="col">Name</th>
                      <th scope="col">E-mail</th>
                      <th scope="col">Verified</th>
                      <th scope="col">Role</th>
                    </tr>
                  </thead>
                  <tbody>{roleList}</tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
