import React, { Component } from "react";
import "../App.css";
import { NavLink } from "react-router-dom";
import LeftSide from "../Component/LeftSideButton";
import Header from "../Component/Header";
import ButtonsGroup from "../Component/ButtonsGroup";
import { connect } from "react-redux";
import { login, getStudents } from "../Redux/actions/userActions";
import { Redirect } from "react-router-dom";
import { verifyUser } from "../Redux/actions/userActions";

class Student extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Student",
      token: "",
      getStudents: [],
      notes: "Veified",
      is_verified: true,
      loading: ""
    };
    console.log("construhagfjdgasa");
    this.getToken();

    this.shouldComponentRender = this.shouldComponentRender.bind(this);
  }

  getToken = async () => {
    const token = await sessionStorage.getItem("userToken");
    this.setState({ token: token }, () => {
      this.props.getStudents(token);
    });
  };

  shouldComponentRender() {
    if (this.pending === false) return false;
    return true;
  }

  onHandleStatusChange = id => {
    const token = this.state.token;
    let status = window.confirm("Do you want to change the status", id);
    if (status) {
      const ids = {
        id,
        is_verified: this.state.is_verified,
        notes: this.state.notes
      };
      this.props.verifyUser(ids, token);
      setTimeout(() => {
        this.props.getStudents(token);
      }, 3000);
    }
  };
  render() {
    if (!sessionStorage.getItem("userToken")) {
      return <Redirect to="/" />;
    }
    // const studentList = this.props.studentData.length;
    let studentsList =
      this.props.studentData.length > 0 ? (
        this.props.studentData.map((studentDetails, i) => {
          return (
            <tr>
              <td>{i + 1}</td>
              <td>
                <NavLink to="/student/Profile">
                  <button type="button" className="btn ">
                    {studentDetails.name}
                  </button>
                </NavLink>
              </td>
              <td>{studentDetails.phone}</td>
              <td>{studentDetails.isVerified ? "Verified" : "Not-Verified"}</td>
              <td>{new Date(studentDetails.joining).toLocaleDateString()}</td>
              <td>{studentDetails.sessionTaken}</td>
              <td>
                <div>
                  <button
                    type="button"
                    className="btn btn-danger"
                    style={{ borderRadius: "15px" }}
                    onClick={() => {
                      this.onHandleStatusChange(studentDetails.id);
                    }}
                  >
                    Edit Status
                  </button>
                  {/* <button type="button" className="btn ">
                    Deactivate
                  </button> */}
                </div>
              </td>
              {/* <td>
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
              </td> */}
            </tr>
          );
        })
      ) : (
        <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif" />
      );

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
                    <th>S.No</th>
                    <th>Name</th>
                    <th>Contact Details</th>
                    <th>Status</th>
                    <th>Joining Date</th>
                    <th>Session Taken</th>
                    <th>Action</th>
                    {/* <th style={{ fontSize: "25px" }}>✚</th> */}
                  </tr>
                </thead>
                <tbody>{studentsList}</tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  console.log(state.getStudents);

  return {
    loginUser: state.login,
    studentData: state.getStudents.users,
    verifyData: state.verifyUser,
    loading: state.loading
  };
};

export default connect(mapStateToProps, { login, getStudents, verifyUser })(
  Student
);
