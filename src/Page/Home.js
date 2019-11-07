import React, { Component } from "react";
import "../App.css";
import profile from "../img/profile.svg";
import { BrowserRouter, Route, NavLink, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { login } from "../Redux/actions/userActions";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emailAddress: "",
      password: "",
      loginUser: "false",
      loading: false
    };
  }
  handelChange = e => {
    let target = e.target;
    let value = target.type === "checkbox" ? target.checked : target.value;
    let name = target.name;
    this.setState({
      [name]: value
    });
  };

  handelSubmit = e => {
    e.preventDefault();
    this.setState({ formValid: true, loadingVisible: true });
    if (this.state.emailAddress && this.state.password) {
      const loginData = {
        email: this.state.emailAddress,
        password: this.state.password,
        role: "ADMIN"
        // loading: true
      };
      /****login data passed to login reducer */
      this.props.login(loginData);
    }
  };

  render() {
    if (this.props.loginUser.loggedIn || sessionStorage.getItem("userToken")) {
      return <Redirect to="/Dashboard" />;
      // if (sessionStorage.getItem("userToken")) {
      //   return <Redirect to="/Dashboard" />;
      // }
    }
    return (
      <BrowserRouter>
        <Route>
          <div className="App">
            <div className="container-fluid">
              <div className="row">
                <div className="col-xl-4 col-lg-4 col-md-0 col-sm-0 col-0"></div>
                <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 DetailsContener">
                  <div className="Details">
                    <div className="Profilpic">
                      <img
                        src={profile}
                        alt="Admin"
                        width="40%"
                        height="100%"
                      />
                    </div>
                    <div className="InputDetails">
                      <div className="container">
                        {/* <form onClick={this.handelSubmit}> */}
                        <form>
                          <div className="form-group">
                            <label>Email:</label>
                            <input
                              type="text"
                              className="form-control"
                              id="emailAddress"
                              name="emailAddress"
                              placeholder="name@email.com"
                              value={this.state.emailAddress}
                              onChange={this.handelChange}
                            />
                          </div>
                          <div className="form-group">
                            <label>Password:</label>
                            <input
                              type="password"
                              className="form-control"
                              id="password"
                              name="password"
                              placeholder="Password"
                              value={this.state.password}
                              onChange={this.handelChange}
                            />
                          </div>
                          <div
                            // className="Button"
                            style={{
                              textAlign: "center",
                              paddingTop: "20%",
                              borderRadius: "20px",
                              height: "30px"
                            }}
                          >
                            <button
                              style={{ width: "100%" }}
                              type="button"
                              className="btn btn-primary ButtonWidth"
                              onClick={e => this.handelSubmit(e)}
                              value={this.state.loading}
                            >
                              Log In
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-xl-4 col-lg-4 col-md-0 col-sm-0 col-0"></div>
              </div>
            </div>
          </div>
        </Route>
      </BrowserRouter>
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
)(Home);
