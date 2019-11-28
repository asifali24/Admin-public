import React, { Component } from "react";
import "../App.css";
import LeftSide from "../Component/LeftSideButton";
import Header from "../Component/Header";
import { NavLink } from "react-router-dom";
import { addSubjects } from "../Redux/actions/userActions";
import { connect } from "react-redux";

class AddSubjects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Add Subject",
      school: "",
      subject_name: "",
      subject_course: ""
    };
    this.getToken();
  }
  getToken = async () => {
    const token = await sessionStorage.getItem("userToken");
    this.setState({ token: token });
    console.log(token);
  };
  AddSubject = e => {
    let target = e.target;
    let value = target.type === "checkbox" ? target.checked : target.value;
    let name = target.name;
    this.setState({
      [name]: value
    });
  };
  onHandelChange = e => {
    console.log("***********" + this.state.school);
    e.preventDefault();
    const token = this.state.token;
    if (
      this.state.school &&
      this.state.subject_name &&
      this.state.subject_course
    ) {
      const Subject = {
        school: this.state.school,
        subject_name: this.state.subject_name,
        subject_course: this.state.subject_course
      };
      this.props.addSubjects(Subject, token);
    } else {
      console.log("not Aded");
    }
  };
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
            <ul className="breadcrumb">
              <li>
                <a href="/master">Master</a>
              </li>
              <li>
                <a href="/Subject">Subject</a>
              </li>
              <li>Add subject</li>
            </ul>
            <div style={{ marginTop: "20px", marginLeft: "50px" }}>
              <NavLink to="/subject">
                <button
                  type="button"
                  class="btn btn-primary"
                  style={{
                    width: "100px",
                    borderRadius: "25px"
                  }}
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
                  <form>
                    <h3>School Name</h3>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter The School Name"
                        name="school"
                        value={this.state.school}
                        onChange={this.AddSubject}
                      />
                    </div>
                    <div style={{ paddingTop: "50px" }}></div>

                    <h3>Subject Name</h3>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter The Subject Name"
                        name="subject_name"
                        value={this.state.subject_name}
                        onChange={this.AddSubject}
                      />
                    </div>
                    <div style={{ paddingTop: "50px" }}></div>
                    <h3>course Name</h3>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter The course Name"
                        name="subject_course"
                        value={this.state.subject_course}
                        onChange={this.AddSubject}
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
                            color: "white",
                            width: "100px"
                          }}
                          onClick={this.onHandelChange}
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
                            color: "#ff0042",
                            width: "100px"
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

const mapStateToProps = state => {
  return {
    school: state.school,
    subject_name: state.subject_name,
    subject_course: state.subject_course
  };
};
export default connect(mapStateToProps, { addSubjects })(AddSubjects);
