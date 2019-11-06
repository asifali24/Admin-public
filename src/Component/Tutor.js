import React, { Component } from "react";
import {
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
// import tutree from "../img/tutree.svg";
import "../App.css";
import profile from "../img/profile.svg";

export default class Tutor extends Component {
  constructor(props) {
    super(props);

    this.toggleStatus = this.toggleStatus.bind(this);
    this.toggleSubject = this.toggleSubject.bind(this);
    this.toggleLastUpdate = this.toggleLastUpdate.bind(this);

    this.state = {
      dropdownOpen: false,
      StatusdropdownOpen: false,
      SubjectdropdownOpen: false,
      LastUpdatedropdownOpen: false,
      Heading: "Dashboard"
    };
  }

  toggleStatus() {
    this.setState({
      StatusdropdownOpen: !this.state.StatusdropdownOpen
    });
  }
  toggleSubject() {
    this.setState({
      SubjectdropdownOpen: !this.state.SubjectdropdownOpen
    });
  }
  toggleLastUpdate() {
    this.setState({
      LastUpdatedropdownOpen: !this.state.LastUpdatedropdownOpen
    });
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div
            class="col-xl-12 "
            style={{
              height: "150px",
              backgroundColor: "#ff0042",
              // marginLeft: "-15px",
              // paddingRight: "-95px"
              boxShadow: " 0px 5px 5px grey",
              zIndex: "2"
            }}
          >
            <div className="row">
              <div className="Title">Tutors</div>
              <div className="Search"></div>
              <div className="Name"> Andew asjghj</div>
              <div className="Profile-Pic">
                <img
                  src={profile}
                  alt="ProfilePic"
                  width="100%"
                  height="100%"
                  // style={{ backgroundColor: "yellow" }}
                />
              </div>
            </div>
          </div>
          <div
            class="col-xl-12 "
            style={{
              height: "100px"
              // backgroundColor: "yellow",
              // paddingLeft: "45%"
            }}
          >
            <div className="DropdownBut row">
              <div className="row Buttons">
                <div className="row ButtonAli">
                  {/* <div>
                    <ButtonDropdown
                      isOpen={this.state.StatusdropdownOpen}
                      toggle={this.toggleStatus}
                    >
                      <DropdownToggle
                        caret
                        color="primary"
                        className="Space"
                        style={{
                          fontSize: "20px",
                          width: "150px",
                          // paddingTop: "5%"
                          marginTop: "10%",
                          borderRadius: "25px"
                        }}
                      >
                        Status
                      </DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem header>Header</DropdownItem>
                        <DropdownItem disabled>Action</DropdownItem>
                        <DropdownItem>Another Action</DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>Another Action</DropdownItem>
                      </DropdownMenu>
                    </ButtonDropdown>
                  </div> */}
                  <div>
                    <ButtonDropdown
                      isOpen={this.state.SubjectdropdownOpen}
                      toggle={this.toggleSubject}
                    >
                      <DropdownToggle
                        caret
                        color="primary"
                        className="Space"
                        style={{
                          fontSize: "20px",
                          width: "150px",
                          // paddingTop: "5%"
                          marginTop: "10%",
                          borderRadius: "25px"
                        }}
                      >
                        Subject
                      </DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem header>Header</DropdownItem>
                        <DropdownItem disabled>Action</DropdownItem>
                        <DropdownItem>Another Action</DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>Another Action</DropdownItem>
                      </DropdownMenu>
                    </ButtonDropdown>
                  </div>
                  <div>
                    <ButtonDropdown
                      isOpen={this.state.LastUpdatedropdownOpen}
                      toggle={this.toggleLastUpdate}
                    >
                      <DropdownToggle
                        caret
                        color="primary"
                        className="Space"
                        style={{
                          fontSize: "20px",
                          width: "150px",
                          // paddingTop: "5%"
                          marginTop: "10%",
                          borderRadius: "25px"
                        }}
                      >
                        Joining Date
                      </DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem header>Header</DropdownItem>
                        <DropdownItem disabled>Action</DropdownItem>
                        <DropdownItem>Another Action</DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>Another Action</DropdownItem>
                      </DropdownMenu>
                    </ButtonDropdown>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-12" style={{ paddingTop: "30px" }}>
            <table class="table">
              <thead class="thead-light">
                <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Contact Details</th>
                  <th>Status</th>
                  <th>Joining Date</th>
                  <th>Session Taken</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>124</td>
                  <td>Doe</td>
                  <td>john@example.com</td>
                  <td>John</td>
                  <td>Doe</td>
                  <td>john@example.com</td>
                  <td> fdefssf </td>
                </tr>
                <tr>
                  <td>125</td>
                  <td>Doe</td>
                  <td>john@example.com</td>
                  <td>John</td>
                  <td>Doe</td>
                  <td>john@example.com</td>
                  <td> fdefssf </td>
                </tr>
                <tr>
                  <td>126</td>
                  <td>Doe</td>
                  <td>john@example.com</td>
                  <td>John</td>
                  <td>Doe</td>
                  <td>john@example.com</td>
                  <td> fdefssf </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
