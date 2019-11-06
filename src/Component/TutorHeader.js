import React, { Component } from "react";
import "../App.css";
import profile from "../img/profile.svg";
import { NavLink } from "react-router-dom";

export default class TutorHeader extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid">
          <div>
            <div
              className="col-sm-12"
              style={{
                backgroundColor: "#fd5b5b",
                height: "250px",
                paddingLeft: "0",
                paddingRight: "0",
                marginRight: "0"
              }}
            >
              <div className="row">
                <div
                  className="HeaderRight"
                  style={{ backgroundColor: "ff0042" }}
                >
                  <div
                    style={{
                      height: "170px",
                      backgroundColor: "#fd5b5b",
                      width: "100%"
                    }}
                  >
                    <a
                      href="/tutors"
                      className="previous"
                      style={{ color: "white" }}
                    >
                      &laquo; Back
                    </a>
                    <div style={{ width: "100%" }}>
                      <div
                        style={{
                          width: "20%",
                          //   backgroundColor: "blue",
                          float: "left",
                          height: "120px"
                        }}
                      >
                        <img src={profile} width="100%" height="100%" />
                      </div>
                      <div
                        style={{
                          width: "80%",
                          //   backgroundColor: "red",
                          float: "left",
                          height: "120px"
                        }}
                      >
                        <div
                          style={{
                            fontSize: "35px",
                            fontWeight: "bolder",
                            paddingTop: "3%",
                            color: "white"
                          }}
                        >
                          Kevin
                        </div>
                        <div style={{ fontSize: "25px", color: "white" }}>
                          kevin@mail.com
                        </div>
                        <div style={{ fontSize: "25px", color: "white" }}>
                          +919563178564
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    //   className="row"
                    style={{
                      height: "80px",
                      backgroundColor: "#fd5b5b",
                      width: "100%",
                      paddingLeft: "5%",
                      // fontSize: "0px",
                      paddingTop: "4%"
                    }}
                  >
                    <NavLink to="/tutorProfile">
                      <button
                        type="button"
                        class="btn"
                        style={{
                          fontSize: "150%",
                          color: "white",
                          width: "25%"
                          // backgroundColor: "blue"
                          //   paddingRight: "20%"
                        }}
                      >
                        Profile
                      </button>
                    </NavLink>
                    <NavLink to="/tutorSession">
                      <button
                        type="button"
                        class="btn"
                        style={{
                          fontSize: "150%",
                          color: "white",
                          width: "25%"
                          //   paddingRight: "20%"
                        }}
                      >
                        Session
                      </button>
                    </NavLink>
                    <NavLink to="/tutors/tutor-payment">
                      <button
                        type="button"
                        class="btn"
                        style={{
                          fontSize: "150%",
                          color: "white",
                          width: "25%",
                          paddingRight: "0px"
                        }}
                      >
                        Payment
                      </button>
                      <NavLink to="/tutors/tutor-ticket">
                        <button
                          type="button"
                          class="btn"
                          style={{
                            fontSize: "150%",
                            color: "white",
                            width: "25%"
                            //   paddingRight: "20%"
                          }}
                        >
                          Ticket
                        </button>
                      </NavLink>
                    </NavLink>
                  </div>
                </div>
                <div className="HeaderLeft" style={{ textAlign: "left" }}>
                  <div style={{ width: "100%", textAlign: "left" }}>
                    <div className="Profilecard">
                      {" "}
                      <div className="InnerProfile">
                        <div className="CardHeader">
                          <div
                            style={{
                              float: "left",
                              width: "50%",
                              color: "white"
                            }}
                          >
                            {" "}
                            Profile
                          </div>
                          <div
                            style={{
                              float: "left",
                              width: "50%",
                              textAlign: "right",
                              color: "white"
                            }}
                          >
                            {" "}
                            40%
                          </div>
                        </div>
                        <div className="CardBody">
                          <div>
                            <div
                              style={{
                                float: "left",
                                width: "50%",
                                color: "white"
                              }}
                            >
                              {" "}
                              Basic info
                            </div>
                            <div
                              style={{
                                float: "left",
                                width: "50%",
                                textAlign: "right",
                                color: "white"
                              }}
                            >
                              {" "}
                              40%
                            </div>
                          </div>
                          <div>
                            <div
                              style={{
                                float: "left",
                                width: "70%",
                                color: "white"
                              }}
                            >
                              {" "}
                              Education Details
                            </div>
                            <div
                              style={{
                                float: "left",
                                width: "30%",
                                textAlign: "right",
                                color: "white"
                              }}
                            >
                              {" "}
                              40%
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="sessioncard">
                      <div className="InnerProfile">
                        <div className="CardHeader">
                          <div
                            style={{
                              float: "left",
                              width: "80%",
                              color: "white"
                            }}
                          >
                            {" "}
                            Session
                          </div>
                          <div
                            style={{
                              float: "left",
                              width: "20%",
                              textAlign: "right",
                              color: "white"
                            }}
                          >
                            {" "}
                            56
                          </div>
                        </div>
                        <div className="CardBody">
                          <div>
                            <div
                              style={{
                                float: "left",
                                width: "80%",
                                color: "white"
                              }}
                            >
                              {" "}
                              Completer
                            </div>
                            <div
                              style={{
                                float: "left",
                                width: "20%",
                                textAlign: "right",
                                color: "white"
                              }}
                            >
                              {" "}
                              50
                            </div>
                          </div>
                          <div>
                            <div
                              style={{
                                float: "left",
                                width: "80%",
                                color: "white"
                              }}
                            >
                              {" "}
                              Rejected
                            </div>
                            <div
                              style={{
                                float: "left",
                                width: "20%",
                                textAlign: "right",
                                color: "white"
                              }}
                            >
                              {" "}
                              06
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="TicketCard">
                      <div className="InnerProfile">
                        <div className="CardHeader">
                          <div
                            style={{
                              float: "left",
                              width: "80%",
                              color: "white"
                            }}
                          >
                            {" "}
                            Ticket
                          </div>
                          <div
                            style={{
                              float: "left",
                              width: "20%",
                              textAlign: "right",
                              color: "white"
                            }}
                          >
                            {" "}
                            20
                          </div>
                        </div>
                        <div className="CardBody">
                          <div>
                            <div
                              style={{
                                float: "left",
                                width: "80%",
                                color: "white"
                              }}
                            >
                              {" "}
                              Resolved
                            </div>
                            <div
                              style={{
                                float: "left",
                                width: "20%",
                                textAlign: "right",
                                color: "white"
                              }}
                            >
                              {" "}
                              15
                            </div>
                          </div>
                          <div>
                            <div
                              style={{
                                float: "left",
                                width: "80%",
                                color: "white"
                              }}
                            >
                              {" "}
                              Unresolved
                            </div>
                            <div
                              style={{
                                float: "left",
                                width: "20%",
                                textAlign: "right",
                                color: "white"
                              }}
                            >
                              {" "}
                              05
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
