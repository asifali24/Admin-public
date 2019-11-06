import React, { Component } from "react";
import "../App.css";
import LeftSide from "../Component/LeftSideButton";
import Header from "../Component/Header";
import { NavLink } from "react-router-dom";

export default class Master extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Master"
    };
  }
  render() {
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

            <div className="box-wrap col-sm-12  col-xl-12 col-lg-10 col-md-12 col-12 row">
              <a
                href="/school"
                style={{
                  width: "250px",
                  height: "250px",
                  margin: "20px",
                  color: "white"
                }}
              >
                <div className="box OneLine">School</div>
              </a>
              <a
                href="/subject"
                style={{
                  width: "250px",
                  height: "250px",
                  margin: "20px",
                  color: "white"
                }}
              >
                <div className="box OneLine">
                  <p>Subject</p>
                </div>
              </a>
              <a
                href="/master/Gender"
                style={{
                  width: "250px",
                  height: "250px",
                  margin: "20px",
                  color: "white"
                }}
              >
                <div className="box OneLine">
                  <p>Gender</p>
                </div>
              </a>
              <a
                href="/master/supporttickettype"
                style={{
                  width: "250px",
                  height: "250px",
                  margin: "20px",
                  color: "white"
                }}
              >
                <div className="box TwoLine">
                  <p>Support Ticket Type</p>
                </div>
              </a>
              <a
                href="/master/SupportTIcketStatus"
                style={{
                  width: "250px",
                  height: "250px",
                  margin: "20px",
                  color: "white"
                }}
              >
                <div className="box TwoLine">
                  <p>Support Ticket Status</p>
                </div>
              </a>
              <a
                href="/master/PreferredLocationCategory"
                style={{
                  width: "250px",
                  height: "250px",
                  margin: "20px",
                  color: "white"
                }}
              >
                <div className="box" style={{ paddingTop: "70px" }}>
                  <p>Prefered Location Category</p>
                </div>
              </a>
              <a
                href="/master/PriceBucket"
                style={{
                  width: "250px",
                  height: "250px",
                  margin: "20px",
                  color: "white"
                }}
              >
                <div className="box OneLine">
                  <p>Price Bucket</p>
                </div>
              </a>
              <a
                href="/master/PaymentMode"
                style={{
                  width: "250px",
                  height: "250px",
                  margin: "20px",
                  color: "white"
                }}
              >
                <div className="box OneLine">
                  <p>Payment Mode</p>
                </div>
              </a>
              <a
                href="/master/UserROle"
                style={{
                  width: "250px",
                  height: "250px",
                  margin: "20px",
                  color: "white"
                }}
              >
                <div className="box OneLine">
                  <p>User Role</p>
                </div>
              </a>
              <a
                href="/master/ProfileStatus"
                style={{
                  width: "250px",
                  height: "250px",
                  margin: "20px",
                  color: "white"
                }}
              >
                <div className="box OneLine">
                  <p>Profile Status</p>
                </div>
              </a>
              <a
                href="/master/Apps"
                style={{
                  width: "250px",
                  height: "250px",
                  margin: "20px",
                  color: "white"
                }}
              >
                <div className="box OneLine">
                  <p>Apps</p>
                </div>
              </a>
              <a
                href="/master/TutorTypes"
                style={{
                  width: "250px",
                  height: "250px",
                  margin: "20px",
                  color: "white"
                }}
              >
                <div className="box OneLine">
                  <p>Tutor Types</p>
                </div>
              </a>
              <a
                href="/master/Legale"
                style={{
                  width: "250px",
                  height: "250px",
                  margin: "20px",
                  color: "white"
                }}
              >
                <div className="box OneLine">
                  <p>Legals</p>
                </div>
              </a>
              <a
                href="/master/Platform"
                style={{
                  width: "250px",
                  height: "250px",
                  margin: "20px",
                  color: "white"
                }}
              >
                <div className="box OneLine">
                  <p>Platform</p>
                </div>
              </a>
              <a
                href="/master/TutorSessionMaster"
                style={{
                  width: "250px",
                  height: "250px",
                  margin: "20px",
                  color: "white"
                }}
              >
                <div className="box OneLine">
                  <p>Tutor Session</p>
                </div>
              </a>

              <a
                href="/master/admin"
                style={{
                  width: "250px",
                  height: "250px",
                  margin: "20px",
                  color: "white"
                }}
              >
                <div className="box OneLine">
                  <p>Add Admin</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
