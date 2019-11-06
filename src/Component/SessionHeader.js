import React, { Component } from "react";

export default class SessionHeader extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid">
          <div className="row">
            <div
              className="col-xl-3"
              style={{ backgroundColor: "#ff0042", height: "250px" }}
            >
              <a
                href="/student/StudentSession"
                className="previous"
                style={{ color: "white" }}
              >
                &laquo; Back
              </a>
              <div style={{ marginLeft: "15%", marginTop: "15%" }}>
                <div
                  style={{
                    fontSize: "35px",
                    color: "white",
                    fontWeight: "bolder"
                  }}
                >
                  Session ID
                </div>
                <div style={{ fontSize: "25px", color: "white" }}>
                  {" "}
                  6565-554-545-6562882682
                </div>
              </div>
            </div>
            <div
              className="col-xl-9"
              style={{
                backgroundColor: "#ff0042"
              }}
            >
              <div
                style={{
                  width: "1100px",
                  height: "250px",
                  // backgroundColor: "red",
                  marginLeft: "auto",
                  marginRight: "0px",
                  paddingTop: "4%",
                  maxWidth: "100%"
                }}
              >
                <div
                  style={{
                    width: "460px",
                    height: "150px",
                    backgroundColor: "blue",
                    float: "left",
                    zIndex: "2",
                    borderRadius: "25px"
                  }}
                >
                  <div
                    style={{
                      width: "100px",
                      backgroundColor: "red",
                      height: "100px",
                      float: "left",
                      borderRadius: "50%",
                      marginLeft: "20px",
                      marginTop: "10px"
                    }}
                  ></div>
                  <div
                    style={{
                      width: "70%",
                      // backgroundColor: "yellow",
                      height: "150px",
                      float: "left",
                      borderRadius: "25px",
                      paddingTop: "10%",
                      paddingLeft: "5%"
                    }}
                  >
                    <div style={{ fontWeight: "900" }}>
                      edrftgyhuijoijhyugtrd tfcfvghujiok
                    </div>
                    <div>gbhfyfyyg@gnuyguyguyguygyu.cokjk</div>
                  </div>
                </div>
                <div
                  style={{
                    width: "12%",
                    height: "150px",
                    // backgroundColor: "blue",
                    float: "left"
                  }}
                ></div>
                <div
                  style={{
                    width: "460px",
                    height: "150px",
                    backgroundColor: "blue",
                    float: "left",
                    zIndex: "2",
                    borderRadius: "25px"
                  }}
                >
                  <div
                    style={{
                      width: "100px",
                      backgroundColor: "red",
                      height: "100px",
                      float: "left",
                      borderRadius: "50%",
                      marginLeft: "20px",
                      marginTop: "10px"
                    }}
                  ></div>
                  <div
                    style={{
                      width: "70%",
                      // backgroundColor: "yellow",
                      height: "150px",
                      float: "left",
                      borderRadius: "25px",
                      paddingTop: "10%",
                      paddingLeft: "5%"
                    }}
                  >
                    <div style={{ fontWeight: "900" }}>
                      edrftgyhuijoijhyugtrd tfcfvghujiok
                    </div>
                    <div>gbhfyfyyg@gnuyguyguyguygyu.cokjk</div>
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
