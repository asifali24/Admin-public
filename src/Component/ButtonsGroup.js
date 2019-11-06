import React, { Component } from "react";
import {
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button,
  Popover,
  PopoverHeader,
  PopoverBody
} from "reactstrap";
import mang from "../img/magn.svg";

export default class Buttons extends Component {
  constructor(props) {
    super(props);

    this.toggleStatus = this.toggleStatus.bind(this);
    this.toggleSubject = this.toggleSubject.bind(this);
    this.toggleLastUpdate = this.toggleLastUpdate.bind(this);
    this.togglePopOver = this.togglePopOver.bind(this);

    this.state = {
      dropdownOpen: false,
      StatusdropdownOpen: false,
      SubjectdropdownOpen: false,
      LastUpdatedropdownOpen: false,
      Heading: "Dashboard",
      popoverOpen: false
    };
  }

  togglePopOver() {
    this.setState({
      popoverOpen: !this.state.popoverOpen
    });
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
    const subjects = [
      {
        name: "Biology",
        course: "Science",
        id: 1
      },
      {
        name: "Physics",
        course: "Science",
        id: 2
      }
    ];
    const activestaus = [
      {
        status: "Active"
      },
      {
        status: "InActive"
      }
    ];

    const subjectList = subjects.map(subject => (
      <div>
        <DropdownItem divider />
        <DropdownItem>{subject.name}</DropdownItem>
      </div>
    ));
    const statusList = activestaus.map(stat => (
      <div>
        <DropdownItem divider />
        <DropdownItem>{stat.status}</DropdownItem>
      </div>
    ));

    return (
      <div
        class="col-xl-12 row"
        style={{
          height: "100px"
        }}
      >
        <div className="DropdownBut row">
          <div className="row Buttonss">
            <div className="row ButtonAli">
              <div style={{ textAlign: "center" }}>
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
                      width: "100%",
                      marginTop: "10%",
                      borderRadius: "10px",
                      height: "50px"
                    }}
                  >
                    Status
                  </DropdownToggle>
                  <DropdownMenu>{statusList}</DropdownMenu>
                </ButtonDropdown>
              </div>
              <div style={{ textAlign: "center" }}>
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
                      width: "100%",
                      marginTop: "10%",
                      borderRadius: "10px",
                      height: "50px"
                    }}
                  >
                    Subject
                  </DropdownToggle>
                  <DropdownMenu>
                    {subjectList}
                    {console.log(subjectList)}
                  </DropdownMenu>
                </ButtonDropdown>
              </div>

              <div
                className="row"
                style={{
                  width: "40%",
                  height: "60px"
                }}
              >
                <div
                  style={{
                    width: "20%",
                    paddingTop: "6%"
                  }}
                >
                  <img src={mang} heigh="10%" width="50%" />
                </div>
                <div
                  style={{
                    width: "80%",
                    paddingTop: "5%",
                    paddingLeft: "2%"
                  }}
                >
                  <input
                    type="text"
                    class="form-control"
                    id="search"
                    name="Search"
                    placeholder="Search"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
