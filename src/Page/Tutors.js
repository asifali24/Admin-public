import React, { Component } from "react";
import "../App.css";
import LeftSide from "../Component/LeftSideButton";
import Header from "../Component/Header";
import ButtonsGroup from "../Component/ButtonsGroup";
// import { Button, Popover, PopoverHeader, PopoverBody } from "reactstrap";
import { NavLink } from "react-router-dom";
// import Tutor from "../Component/Tutor";
import { connect } from "react-redux";
import { login, getTutors } from "../Redux/actions/userActions";
import { createConfigItem } from "@babel/core";
// import { Redirect } from "react-router-dom";
import { verifyUser } from "../Redux/actions/userActions";

class Tutors extends Component {
  constructor(props) {
    super(props);

    this.togglePopOver = this.togglePopOver.bind(this);

    this.state = {
      popoverOpen: false,
      title: "Tutors",
      color: "red",
      toVerifiedId: "",
      getTutors: [],
      notes: "Veified",
      is_verified: true
    };
    console.log("construhagfjdgasa");
    this.getToken();

    this.shouldComponentRender = this.shouldComponentRender.bind(this);
  }

  // UserId = e => {
  //   this.setState({
  //     toVerifiedId: e.target.value
  //   });
  //   console.log(this.state.toVerifiedId);
  // };

  // onHandelChange = e => {
  //   e.preventDefault();
  //   const token = this.state.token;
  //   // console.log(this.state.Gender);
  //   // if (this.state.toVerifiedId) {
  //   const ToVerifiedId = {
  //     toVerifiedId: this.state.toVerifiedId
  //   };
  //   console.log(ToVerifiedId);
  //   // this.props.statusChange(ToVerifiedId, token);
  //   // }
  // };

  getToken = async () => {
    const token = await sessionStorage.getItem("userToken");
    this.setState({ token: token }, () => {
      this.props.getTutors(token);
    });
  };

  shouldComponentRender() {
    // const { pending } = this.props;
    if (this.pending === false) return false;

    return true;
  }

  togglePopOver() {
    this.setState({
      popoverOpen: !this.state.popoverOpen
    });
  }
  onHandleStatusChange = id => {
    // id.preventDefault();
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
        this.props.getTutors(token);
      }, 3000);
    }
  };
  render() {
    let tutorList =
      this.props.tutorData.length > 0 ? (
        this.props.tutorData.map((tutor, i) => {
          return (
            <tr>
              <td>{i + 1}</td>
              <td>
                <NavLink to="/tutorProfile">
                  <button type="button" className="btn ">
                    {tutor.name}
                  </button>
                </NavLink>
              </td>
              <td>
                {tutor.email}
                <br />
                {tutor.phone}
              </td>
              <td>{tutor.isVerified ? "Verified" : "Not-Verified"}</td>
              <td>{new Date(tutor.joining).toLocaleDateString()}</td>
              <td>{tutor.sessionTaken}</td>
              <td>
                <div>
                  <button
                    type="button"
                    className="btn btn-danger"
                    style={{ borderRadius: "15px" }}
                    name="toVerifiedId"
                    id="toVerifiedId"
                    onClick={() => {
                      this.onHandleStatusChange(tutor.id);
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
            <LeftSide colors={this.state.color} />
          </div>
          <div
            className="col-sm-12  col-xl-10 col-lg-10 col-md-12 col-12 PaddingZero Right"
            style={{
              paddingRight: "0",
              paddingLeft: "0",
              width: "100%"
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
                <tbody>{tutorList}</tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  // console.log(state.getTutors);

  return {
    loginUser: state.login,
    tutorData: state.getTutors.users,
    verifyData: state.verifyUser
  };
};

export default connect(mapStateToProps, { login, getTutors, verifyUser })(
  Tutors
);
