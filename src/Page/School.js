import React, { Component } from "react";
import "../App.css";
import LeftSide from "../Component/LeftSideButton";
import Header from "../Component/Header";
import { NavLink } from "react-router-dom";
import { getSchool, login } from "../Redux/actions/userActions";
import { connect } from "react-redux";

class School extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "School"
    };
    this.getToken();

    this.shouldComponentRender = this.shouldComponentRender.bind(this);
  }

  getToken = async () => {
    const token = await sessionStorage.getItem("userToken");
    this.setState({ token: token }, () => {
      this.props.getSchool(token);
    });
  };

  shouldComponentRender() {
    if (this.pending === false) return false;
    return true;
  }

  render() {
    let schoolList =
      this.props.schools.length > 0 ? (
        this.props.schools.map((schools, i) => {
          return (
            <tr style={{ textAlign: "center" }}>
              <td>{++i}</td>
              <td>{schools.name}</td>
              <td>{schools.address}</td>
              <td>{schools.email}</td>
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

              <li style={{}}>School</li>
            </ul>
            <div
              style={{
                width: "100%",
                paddingLeft: "50px",
                paddingTop: "50px"
              }}
            >
              <NavLink to="/school/Add">
                <button
                  type="button"
                  className="btn btn-primary"
                  style={{ width: "150px", borderRadius: "25px" }}
                >
                  Add School
                </button>
              </NavLink>
            </div>
            <div className="tableContener">
              <table class="table">
                <thead>
                  <tr style={{ textAlign: "center" }}>
                    <th>S.No</th>
                    <th>School Name</th>
                    <th>Address</th>
                    <th>Domain</th>
                  </tr>
                </thead>
                <tbody>{schoolList}</tbody>
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
    schools: state.getSchool.school,
    loading: state.loading
  };
};

export default connect(mapStateToProps, { login, getSchool })(School);
