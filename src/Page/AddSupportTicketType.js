import React, { Component } from "react";
import "../App.css";
import LeftSide from "../Component/LeftSideButton";
import Header from "../Component/Header";
import { NavLink } from "react-router-dom";
import { addTickets } from "../Redux/actions/userActions";
import { connect } from "react-redux";

class AddSupportTicketType extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Add Support Ticket Type",
      ticket: ""
    };
    this.getToken();
  }
  getToken = async () => {
    const token = await sessionStorage.getItem("userToken");
    this.setState({ token: token });
  };
  ticketAdd = e => {
    let target = e.target;
    let value = target.type === "checkbox" ? target.checked : target.value;
    let name = target.name;
    this.setState({
      [name]: value
    });
  };

  onHandelChange = e => {
    e.preventDefault();
    const token = this.state.token;
    console.log(token + "******");

    if (this.state.ticket) {
      const ticket = {
        ticket_type: this.state.ticket
      };
      this.props.addTickets(ticket, token);
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
                <a href="/master/supporttickettype">Support Ticket Type</a>
              </li>
              <li>Add Support Ticket Type</li>
            </ul>
            <div style={{ marginTop: "20px", marginLeft: "50px" }}>
              <NavLink to="/master/Gender">
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
                    <h3>Add Support Ticket Type</h3>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter The Support Ticket Type"
                        name="ticket"
                        id="ticket"
                        value={this.state.ticket}
                        onChange={this.ticketAdd}
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
    Ticket: state.ticket
  };
};
export default connect(
  mapStateToProps,
  { addTickets }
)(AddSupportTicketType);
