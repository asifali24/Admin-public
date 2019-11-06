import React, { Component } from "react";
import "../App.css";
import LeftSide from "../Component/LeftSideButton";
import Header from "../Component/Header";
import { NavLink } from "react-router-dom";

export default class SchoolAdd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Add School"
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
              // backgroundColor: "pink",
              paddingRight: "0",
              paddingLeft: "0"
            }}
          >
            <Header title={this.state.title} />
            <ul className="breadcrumb">
              <li>
                <a href="/master">Master</a>
              </li>
              <li>
                <a href="/school">School</a>
              </li>
              <li>Add School</li>
            </ul>
            <div style={{ marginTop: "20px", marginLeft: "50px" }}>
              <NavLink to="/school">
                {" "}
                <button
                  type="button"
                  class="btn btn-primary"
                  style={{ width: "100px", borderRadius: "25px" }}
                >
                  Back
                </button>
              </NavLink>
            </div>
            <div
              className="SchoolContener"
              style={{
                justifyContent: "center",
                marginTop: "100px"
              }}
            >
              <div
                className="SchoolAdd"
                style={{
                  width: "500px",
                  marginLeft: "auto",
                  marginRight: "auto"
                }}
              >
                <div className="container">
                  <form action="#">
                    <h3>School Name</h3>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter The School Name"
                        name="text1"
                      />
                    </div>
                    <div style={{ paddingTop: "50px" }}></div>
                    <h3>School Location</h3>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter The School Name"
                        name="text1"
                      />
                    </div>

                    <div style={{ paddingTop: "50px" }}></div>
                    <h3>School Domain</h3>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter The School Name"
                        name="text1"
                      />
                    </div>

                    <div
                      style={{
                        paddingTop: "50px"
                      }}
                      className="row"
                    >
                      <div style={{ width: "50%" }}>
                        <button
                          type="submit"
                          class="btn "
                          style={{
                            marginLeft: "45%",
                            borderRadius: "15px",
                            backgroundColor: "#ff0042",
                            color: "white"
                          }}
                        >
                          Submit
                        </button>
                      </div>
                      <div style={{ width: "50%" }}>
                        <button
                          type="submit"
                          class="btn btn-danger"
                          style={{
                            marginLeft: "20%",
                            borderRadius: "15px",
                            backgroundColor: "white",
                            color: "#ff0042"
                            // borderWidth: "1px solid"
                          }}
                        >
                          Cancle
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
