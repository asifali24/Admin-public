import React, { Component } from "react";
import "../App.css";
import LeftSide from "../Component/LeftSideButton";
import Header from "../Component/Header";
import ButtonsGroup from "../Component/ButtonsGroup";
import { connect } from "react-redux";
import { login } from "../Redux/actions/userActions";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
// import Routes from "./Routes";
class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Dashboard"
    };
  }

  render() {
    // if (sessionStorage.getItem("userToken")) {
    //   Routes;
    // }
    if (!sessionStorage.getItem("userToken")) {
      return <Redirect to="/" />;
    }
    const dasbord = [
      {
        totalIncome: "$865849",
        totalTutors: "1450",
        totalStudents: "900",
        totalSession: "98756"
      }
    ];
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
              paddingLeft: "0",
              width: "100%"
            }}
          >
            <Header title={this.state.title} />
            <div className="container-fluid">
              <div className="row">
                <div className="col-xl-12" style={{ marginTop: "100px" }}>
                  <div
                    className="circle small"
                    style={{ marginLeft: "auto", marginRight: "auto" }}
                  >
                    <h3>Total Earnings</h3>
                    <h1>{dasbord.map(item => item.totalIncome)}</h1>
                  </div>
                </div>
              </div>
            </div>
            <div class="container-fluid">
              <div
                className="row"
                style={{
                  marginTop: "90px",
                  textAlign: "center",
                  paddingTop: "10px"
                }}
              >
                <div className="col-xl-4">
                  <div
                    style={{
                      width: "250px",
                      backgroundColor: "white",
                      height: "250px",
                      marginLeft: "auto",
                      marginRight: "auto",
                      zIndex: "65",
                      border: "1px solid grey",
                      boxShadow: "5px 5px grey"
                    }}
                  >
                    <div
                      style={{
                        fontSize: "30px",
                        paddingTop: "50px",
                        color: "#ff0042"
                      }}
                    >
                      Total Students
                    </div>
                    <div
                      style={{
                        fontSize: "40px",
                        fontWeight: "bolder",
                        paddingTop: "20px",
                        color: "grey"
                      }}
                    >
                      {dasbord.map(item => item.totalStudents)}
                    </div>
                  </div>
                </div>
                <div className="col-xl-4">
                  <div
                    style={{
                      width: "250px",
                      backgroundColor: "white",
                      height: "250px",
                      marginLeft: "auto",
                      marginRight: "auto",
                      zIndex: "65",
                      border: "1px solid grey",
                      boxShadow: "5px 5px grey"
                    }}
                  >
                    <div
                      style={{
                        fontSize: "30px",
                        paddingTop: "50px",
                        color: "#ff0042"
                      }}
                    >
                      Total Sessions
                    </div>
                    <div
                      style={{
                        fontSize: "40px",
                        fontWeight: "bolder",
                        paddingTop: "20px",
                        color: "grey"
                      }}
                    >
                      {dasbord.map(item => item.totalSession)}
                    </div>
                  </div>
                </div>
                <div className="col-xl-4">
                  <div
                    style={{
                      width: "250px",
                      backgroundColor: "white",
                      height: "250px",
                      marginLeft: "auto",
                      marginRight: "auto",
                      zIndex: "65",
                      border: "1px solid grey",
                      boxShadow: "5px 5px grey"
                    }}
                  >
                    <div
                      style={{
                        fontSize: "30px",
                        paddingTop: "50px",
                        color: "#ff0042"
                      }}
                    >
                      Total Tutors
                    </div>
                    <div
                      style={{
                        fontSize: "40px",
                        fontWeight: "bolder",
                        paddingTop: "20px",
                        color: "grey"
                      }}
                    >
                      {dasbord.map(item => item.totalTutors)}
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
const mapStateToProps = state => {
  return {
    loginUser: state.login
  };
};

export default connect(
  mapStateToProps,
  { login }
)(Dashboard);
