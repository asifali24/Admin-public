import React, { Component } from "react";
import "../App.css";
import LeftSide from "../Component/LeftSideButton";
import Header from "../Component/Header";
import { NavLink } from "react-router-dom";

export default class SupportTIcketStatus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Support Ticket Status"
    };
  }
  render() {
    const Ticket = [
      {
        TicketStatus: "Pending",
        id: "01"
      },
      { TicketStatus: "Approved", id: "02" }
    ];
    const TicketList = Ticket.map(tic => (
      <tr style={{ textAlign: "center" }}>
        <td>{tic.id}</td>
        <td>{tic.TicketStatus}</td>
      </tr>
    ));
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
              <li>Support Ticket Status</li>
            </ul>
            <div
              style={{
                width: "100%",
                paddingLeft: "50px",
                paddingTop: "50px"
              }}
            >
              <NavLink to="/master/SupportTIcketStatus/AddSupportTIcketStatus">
                <button
                  type="button"
                  className="btn btn-primary"
                  style={{ width: "150px", borderRadius: "25px" }}
                >
                  Add Status
                </button>
              </NavLink>
            </div>
            <div>
              <div className="tableContener">
                <table class="table">
                  <thead>
                    <tr style={{ textAlign: "center" }}>
                      <th scope="col">Id</th>
                      <th scope="col">Status</th>
                    </tr>
                  </thead>
                  <tbody>{TicketList}</tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
