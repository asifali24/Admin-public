import React, { Component } from "react";
import "../App.css";
import LeftSide from "../Component/LeftSideButton";
import Header from "../Component/Header";
import { NavLink } from "react-router-dom";

export default class TicketAdd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Add Ticket"
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
            <div style={{ marginTop: "20px", marginLeft: "50px" }}>
              <NavLink to="/ticket">
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
                marginTop: "200px"
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
                    <h3>Title</h3>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Title"
                        name="text1"
                      />
                    </div>
                    <div style={{ paddingTop: "50px" }}></div>
                    <h3>Descripition</h3>
                    <div className="form-group">
                      <textarea
                        class="form-control"
                        rows="5"
                        id="comment"
                        placeholder="Enter the Descripition"
                      ></textarea>
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
