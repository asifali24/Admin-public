import React, { Component } from "react";
import "../App.css";
import { NavLink } from "react-router-dom";

export default class TicketButton extends Component {
  render() {
    return (
      <div style={{ width: "100%", paddingLeft: "2%", paddingTop: "2%" }}>
        <NavLink to="/ticket">
          <button type="button" class="btn btn-info" style={{ width: "150px" }}>
            Teacher
          </button>
        </NavLink>
        <NavLink to="/ticket/Student">
          <button
            type="button"
            class="btn btn-info"
            style={{ width: "150px", marginLeft: "2%" }}
          >
            Student
          </button>
        </NavLink>
        <NavLink to="/ticket/Add">
          <button
            type="button"
            class="btn btn-info"
            style={{ width: "150px", marginLeft: "2%" }}
          >
            Add Ticket
          </button>
        </NavLink>
      </div>
    );
  }
}
