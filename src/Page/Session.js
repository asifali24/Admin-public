import React, { Component } from "react";
import "../App.css";
import LeftSide from "../Component/LeftSideButton";
import Header from "../Component/Header";
import ButtonsGroup from "../Component/ButtonsGroup";
import { connect } from "react-redux";
import { login, getSession } from "../Redux/actions/userActions";
import { Redirect } from "react-router-dom";

class Session extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Session",
      getSession: [],
      id: "",
      tutor: "",
      StudentDetails: "",
      payment: "",
      Subjects: "",
      status: ""
    };
    this.getToken();
    this.shouldComponentRender = this.shouldComponentRender.bind(this);
  }

  getToken = async () => {
    const token = await sessionStorage.getItem("userToken");
    this.setState({ token: token }, () => {
      this.props.getSession(token);
    });
  };

  shouldComponentRender() {
    if (this.pending === false) return false;
    return true;
  }

  render() {
    if (!sessionStorage.getItem("userToken")) {
      return <Redirect to="/" />;
    }
    let sessionList =
      this.props.sessionLists.length > 0 ? (
        this.props.sessionLists.map((allSession, i) => {
          return (
            <tr>
              <td>{i + 1}</td>
              <td>{allSession.tutor}</td>
              <td>{allSession.student}</td>
              <td>{allSession.sessionStatus}</td>
              <td>
                {new Date(allSession.tutoringSessionDate).toLocaleDateString()}
              </td>
              <td>{allSession.paymentMode}</td>
              <td>{allSession.subject}</td>
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
                    <th>Id</th>
                    <th>Tutor Name</th>
                    <th>Student Name</th>
                    <th>Status</th>
                    <th>Date</th>
                    <th>Payment Mode</th>
                    <th>Subject(s)</th>
                  </tr>
                </thead>
                <tbody>{sessionList}</tbody>
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
    loginUser: state.login,
    sessionLists: state.getSession.sessions
  };
};

export default connect(mapStateToProps, { login, getSession })(Session);
