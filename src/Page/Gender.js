import React, { Component } from "react";
import "../App.css";
import LeftSide from "../Component/LeftSideButton";
import Header from "../Component/Header";
import { NavLink } from "react-router-dom";
import { login, getGender } from "../Redux/actions/userActions";
import { connect } from "react-redux";
import generate from "@babel/generator";

class Gender extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Gender"
    };
    this.getToken();
    this.shouldComponentRender = this.shouldComponentRender.bind(this);
  }

  getToken = async () => {
    const token = await sessionStorage.getItem("userToken");
    this.setState({ token: token }, () => {
      this.props.getGender(token);
    });
  };

  shouldComponentRender() {
    if (this.pending === false) return false;
    return true;
  }
  render() {
    let genderList =
      this.props.genders.length > 0 ? (
        this.props.genders.map((genders, i) => {
          // console.log(genders, "------------------+++++++++++++++");
          return (
            <tr style={{ textAlign: "center" }}>
              <td>{++i}</td>
              <td>{genders.type}</td>
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
            <ul className="breadcrumb">
              <li>
                <a href="/master">Master</a>
              </li>
              <li>Gender</li>
            </ul>
            <div
              style={{
                width: "100%",
                paddingLeft: "50px",
                paddingTop: "50px"
              }}
            >
              <NavLink to="/master/Gender/add">
                <button
                  type="button"
                  className="btn btn-primary"
                  style={{ width: "150px", borderRadius: "25px" }}
                >
                  Add Gender
                </button>
              </NavLink>
            </div>
            <div className="tableContener">
              <table class="table">
                <thead>
                  <tr style={{ textAlign: "center" }}>
                    <th>sl.No</th>
                    <th>Gender</th>
                  </tr>
                </thead>
                <tbody>{genderList}</tbody>
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
    genders: state.getGender.gender,
    loading: state.loading
  };
};

export default connect(mapStateToProps, { login, getGender })(Gender);
