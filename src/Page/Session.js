import React, { Component } from "react";
import "../App.css";
import LeftSide from "../Component/LeftSideButton";
import Header from "../Component/Header";
import ButtonsGroup from "../Component/ButtonsGroup";
import { connect } from "react-redux";
import { login } from "../Redux/actions/userActions";
import { Redirect } from "react-router-dom";

class Session extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Session"
    };
  }
  render() {
    if (!sessionStorage.getItem("userToken")) {
      return <Redirect to="/" />;
    }
    const sessions = [
      {
        id: "01",
        tutor: "Andrew sweat",
        StudentDetails: "rtgfewds",
        Date: "07/09/2019",
        payment: "$65",
        Subjects: "English , Maths",
        status: "Active"
      },
      {
        id: "02",
        tutor: "Andrew",
        StudentDetails: "rtgfewds",
        Date: "07/09/2019",
        payment: "$65",
        Subjects: "English , Maths",
        status: "Active"
      },
      {
        id: "03",
        tutor: "Andrew",
        StudentDetails: "rtgfewds",
        Date: "07/09/2019",
        payment: "$65",
        Subjects: "English , Maths",
        status: "Active"
      },
      {
        id: "04",
        tutor: "Andrew",
        StudentDetails: "rtgfewds",
        Date: "07/09/2019",
        payment: "$65",
        Subjects: "English , Maths",
        status: "Active"
      }
    ];
    const sessionList = sessions.map(session => (
      <tr>
        <td>{session.id}</td>
        <td>{session.tutor}</td>
        <td>{session.StudentDetails}</td>
        <td>{session.status}</td>
        <td>{session.Date}</td>
        <td>{session.payment}</td>
        <td>{session.Subjects}</td>
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
                    <th>Tutor</th>
                    <th>Student Details</th>
                    <th>Status</th>
                    <th>Date</th>
                    <th>Payment</th>
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
    loginUser: state.login
  };
};

export default connect(
  mapStateToProps,
  { login }
)(Session);
