import React, { Component } from "react";
import {
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import tutree from "../img/tutree.svg";
import "../App.css";
import profile from "../img/profile.svg";
import Tutors from "../Component/Tutor";
import {
  BrowserRouter,
  Route,
  Switch,
  NavLink,
  Redirect
} from "react-router-dom";

export default class LeftSideButton extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.changeHeadingDashboard = this.changeHeadingDashboard.bind(this);
    this.changeHeadingSession = this.changeHeadingSession.bind(this);
    this.changeHeadingStudent = this.changeHeadingStudent.bind(this);
    this.changeHeadingTutor = this.changeHeadingTutor.bind(this);
    this.changeHeadingSchool = this.changeHeadingSchool.bind(this);
    this.changeHeadingTicket = this.changeHeadingTicket.bind(this);
    this.changeHeadingMaster = this.changeHeadingMaster.bind(this);
    this.changeHeadingSubject = this.changeHeadingSubject.bind(this);
    this.changeHeadingSubs = this.changeHeadingSubs.bind(this);
    this.changeHeadingSubOffer = this.changeHeadingSubOffer.bind(this);
    this.deleteToken = this.deleteToken.bind(this);

    this.state = {
      dropdownOpen: false,
      StatusdropdownOpen: false,
      SubjectdropdownOpen: false,
      LastUpdatedropdownOpen: false,
      Heading: "Dashboard"
    };
  }
  changeHeadingSubs() {
    this.setState({
      Heading: "Dashboard"
    });
  }
  changeHeadingSubOffer() {
    this.setState({
      Heading: "Dashboard"
    });
  }
  changeHeadingDashboard() {
    this.setState({
      Heading: "Dashboard"
    });
  }
  changeHeadingSession() {
    this.setState({
      Heading: "Session"
    });
  }
  changeHeadingStudent() {
    this.setState({
      Heading: "Student"
    });
  }
  changeHeadingTutor() {
    this.setState({
      Heading: "Tutors"
    });
  }
  changeHeadingSchool() {
    this.setState({
      Heading: "School"
    });
  }
  changeHeadingTicket() {
    this.setState({
      Heading: "Ticket"
    });
  }
  changeHeadingMaster() {
    this.setState({
      Heading: "Ticket"
    });
  }
  changeHeadingSubject() {
    this.setState({
      Heading: "Subject"
    });
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  deleteToken() {
    sessionStorage.removeItem("userToken");
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div style={{ width: "100%" }}>
            <NavLink to="/Dashboard">
              <div className="Logo">
                <img src={tutree} height="60%" width="80%" />
              </div>
            </NavLink>
            <div className=" column">
              <div className="column">
                <NavLink to="/dashboard">
                  <button
                    type="button"
                    className="btn  NavButton"
                    style={{
                      // marginTop: "5px",
                      borderRadius: "50px",
                      textAlign: "Left",
                      fontSize: "20px",
                      fontWeight: "800",
                      paddingLeft: "20px",
                      color: "grey",
                      width: "100%"
                      // backgroundColor: "red"
                    }}
                    onClick={() => this.changeHeadingDashboard()}
                  >
                    Dashboard
                  </button>
                </NavLink>
                <NavLink to="/session">
                  <button
                    type="button"
                    className="btn NavButton"
                    style={{
                      borderRadius: "50px",
                      textAlign: "Left",
                      fontSize: "20px",
                      fontWeight: "800",
                      paddingLeft: "20px",
                      color: "grey",
                      width: "100%"
                    }}
                    onClick={() => this.changeHeadingSession()}
                  >
                    Session
                  </button>
                </NavLink>
                <NavLink to="/student">
                  <button
                    type="button"
                    className="btn  NavButton"
                    style={{
                      borderRadius: "50px",
                      textAlign: "Left",
                      fontSize: "20px",
                      fontWeight: "800",
                      paddingLeft: "20px",
                      color: "grey",
                      width: "100%"
                    }}
                    onClick={() => this.changeHeadingStudent()}
                  >
                    Student
                  </button>
                </NavLink>
                <NavLink to="/tutors">
                  <button
                    type="button"
                    className="btn  NavButton"
                    style={{
                      borderRadius: "50px",
                      textAlign: "Left",
                      fontSize: "20px",
                      fontWeight: "800",
                      paddingLeft: "20px",
                      color: "grey",
                      width: "100%"
                    }}
                    onClick={() => this.changeHeadingTutor()}
                  >
                    Tutors
                  </button>
                </NavLink>
                <NavLink to="/ticket">
                  <button
                    className="btn  NavButton"
                    style={{
                      borderRadius: "50px",
                      textAlign: "Left",
                      fontSize: "20px",
                      fontWeight: "800",
                      paddingLeft: "20px",
                      color: "grey",
                      width: "100%"
                    }}
                    onClick={() => this.changeHeadingTicket()}
                  >
                    Ticket
                  </button>
                </NavLink>
                <NavLink to="/Subscription">
                  <button
                    className="btn  NavButton"
                    style={{
                      borderRadius: "50px",
                      textAlign: "Left",
                      fontSize: "20px",
                      fontWeight: "800",
                      paddingLeft: "20px",
                      color: "grey",
                      width: "100%"
                    }}
                    onClick={() => this.changeHeadingSubs()}
                  >
                    Subscription
                  </button>
                </NavLink>
                <NavLink to="/SubscriptionOffer">
                  <button
                    className="btn  NavButton"
                    style={{
                      borderRadius: "50px",
                      textAlign: "Left",
                      fontSize: "20px",
                      fontWeight: "800",
                      paddingLeft: "20px",
                      color: "grey",
                      width: "100%"
                    }}
                    onClick={() => this.changeHeadingSubOffer()}
                  >
                    Subscription Offer
                  </button>
                </NavLink>
                <NavLink to="/master">
                  <button
                    className="btn  NavButton"
                    style={{
                      borderRadius: "50px",
                      textAlign: "Left",
                      fontSize: "20px",
                      fontWeight: "800",
                      paddingLeft: "20px",
                      color: "grey",
                      width: "100%"
                    }}
                    onClick={() => this.changeHeadingMaster()}
                  >
                    Master
                  </button>
                </NavLink>
                <NavLink to="/">
                  <button
                    className="btn  NavButton"
                    style={{
                      borderRadius: "50px",
                      textAlign: "Left",
                      fontSize: "20px",
                      fontWeight: "800",
                      paddingLeft: "20px",
                      color: "#ff0048",
                      width: "100%"
                    }}
                    onClick={() => this.deleteToken()}
                  >
                    Log out
                  </button>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
// const mapStateToProps = state => {
//   return {
//     loginUser: state.login
//   };
// };

// export default connect(
//   mapStateToProps,
//   { login }
// )(Home);
