import React, { Component } from "react";
import "../App.css";
import { NavLink } from "react-router-dom";
import LeftSide from "../Component/LeftSideButton";
import Header from "../Component/Header";
import ButtonsGroup from "../Component/ButtonsGroup";
import { Button, Popover, PopoverHeader, PopoverBody } from "reactstrap";
import { connect } from "react-redux";
import { login } from "../Redux/actions/userActions";
import { Redirect } from "react-router-dom";

class Student extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Student"
    };
  }

  render() {
    if (!sessionStorage.getItem("userToken")) {
      return <Redirect to="/" />;
    }
    const students = [
      {
        id: "01",
        contact: "7531598520",
        status: "Active",
        joiningDate: "01/02/2019",
        sessionTaken: "545",
        Name: "Andrew"
      },
      {
        id: "02",
        contact: "7531598520",
        status: "Active",
        joiningDate: "01/02/2019",
        sessionTaken: "555",
        Name: "Andrew"
      },
      {
        id: "03",
        contact: "7531598520",
        status: "Active",
        joiningDate: "01/02/2019",
        sessionTaken: "555",
        Name: "Andrew"
      },
      {
        id: "04",
        contact: "7531598520",
        status: "Active",
        joiningDate: "01/02/2019",
        sessionTaken: "555",
        Name: "Andrew"
      }
    ];
    const studentList = students.map(studentDetails => (
      <tr>
        <td>{studentDetails.id}</td>
        <td>
          <NavLink to="/student/Profile">
            <button type="button" className="btn ">
              {studentDetails.Name}
            </button>
          </NavLink>
        </td>
        <td>{studentDetails.contact}</td>
        <td>{studentDetails.status}</td>
        <td>{studentDetails.joiningDate}</td>
        <td>{studentDetails.sessionTaken}</td>
        <td>
          <div>
            <button
              type="button"
              className="btn btn-danger"
              style={{ borderRadius: "15px" }}
            >
              Edit
            </button>
            <button type="button" className="btn ">
              Deactivate
            </button>
          </div>
        </td>
        <td>
          <Button id="Popover1" type="button">
            ...
          </Button>
          <Popover
            placement="bottom"
            isOpen={this.state.popoverOpen}
            target="Popover1"
            toggle={this.togglePopOver}
          >
            <PopoverBody>
              <div>
                <button>Send mail</button>
                <button>Send Notification</button>
              </div>
            </PopoverBody>
          </Popover>
        </td>
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
            <ButtonsGroup />

            <div class="col-xl-12" style={{ paddingTop: "30px" }}>
              <table class="table" style={{ textAlign: "center" }}>
                <thead class="thead-light">
                  <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Contact Details</th>
                    <th>Status</th>
                    <th>Joining Date</th>
                    <th>Session Taken</th>
                    <th>Action</th>
                    <th style={{ fontSize: "25px" }}>✚</th>
                  </tr>
                </thead>
                <tbody>{studentList}</tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    loginUser: state.login
  };
};

export default connect(
  mapStateToProps,
  { login }
)(Student);
